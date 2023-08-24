import { Link } from "react-router-dom";
import { LocationIcon, LogoutIcon, TaskIcon } from "../icons";

export default function Navbar() {
  return (
    <nav className="basis-[235px] flex flex-col justify-between py-5 h-[100vh]">
      <div className="basis-[100%] flex flex-col gap-4">
        <Link to="/" className="link">
          <span>
            <TaskIcon />
          </span>
          Tasks
        </Link>
        <Link to="/location" className="link">
          <span>
            <LocationIcon />
          </span>
          Location
        </Link>
      </div>
      <div>
        <button type="button">
          <span>
            <LogoutIcon />
          </span>
          Logout
        </button>
      </div>
    </nav>
  );
}
