import React from "react";
import backgroundImage from "../assets/images/couverture-acceuil.jpg";
import "@fontsource/eb-garamond"; // Poids par défaut (400)


export default function Accueil() {
  return (
    <div className="relative p-32 w-full ">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay sombre */}
      <div className="absolute" />

      {/* Contenu au centre */}
      <div className="relative z-10 flex h-full items-center justify-center text-white text-center px-4">
        <div className="flex flex-col gap-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            Haute École d'Informatique
          </h1>
          <p className="text-lg md:text-xl">
            Une infrastructure de qualité et un programme 
            pédagogique qui répond au besoin du marché pour 
            <br />l'employabilité de nos etudiants.
          </p>
          <div className="flex ml-10 justify-around">
            <button className="p-4 cursor-pointer rounded-lg text-[#001948] bg-white font-bold">Inscrivez-vous</button>
            <button className="p-4 cursor-pointer rounded-lg bg-[#DFA408] text-white font-bold hover:bg-[#DFA405]">Emploi du temps</button>
            <button className="p-4 hover:bg-[#001945] cursor-pointer rounded-lg bg-[#001948] text-white font-bold">Programme pédagogique</button>
          </div>
          <p>Habilitation MESupRES,suivant nº31309/2023</p>
        </div>
      </div>
    </div>
  );
}
