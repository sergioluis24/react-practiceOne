import { useAuthStore } from "./../store/authStore.js";
import { Navigate } from "react-router";
export function ProtectedRute({ children }) {
  const { isLogged } = useAuthStore();

  if (!isLogged) return <Navigate to="/login"></Navigate>;

  return children;
}
