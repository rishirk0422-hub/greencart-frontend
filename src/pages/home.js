import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    Card,
    CardContent
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
            background:
              "linear-gradient(135deg, #d4fc79, #96e6a1)"
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
                borderRadius: 3
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
  
          <Grid container spacing={3}>
            {features.map((f, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: 4,
                    p: 3,
                    background: gradients[i],
                    border: "1px solid rgba(0,0,0,0.08)", // ✅ faint border
                    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                    transition: "0.3s",
  
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)"
                    }
                  }}
                >
                  <CardContent>
                    <Typography fontWeight="500">
                      {f}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  
        {/* HOW IT WORKS */}
        <Box
          sx={{
            py: 7,
            background: "linear-gradient(135deg, #f9f9f9, #f1f8e9)"
          }}
        >
          <Container>
            <Typography variant="h4" textAlign="center" mb={5}>
              How It Works
            </Typography>
  
            <Grid container spacing={4}>
              {steps.map((step, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      textAlign: "center",
                      height: "100%",
                      border: "1px solid rgba(0,0,0,0.08)", // ✅ faint border
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      transition: "0.3s",
  
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }
                    }}
                  >
                    <Typography fontSize={40}>
                      {step.emoji}
                    </Typography>
  
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ mt: 2 }}
                    >
                      {step.title}
                    </Typography>
  
                    <Typography sx={{ mt: 1 }}>
                      {step.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
  
        {/* CTA */}
        <Box
          sx={{
            py: 8,
            textAlign: "center",
            background:
              "linear-gradient(135deg, #84fab0, #8fd3f4)"
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