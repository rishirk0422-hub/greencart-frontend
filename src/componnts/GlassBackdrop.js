import { Backdrop, Box } from "@mui/material";
import { keyframes } from "@mui/system";
import logo from "../assets/greencartlogo.png";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
`;

function GlassBackdrop({ open }) {
  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 999, // 🔥 always on top
        color: "#fff"
      }}
    >
      {/* 🌈 Animated Background */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",

          background:
            "linear-gradient(-45deg, #e0f7fa, #e8f5e9, #fce4ec, #e3f2fd)",
          backgroundSize: "400% 400%",
          animation: `${gradientAnimation} 10s ease infinite`,
        }}
      />

      {/* 🧊 Glass Layer */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(25px)",
          background: "rgba(255,255,255,0.2)"
        }}
      />

      {/* 🌿 LOGO */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center"
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: 120,
            animation: `${float} 3s ease-in-out infinite`,
            filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.3))"
          }}
        />
      </Box>
    </Backdrop>
  );
}

export default GlassBackdrop;