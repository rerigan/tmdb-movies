import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" id='site-title'>TMDB <span id='movies-tmdb'>MOVIES</span></Link>
      </div>
      <div className="navbar-links">
        
        <Link to="/favorites" className="nav-link" id='favorites-link'>
        ❤︎
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
