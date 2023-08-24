import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate } from "react-router-dom";
import { Login } from "../components";

export default function LoginPage() {
  const { isAuthenticated } = useSelector((store: RootState) => store.auth);

  return isAuthenticated ? <Navigate to="/" /> : <Login />;
}
