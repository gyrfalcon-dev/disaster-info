import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="header">
      <Link to="/events" className="logo">
        🌎 DisasterInfo
      </Link>

      <nav className="navbar">
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Navbar;
