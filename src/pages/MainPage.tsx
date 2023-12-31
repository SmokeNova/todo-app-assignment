import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function MainPage() {
  const { isAuthenticated } = useSelector((store: RootState) => store.auth);

  return isAuthenticated ? (
    <div className="flex w-[100vw] flex-col md:flex-row gap-16">
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
