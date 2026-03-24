import {
  Box,
  Button,
  Card,
  Container,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
  
  function Home() {
    const navigate = useNavigate();
  
    const features = [
      "🚚 Doorstep scrap pickup",
      "💰 Earn money from waste",
      "♻️ Eco-friendly recycling",
      "👷 Trusted collectors"
    ];
  
    const gradients = [
      "linear-gradient(135deg, #fdfbfb, #ebedee)",
      "linear-gradient(135deg, #e0f7fa, #e8f5e9)",
      "linear-gradient(135deg, #fce4ec, #f3e5f5)",
      "linear-gradient(135deg, #fff3e0, #f1f8e9)"
    ];
  
    const steps = [
      {
        title: "Add Scrap Details",
        desc: "Enter type, weight & address easily",
        emoji: "📝"
      },
      {
        title: "Collector Accepts",
        desc: "Nearby collector picks your request",
        emoji: "👷"
      },
      {
        title: "Pickup & Earn",
        desc: "Get paid instantly after pickup",
        emoji: "💰"
      }
    ];
  
    return (
      <Box>
        {/* HERO */}
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            textAlign: "center",
            background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
          }}
        >
          <Container>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Turn Your Scrap into Cash 💰
            </Typography>

            <Typography sx={{ mt: 2, mb: 4 }}>
              Book pickups, track orders, and recycle smartly with GreenCart
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/makesell")}
              sx={{
                background: "#2e7d32",
                px: 4,
                borderRadius: 3,
              }}
            >
              Start Selling ♻️
            </Button>
          </Container>
        </Box>

        {/* FEATURES */}
        <Container sx={{ py: 6 }}>
          <Typography variant="h4" textAlign="center" mb={4}>
            Why Choose Us?
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr 1fr",
              },
              gap: 3,
            }}
          >
            {features.map((f, i) => (
              <Card
                key={i}
                sx={{
                  height: 180,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",

                  borderRadius: 4,
                  p: 3,
                  background: gradients[i],

                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",

                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Typography fontWeight="500">{f}</Typography>
              </Card>
            ))}
          </Box>
        </Container>

        {/* HOW IT WORKS */}
        <Box
          sx={{
            py: 7,
            background: "linear-gradient(135deg, #f9f9f9, #f1f8e9)",
          }}
        >
          <Container>
            <Typography variant="h4" textAlign="center" mb={5}>
              How It Works
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr 1fr",
                },
                gap: 4,
              }}
            >
              {steps.map((step, i) => (
                <Card
                  key={i}
                  sx={{
                    height: 260,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",

                    borderRadius: 4,
                    p: 4,

                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",

                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <Typography fontSize={40}>{step.emoji}</Typography>

                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                    {step.title}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>{step.desc}</Typography>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* CTA */}
        <Box
          sx={{
            py: 8,
            textAlign: "center",
            background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Ready to recycle smarter?
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3, px: 4, borderRadius: 3 }}
            onClick={() => navigate("/signup")}
          >
            Join Now 🚀
          </Button>
        </Box>
      </Box>
    );
  }
  
  export default Home;