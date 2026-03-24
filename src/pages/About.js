import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">About GreenCart</Typography>

      <Typography sx={{ mt: 2 }}>
        GreenCart helps users recycle waste efficiently
        and earn money while contributing to a cleaner planet.
      </Typography>
    </Container>
  );
}

export default About;