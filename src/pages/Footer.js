import {
    Box,
    Typography,
    IconButton
  } from "@mui/material";
  import {
    Facebook,
    Instagram,
    LinkedIn,
    Email,
    Phone
  } from "@mui/icons-material";
  import { useNavigate } from "react-router-dom";
  
  function Footer() {
    const navigate = useNavigate();
  
    return (
      <Box
        sx={{
          mt: "auto",
          width: "100%",
          background:
            "linear-gradient(90deg, #e0f7fa, #e8f5e9, #fce4ec)",
          px: { xs: 2, sm: 4, md: 8 },
          py: 4
        }}
      >
        {/* MAIN CONTENT */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // ✅ KEY FIX
            justifyContent: "space-between",
            gap: 4,
            maxWidth: "1300px",
            mx: "auto"
          }}
        >
  
          {/* BRAND */}
          <Box sx={{ flex: "1 1 250px" }}>
            <Typography variant="h6" fontWeight="bold">
              🌿 Meera EcoTech
            </Typography>
  
            <Typography sx={{ mt: 1 }}>
              Smart recycling solutions for a cleaner planet ♻️
            </Typography>
  
            <Box sx={{ mt: 2 }}>
              <IconButton size="small"><Facebook /></IconButton>
              <IconButton size="small"><Instagram /></IconButton>
              <IconButton size="small"><LinkedIn /></IconButton>
            </Box>
          </Box>
  
          {/* LINKS */}
          <Box sx={{ flex: "1 1 150px" }}>
            <Typography fontWeight="bold" gutterBottom>
              Links
            </Typography>
  
            {[
              { label: "Home", path: "/home" },
              { label: "Dashboard", path: "/dashboard" },
              { label: "Make Sell", path: "/makesell" },
              { label: "About", path: "/about" }
            ].map((link) => (
              <Typography
                key={link.label}
                onClick={() => navigate(link.path)}
                sx={{
                  cursor: "pointer",
                  mb: 1,
                  fontSize: 14,
                  "&:hover": { color: "#2e7d32" }
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
  
          {/* CONTACT */}
          <Box sx={{ flex: "1 1 200px" }}>
            <Typography fontWeight="bold" gutterBottom>
              Contact
            </Typography>
  
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1 }} fontSize="small" />
              <Typography fontSize={14}>
                rishirk0422@gmail.com
              </Typography>
            </Box>
  
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Phone sx={{ mr: 1 }} fontSize="small" />
              <Typography fontSize={14}>
                +91 9325143126
              </Typography>
            </Box>
          </Box>
  
        </Box>
  
        {/* BOTTOM */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <Typography variant="caption">
            © 2026 Meera Tech. All rights reserved.
          </Typography>
        </Box>
      </Box>
    );
  }
  
  export default Footer;