import { Link, useLocation } from "react-router-dom";
import { LocationIcon, LogoutIcon, TaskIcon } from "../icons";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <nav className="md:basis-[18%] md:!max-w-[235px] flex flex-col justify-between py-5 h-[100vh]">
      <div className="md:basis-[100%] flex md:flex-col gap-4 flex-row">
        <Link
          to="/"
          className={`link ${pathname === "/" ? "linkSelected" : ""}`}
        >
          <span>
            <TaskIcon />
          </span>
          Tasks
        </Link>
        <Link
          to="/location"
          className={`link ${pathname === "/location" ? "linkSelected" : ""}`}
        >
          <span>
            <LocationIcon />
          </span>
          Location
        </Link>
      </div>
      <div>
        <button
          type="button"
          className="logout"
          onClick={() => dispatch(logout())}
        >
          <span>
            <LogoutIcon />
          </span>
          Logout
        </button>
      </div>
    </nav>
  );
}
