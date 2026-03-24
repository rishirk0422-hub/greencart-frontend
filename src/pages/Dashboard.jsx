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

function Dashboard() {
  const [data, setData] = useState([]);
  const user = getUser();

  const fetchData = async () => {
    try {
      const res = await API.get("/scrap");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 👤 filter for user
  const filteredData =
    user?.role === "user"
      ? data.filter((i) => String(i.createdBy) === String(user._id))
      : data;

  // 📊 stats
  const stats = {
    total: filteredData.length,
    pending: filteredData.filter((i) => i.status === "pending").length,
    accepted: filteredData.filter((i) => i.status === "accepted").length,
    completed: filteredData.filter((i) => i.status === "completed").length
  };

  // 🎨 gradients
  const gradients = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #11998e, #38ef7d)",
    "linear-gradient(135deg, #ff512f, #dd2476)",
    "linear-gradient(135deg, #2193b0, #6dd5ed)"
  ];

  const getGradient = (index) => gradients[index % gradients.length];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f1f8e9, #e3f2fd, #fce4ec)",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 2, md: 4 },
          mb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* HEADER */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography variant="h4" fontWeight="bold">
            🚀 Dashboard
          </Typography>
          <Typography color="text.secondary">
            {user?.role === "user"
              ? "Track your scrap orders"
              : "Manage pickup requests"}
          </Typography>
        </Box>

        {/* STATS */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{ mb: { xs: 3, md: 4 } }}
        >
          {[
            { label: "Total", value: stats.total },
            { label: "Pending", value: stats.pending },
            { label: "Accepted", value: stats.accepted },
            { label: "Completed", value: stats.completed },
          ].map((stat, i) => (
            <Grid
              item
              xs={6}
              md={3}
              key={i}
              sx={{ display: "flex" }} // ✅ IMPORTANT
            >
              <Card
                sx={{
                  width: "100%",
                  height: "100%", // ✅ FORCE SAME HEIGHT

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",

                  borderRadius: 4,
                  p: 2,

                  color: "#fff",
                  background: gradients[i],

                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",

                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography variant="h4" fontWeight="bold" textAlign="center">
                  {stat.value}
                </Typography>

                <Typography
                  sx={{
                    opacity: 0.85,
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CARDS */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {filteredData.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item._id}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  borderRadius: 5,
                  overflow: "hidden",
                  color: "#fff",
                  background: getGradient(index),

                  boxShadow: "0 15px 35px rgba(0,0,0,0.25)",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2, sm: 3 },
                  }}
                >
                  {/* HEADER */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6">♻️ {item.type}</Typography>

                    <div className="ml-5">
                      <Chip
                        label={item.status}
                        sx={{
                          background: "#fff",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                      />
                    </div>
                  </Box>

                  {/* DETAILS */}
                  <Typography>{item.weight} kg</Typography>

                  {item.expectedPrice && (
                    <Typography sx={{ mt: 1 }}>
                      💰 ₹{item.expectedPrice}
                    </Typography>
                  )}

                  <Typography sx={{ mt: 1 }}>📍 {item.address}</Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      opacity: 0.7,
                      mt: 2,
                    }}
                  >
                    🕒 {new Date(item.createdAt).toLocaleString()}
                  </Typography>

                  {/* USER VIEW */}
                  {user?.role === "user" && item.status !== "pending" && (
                    <Box
                      sx={{
                        mt: 2,
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(255,255,255,0.15)",
                      }}
                    >
                      <Typography fontWeight="bold">🚚 Collector</Typography>
                      <Typography fontSize={14}>
                        {item.collectorName || "N/A"}
                      </Typography>
                      <Typography fontSize={14}>
                        {item.collectorAddress || "N/A"}
                      </Typography>
                    </Box>
                  )}

                  {/* COLLECTOR VIEW */}
                  {user?.role === "collector" &&
                    item.collectorId === user._id && (
                      <Typography
                        sx={{
                          mt: 2,
                          fontWeight: "bold",
                          color: "#00e676",
                        }}
                      >
                        Assigned to you ✅
                      </Typography>
                    )}
                  {/* ACTION BUTTONS (COLLECTOR ONLY) */}
                  {user?.role === "collector" && (
                    <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                      {/* ACCEPT */}
                      {item.status === "pending" && (
                        <Box
                          onClick={async () => {
                            await API.put(`/scrap/${item._id}`);
                            fetchData();
                          }}
                          sx={{
                            flex: 1,
                            textAlign: "center",
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            fontWeight: "bold",
                            background: "rgba(255,255,255,0.2)",
                            "&:hover": {
                              background: "rgba(255,255,255,0.35)",
                            },
                          }}
                        >
                          Accept
                        </Box>
                      )}

                      {/* COMPLETE */}
                      {item.status === "accepted" && (
                        <Box
                          onClick={async () => {
                            await API.put(`/scrap/complete/${item._id}`);
                            fetchData();
                          }}
                          sx={{
                            flex: 1,
                            textAlign: "center",
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            fontWeight: "bold",
                            background: "#00e676",
                            color: "#000",
                            "&:hover": {
                              background: "#00c853",
                            },
                          }}
                        >
                          Complete
                        </Box>
                      )}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* EMPTY STATE */}
        {filteredData.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography variant="h6">No orders yet 📦</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Dashboard;