import React from "react";
import Apropos from "./components/Apropos";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import TeamCarousel from "./components/TeamCaroussel";
import Pedagogique from "./components/Pedagogique";
import Techno from "./components/Techno";
import Partener from "./components/Partener";
import Footer from "./components/Footer";
import Debouche from './components/Debouche';
import Domaine from "./components/Domaine";
import Admission from "./components/Admission";
function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <Apropos />
      <TeamCarousel/>
      <Debouche/>
      <Domaine/>
      <Admission/>
      <Pedagogique/>
      <Techno/>
      <Partener/>
      <Footer/>
     </div>
  );
}

export default App;
