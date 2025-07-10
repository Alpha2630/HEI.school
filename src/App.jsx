import React from "react";
import Apropos from "./components/Apropos";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import TeamCarousel from "./components/TeamCaroussel";
function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <Apropos />
      <TeamCarousel/>
     </div>
  );
}

export default App;
