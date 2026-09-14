import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">

      <Link to="/" className="brand">
        <div className="logo">
          PSG
        </div>

        <div className="brand-text">
          <span>PSG</span>
          <strong>Student Grievance Portal</strong>
        </div>
      </Link>


      <div className="nav-links">

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/grievances"
          className={
            location.pathname.startsWith("/grievances")
              ? "active"
              : ""
          }
        >
          My Grievances
        </Link>

      </div>


      <div className="profile">

        <div className="profile-circle">
          J
        </div>

        <div className="profile-info">
          <strong>Student</strong>
          <span>22XX000</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;