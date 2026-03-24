import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32" // green eco theme
    },
    secondary: {
      main: "#81c784"
    },
    background: {
      default: "#f4f9f4"
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif"
  }
});

export default theme;