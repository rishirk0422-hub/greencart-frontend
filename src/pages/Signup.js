import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  MenuItem,
  Box
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { errorAlert, successAlert } from "../utils/toast";
import {
  InputAdornment,
  IconButton
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../utils/validation";



function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await API.post("/auth/signup", {
        ...data,
        role,
      });
      successAlert("Signup Successful..!");
      navigate("/login");
    } catch (err) {
      errorAlert(err?.response?.data?.msg || "Signup failed ..!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f1f8e9, #e0f7fa, #fce4ec)",
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
            backdropFilter: "blur(12px)",
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
            🚀 Create Account
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Start your Scrap Flow journey
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              size="small"
              label="Name *"
              margin="dense"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.email?.name}
            />
            <TextField
              fullWidth
              size="small"
              label="Email *"
              margin="dense"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
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
                    <IconButton
                      edge="end"
                      onClick={() => setShowConfirm(!showConfirm)}
                    >
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              size="small"
              label="Mobile *"
              margin="dense"
              {...register("mobile")}
              error={!!errors.mobile}
              helperText={errors.email?.mobile}
            />
            {/* ROLE */}
            <TextField
              select
              fullWidth
              size="small"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              margin="dense"
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="collector">Collector</MenuItem>
            </TextField>
            {/* COLLECTOR FIELD */}
            {role === "collector" && (
              <TextField
                fullWidth
                size="small"
                label="Address *"
                margin="dense"
                {...register("address")}
              />
            )}
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
                background: "linear-gradient(45deg, #ff512f, #dd2476)",
              }}
            >
              Signup
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup;