import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import Genres from "./pages/Genres"
import { MovieProvider } from "./contexts/MovieContext";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
       
      </main>
    
      <h2><a href='http://rerigan.github.io/' id='footercredit'>Desenvolvido por Rerigan</a></h2>
    </MovieProvider>

    
  );
}

export default App;
