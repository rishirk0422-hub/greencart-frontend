import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button
} from "@mui/material";
import { useForm } from "react-hook-form";
import API from "../services/api";
import { errorAlert, successAlert } from "../utils/toast";

function MakeSell() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/scrap", data);
      successAlert("Pickup Booked Successfully..!")
      reset();
    } catch (err) {
      errorAlert("Error while booking pickup..!")
    }
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #fdfcfb, #e2d1c3)" // 🎨 NEW SOFT GRADIENT
      }}
    >
      <Container maxWidth="sm">

        {/* TITLE */}
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" fontWeight="bold">
            ♻️ Sell Your Scrap
          </Typography>

          <Typography color="text.secondary" fontSize={14}>
            Quick pickup booking in seconds
          </Typography>
        </Box>

        {/* FORM CARD */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>

            <TextField
              fullWidth
              size="small"
              label="Scrap Type"
              margin="dense"
              {...register("type")}
            />

            <TextField
              fullWidth
              size="small"
              label="Weight (kg)"
              margin="dense"
              {...register("weight")}
            />

            <TextField
              fullWidth
              size="small"
              label="Address"
              margin="dense"
              {...register("address")}
            />

            <TextField
              fullWidth
              size="small"
              label="Expected Price (₹)"
              margin="dense"
              {...register("expectedPrice")}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: 1.2,
                borderRadius: 3,
                fontWeight: "bold",
                background:
                  "linear-gradient(45deg, #ff9a9e, #fad0c4)" // 🎨 button gradient
              }}
            >
              Book Pickup 🚀
            </Button>

          </form>
        </Paper>

      </Container>
    </Box>
  );
}

export default MakeSell;