import { Link, useLocation } from "react-router-dom";
import { LocationIcon, LogoutIcon, TaskIcon } from "../icons";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <nav className="md:basis-[18%] md:min-w-[170px] md:!max-w-[240px] flex flex-row max-md:items-center md:flex-col justify-between px-2 md:px-0 md:py-7 md:h-[100vh] text-black">
      <div className="md:basis-[100%] flex md:flex-col gap-2 md:gap-4 flex-row">
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
          <span className=" hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
}
