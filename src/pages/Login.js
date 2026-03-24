import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  Box
} from "@mui/material";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import React from "react";
import { errorAlert, successAlert } from "../utils/toast";
import { useState } from "react";
import {
  InputAdornment,
  IconButton
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validation";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [role, setRole] = React.useState("user");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await login({
        ...data,
        role
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      successAlert("Logged In Successfully..!")
      navigate("/dashboard");
    } catch (err) {
      errorAlert(err?.response?.data?.msg || "Login failed..!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #fce4ec, #e8f5e9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            p: 3,
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.95)",
          }}
        >
          {/* HEADER */}
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            🔐 Welcome Back
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Login to continue
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              size="small"
              label="Email *"
              margin="dense"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.email}
            />

            <TextField
              fullWidth
              size="small"
              label="Password *"
              type={showPassword ? "text" : "password"} // 👈 toggle
              margin="dense"
              {...register("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!errors.password}
              helperText={errors.email?.password}
            />
            <TextField
              label="Confirm Password *"
              size="small"
              margin="dense"
              fullWidth
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowConfirm(!showConfirm)}>
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* ROLE SELECT (MUI) */}
            <TextField
              select
              fullWidth
              size="small"
              label="Login As"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              margin="dense"
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="collector">Collector</MenuItem>
            </TextField>

            {/* BUTTON */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: 1.2,
                borderRadius: 3,
                fontWeight: "bold",
                background: "linear-gradient(45deg, #2196f3, #21cbf3)",
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;