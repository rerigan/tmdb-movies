import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div id='genresbutton'><Link to="/genres">Shows</Link></div>
      <div className="navbar-brand">
        <Link to="/" id='site-title'>TMDB <span id='movies-tmdb'>MOVIES</span></Link>
      </div>
      <div className="navbar-links">
        
        <Link to="/favorites" className="nav-link" id='favorites-link'>
        <ion-icon name="heart-sharp"></ion-icon>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
