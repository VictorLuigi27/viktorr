import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/menu";
import Profil from "./components/Profil/profil";
import Formations from "./components/Formations/formations";
import Projets from "./components/Projets/projets";
import Competences from "./components/Competences/competences";
import Contact from "./components/Contact/contact";
import MusicBackground from "./components/MusicBackground/musicbackground";

function App() {

  return (
    <Router>
      <MusicBackground /> 
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/experiences-et-formations" element={<Formations />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
