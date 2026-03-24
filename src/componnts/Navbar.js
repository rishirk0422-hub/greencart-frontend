import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { successAlert } from "../utils/toast";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  const go = (path) => {
    navigate(path);
    setOpen(false); // ✅ close on click
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning ☀️";
    if (hour < 18) return "Good Afternoon 🌤️";
    return "Good Evening 🌙";
  };

  const logout = () => {
    successAlert("Successfully Logged Out..!")
    localStorage.clear();
    navigate("/login");
    setOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background:
            "linear-gradient(90deg, #e0f7fa, #e8f5e9, #fce4ec)",
          color: "#333",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => go("/home")}
          >
            🌿 GreenCart
          </Typography>

          {/* DESKTOP NAV */}
          {user && (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2
              }}
            >
              <Button
                onClick={() => go("/home")}
                sx={{
                  borderBottom: isActive("/home") ? "2px solid #4caf50" : "none"
                }}
              >
                Home
              </Button>

              <Button
                onClick={() => go("/makesell")}
                sx={{
                  borderBottom: isActive("/makesell")
                    ? "2px solid #4caf50"
                    : "none"
                }}
              >
                Make Sell
              </Button>

              <Button
                onClick={() => go("/dashboard")}
                sx={{
                  borderBottom: isActive("/dashboard")
                    ? "2px solid #4caf50"
                    : "none"
                }}
              >
                Dashboard
              </Button>

              <Button
                onClick={() => go("/about")}
                sx={{
                  borderBottom: isActive("/about")
                    ? "2px solid #4caf50"
                    : "none"
                }}
              >
                About
              </Button>
            </Box>
          )}

          {/* RIGHT SIDE (DESKTOP) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2
            }}
          >
            {!user ? (
              <>
                <Button
                  variant="outlined"
                  onClick={() => go("/login")}
                  sx={{
                    borderColor: "#4caf50",
                    color: "#4caf50",
                    borderRadius: 2
                  }}
                >
                  Login
                </Button>

                <Button
                  variant="contained"
                  onClick={() => go("/signup")}
                  sx={{
                    background:
                      "linear-gradient(45deg, #66bb6a, #43a047)",
                    borderRadius: 2
                  }}
                >
                  Signup
                </Button>
              </>
            ) : (
              <>
                <Box sx={{ textAlign: "right" }}>
                  <Typography fontSize={14} fontWeight="bold">
                    {user.name}
                  </Typography>
                  <Typography fontSize={11} sx={{ opacity: 0.7 }}>
                    {getGreeting()}
                  </Typography>
                </Box>

                <Avatar sx={{ bgcolor: "#66bb6a" }}>
                  {user.name?.charAt(0).toUpperCase()}
                </Avatar>

                <IconButton onClick={logout}>
                  <LogoutIcon />
                </IconButton>
              </>
            )}
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 260, p: 2 }}>

          {/* USER INFO */}
          {user && (
            <Box sx={{ mb: 2 }}>
              <Typography fontWeight="bold">{user.name}</Typography>
              <Typography fontSize={12}>
                {getGreeting()}
              </Typography>
              <Divider sx={{ mt: 1 }} />
            </Box>
          )}

          <List>
            {user && (
              <>
                <ListItemButton onClick={() => go("/home")}>
                  <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton onClick={() => go("/makesell")}>
                  <ListItemText primary="Make Sell" />
                </ListItemButton>

                <ListItemButton onClick={() => go("/dashboard")}>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>

                <ListItemButton onClick={() => go("/about")}>
                  <ListItemText primary="About" />
                </ListItemButton>
              </>
            )}

            {!user ? (
              <>
                <ListItemButton onClick={() => go("/login")}>
                  <ListItemText primary="Login" />
                </ListItemButton>

                <ListItemButton onClick={() => go("/signup")}>
                  <ListItemText primary="Signup" />
                </ListItemButton>
              </>
            ) : (
              <ListItemButton onClick={logout}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;