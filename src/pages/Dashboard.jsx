import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip
} from "@mui/material";
import API from "../services/api";
import { getUser } from "../utils/auth";
import GlassBackdrop from "../componnts/GlassBackdrop";

function Dashboard() {
  const [data, setData] = useState([]);
  const [showLoader,setShowLoader]=useState(false)
  const user = getUser();

  const fetchData = async () => {
    setShowLoader(true)
    try {
      const res = await API.get("/scrap");
      setShowLoader(false)
      setData(res.data);
    } catch (err) {
      setShowLoader(false)
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData =
    user?.role === "user"
      ? data.filter((i) => String(i.createdBy) === String(user._id))
      : data;

  const stats = {
    total: filteredData.length,
    pending: filteredData.filter((i) => i.status === "pending").length,
    accepted: filteredData.filter((i) => i.status === "accepted").length,
    completed: filteredData.filter((i) => i.status === "completed").length
  };

  // 🎨 PREMIUM GRADIENT SETS
  const statsGradients = [
    "linear-gradient(135deg, #5f2c82, #49a09d)",
    "linear-gradient(135deg, #134e5e, #71b280)",
    "linear-gradient(135deg, #ff9966, #ff5e62)",
    "linear-gradient(135deg, #36d1dc, #5b86e5)"
  ];

  const cardGradients = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #ff7e5f, #feb47b)",
    "linear-gradient(135deg, #43cea2, #185a9d)",
    "linear-gradient(135deg, #f7971e, #ffd200)",
    "linear-gradient(135deg, #00c6ff, #0072ff)",
    "linear-gradient(135deg, #f953c6, #b91d73)",
    "linear-gradient(135deg, #11998e, #38ef7d)",
    "linear-gradient(135deg, #fc4a1a, #f7b733)"
  ];

  const getCardGradient = (index) =>
    cardGradients[index % cardGradients.length];

  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return {
          bg: "rgba(255, 193, 7, 0.9)", // amber
          color: "#000"
        };
      case "accepted":
        return {
          bg: "rgba(33, 150, 243, 0.9)", // blue
          color: "#fff"
        };
      case "completed":
        return {
          bg: "rgba(76, 175, 80, 0.9)", // green
          color: "#fff"
        };
      default:
        return {
          bg: "#fff",
          color: "#000"
        };
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f1f8e9, #e3f2fd, #fce4ec)",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: { xs: 24, sm: 28, md: 34 },
              fontWeight: 700,
            }}
          >
            🚀 Dashboard
          </Typography>
          <Typography color="text.secondary">
            {user?.role === "user"
              ? "Track your scrap orders"
              : "Manage pickup requests"}
          </Typography>
        </Box>

        {/* STATS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 2,
            mb: 4,
          }}
        >
          {[
            { label: "Total", value: stats.total },
            { label: "Pending", value: stats.pending },
            { label: "Accepted", value: stats.accepted },
            { label: "Completed", value: stats.completed },
          ].map((stat, i) => (
            <Card
              key={i}
              sx={{
                height: 120,

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: 4,
                color: "#fff",
                background: statsGradients[i],

                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              }}
            >
              <Typography fontSize={26} fontWeight="bold">
                {stat.value}
              </Typography>

              <Typography fontSize={13}>{stat.label}</Typography>
            </Card>
          ))}
        </Box>

        {/* CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {filteredData.map((item, index) => {
            const statusStyle = getStatusStyle(item.status);
            return (
              <Card
                key={item._id}
                sx={{
                  height: 320, // 🔥 FIXED HEIGHT = alignment

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  borderRadius: 5,
                  color: "#fff",
                  background: getCardGradient(index),

                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",

                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                    p: { xs: 2, sm: 2.5, md: 3 },
                  }}
                >
                  {/* HEADER */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { sm: "center" },
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 16, sm: 18 },
                        fontWeight: 600,
                      }}
                    >
                      ♻️ {item.type}
                    </Typography>

                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        alignSelf: { xs: "flex-start", sm: "center" },

                        background: statusStyle.bg,
                        color: statusStyle.color,

                        fontWeight: "bold",
                        textTransform: "capitalize",

                        px: 1,
                        height: 26,
                      }}
                    />
                  </Box>

                  {/* DETAILS */}
                  <Box sx={{ mt: 1 }}>
                    {/* WEIGHT */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Typography sx={{ opacity: 0.8 }}>Weight</Typography>
                      <Typography fontWeight="bold">
                        {item.weight} kg
                      </Typography>
                    </Box>

                    {/* PRICE */}
                    {item.expectedPrice && (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 1,
                        }}
                      >
                        <Typography sx={{ opacity: 0.8 }}>Price</Typography>
                        <Typography fontWeight="bold">
                          ₹{item.expectedPrice}
                        </Typography>
                      </Box>
                    )}

                    {/* LOCATION */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Typography sx={{ opacity: 0.8 }}>Location</Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          textAlign: "right",
                          maxWidth: "60%",
                          wordBreak: "break-word",
                        }}
                      >
                        {item.address}
                      </Typography>
                    </Box>

                    {/* DATE */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Typography sx={{ opacity: 0.8 }}>Created</Typography>
                      <Typography fontWeight="bold">
                        {new Date(item.createdAt).toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>

                  {/* ACTIONS */}
                  <Box sx={{ mt: 2 }}>
                    {user?.role === "user" && item.status !== "pending" && (
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          background: "rgba(255,255,255,0.15)",
                        }}
                      >
                        <Typography fontSize={13} fontWeight="bold">
                          🚚 Collector
                        </Typography>
                        <Typography fontSize={12}>
                          {item.collectorName || "N/A"}
                        </Typography>
                        <Typography fontSize={12}>
                          {item.collectorAddress || "N/A"}
                        </Typography>
                      </Box>
                    )}

                    {user?.role === "collector" && (
                      <Box sx={{ display: "flex", gap: 1 }}>
                        {item.status === "pending" && (
                          <Box
                            onClick={async () => {
                              await API.put(`/scrap/${item._id}`);
                              fetchData();
                            }}
                            sx={{
                              flex: 1,
                              textAlign: "center",
                              py: 1.2,
                              borderRadius: 2,
                              cursor: "pointer",
                              fontWeight: "bold",
                              background: "rgba(255,255,255,0.25)",
                            }}
                          >
                            Accept
                          </Box>
                        )}

                        {item.status === "accepted" && (
                          <Box
                            onClick={async () => {
                              await API.put(`/scrap/complete/${item._id}`);
                              fetchData();
                            }}
                            sx={{
                              flex: 1,
                              textAlign: "center",
                              py: 1.2,
                              borderRadius: 2,
                              cursor: "pointer",
                              fontWeight: "bold",
                              background: "#00e676",
                              color: "#000",
                            }}
                          >
                            Complete
                          </Box>
                        )}
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* EMPTY */}
        {filteredData.length === 0 && (
          <Box textAlign="center" mt={6}>
            <Typography variant="h6">No orders yet 📦</Typography>
          </Box>
        )}
          <GlassBackdrop open={showLoader} />
      </Container>
    </Box>
  );
}

export default Dashboard;