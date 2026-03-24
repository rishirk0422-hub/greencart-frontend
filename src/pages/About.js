import {
  Box,
  Card,
  Container,
  Typography
} from "@mui/material";

function About() {
  const highlights = [
    {
      title: "Eco-Friendly",
      desc: "We promote sustainable recycling to reduce waste and pollution.",
      emoji: "🌱"
    },
    {
      title: "Earn from Scrap",
      desc: "Turn your waste into money with doorstep pickup.",
      emoji: "💰"
    },
    {
      title: "Smart Tracking",
      desc: "Track all your scrap requests in real-time.",
      emoji: "📊"
    },
    {
      title: "Trusted Network",
      desc: "Verified collectors ensure safe and reliable service.",
      emoji: "👷"
    }
  ];

  const gradients = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #43cea2, #185a9d)",
    "linear-gradient(135deg, #ff7e5f, #feb47b)",
    "linear-gradient(135deg, #11998e, #38ef7d)"
  ];

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          textAlign: "center",
          background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
            }}
          >
            About Scrap Flow ♻️
          </Typography>

          <Typography sx={{ mt: 2, maxWidth: 600, mx: "auto" }}>
          Scrap Flow is on a mission to simplify recycling by connecting users
            with collectors and turning waste into value.
          </Typography>
        </Container>
      </Box>

      {/* MISSION */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
          Our Mission
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            maxWidth: 700,
            mx: "auto",
            color: "text.secondary",
          }}
        >
          We aim to make recycling effortless, rewarding, and accessible for
          everyone. By bridging the gap between households and scrap collectors,
          we create a cleaner, greener future.
        </Typography>
      </Container>

      {/* HIGHLIGHTS */}
      <Container sx={{ pb: 8 }}>
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
          {highlights.map((item, i) => (
            <Card
              key={i}
              sx={{
                height: 260, // 🔥 fixed = perfect alignment

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",

                borderRadius: 4,
                p: 3,
                color: "#fff",
                background: gradients[i],

                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Typography fontSize={36}>{item.emoji}</Typography>

              <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                {item.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: 13,
                  lineHeight: 1.4,
                }}
              >
                {item.desc}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>

      {/* FOOTER SECTION */}
      <Box
        sx={{
          py: 6,
          textAlign: "center",
          background: "linear-gradient(135deg, #f1f8e9, #e3f2fd)",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          ♻️ Small Steps, Big Impact
        </Typography>

        <Typography sx={{ mt: 1, color: "text.secondary" }}>
          Join us in making the world cleaner and greener.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;