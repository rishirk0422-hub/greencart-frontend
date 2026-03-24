import { toast } from "react-toastify";

// ✅ SUCCESS
export const successAlert = (msg) =>
  toast.success(msg, {
    style: {
      background: "linear-gradient(135deg, #00c853, #69f0ae)",
      color: "#fff",
      fontWeight: "500",
      borderRadius: "10px"
    }
  });

// ❌ ERROR
export const errorAlert = (msg) =>
  toast.error(msg, {
    style: {
      background: "linear-gradient(135deg, #ff1744, #ff8a80)",
      color: "#fff",
      fontWeight: "500",
      borderRadius: "10px"
    }
  });

// ⚠️ WARNING
export const warningAlert = (msg) =>
  toast.warn(msg, {
    style: {
      background: "linear-gradient(135deg, #ff9100, #ffd180)",
      color: "#000",
      fontWeight: "500",
      borderRadius: "10px"
    }
  });