import React from "react";
import Apropos from "./components/Apropos";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import TeamCarousel from "./components/TeamCaroussel";
import Pedagogique from "./components/Pedagogique";
import Techno from "./components/Techno";
import Partener from "./components/Partener";
function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <Apropos />
      <TeamCarousel/>
      <Pedagogique/>
      <Techno/>
      <Partener/>
     </div>
  );
}

export default App;
