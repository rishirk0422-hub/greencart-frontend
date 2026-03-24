import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import MakeSell from "./pages/makeSell";
import Dashboard from "./pages/Dashboard";
import Navbar from "./componnts/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./componnts/PrivateRoute";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        {/* MAIN CONTENT */}
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/makesell" element={<MakeSell />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
