import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import des images
import Jean from "../assets/images/Jean-aimé.jpg";
import Parison from "../assets/images/Parisson.png";
import Yannick from "../assets/images/Yannick.jpg";
import Tahina from "../assets/images/Tahina.png";
import Lou from "../assets/images/Loup.jpg";
import Mirado from "../assets/images/Mirado.webp";
import Julien from "../assets/images/Julien.webp";
import Rayan from "../assets/images/Rayan.webp";



// Données des membres
const teamMembers = [
  {
    name: "Jean Aimé Maxa",
    role: "Responsable technique cybersécurité chez CES",
    location: "France Continental (Toulouse - France)",
    image: Jean,
  },
  {
    name: "Parison Ravalomanda",
    role: "Ingénieur en informatique | Ingénieur logiciel chez Google",
    location: "Londres – UK",
    image: Parison,
  },
  {
    name: "Yannick Raharijaona",
    role: "Responsable technique ML chez Rocket Science",
    location: "Ottawa – Canada",
    image: Yannick,
  },
  {
    name: "Dre Tahina Ralitera",
    role: "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO",
    location: "pour les Femmes en Science (2017)",
    image: Tahina,
  },
  {
    name: "Dr Lou Maurica",
    role: "Docteur-Ingénieur en informatique | Fondateur et Directeur",
    location: "pédagogique de HEI",
    image: Lou,
  }, {
    name: "Mirado RAFENOMAHENINTSOA",
    role: "Data and Business Intelligence",
    location: "Specialist 5+",
    image: Mirado,
  }, {
    name: "Julien RAJERISON",
    role: "Lead Développeur | Fondateur Techzara",
    location: "Madagascar",
    image: Julien,
  }, {
    name: "Ryan ANDRIAMAHERY",
    role: "Développeur end | Confodateur et Directeur des",
    location: "opéraateur de HEI",
    image: Rayan,
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Afficher 3 membres à la fois
  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + 3);
  if (visibleMembers.length < 3) {
    visibleMembers.push(
      ...teamMembers.slice(0, 3 - visibleMembers.length)
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? teamMembers.length - 3 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % teamMembers.length
    );
  };

  return (
    <div className="bg-[#6586C7] text-white py-12 px-4 text-center mt-11">
      <h2 className="text-3xl font-bold mb-4 font-serif">L'équipe pédagogique</h2>
      <p className="mb-8 max-w-3xl mx-auto">
      Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique,
       de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. 
       Ils sont passionnés par l’informatique et sont engagés vers l’excellence. 
       Nous sommes conscients que cette équipe est la pierre 
      angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
      </p>

      <div className="flex justify-center items-center gap-6">
        <button onClick={prevSlide}>
          <FaChevronLeft className="text-3xl hover:text-gray-300" />
        </button>

        {visibleMembers.map((member, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-lg w-80 shadow-md">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm mt-2">{member.role}</p>
            <p className="text-sm text-gray-600 mt-1">{member.location}</p>
          </div>
        ))}

        <button onClick={nextSlide}>
          <FaChevronRight className="text-3xl hover:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
