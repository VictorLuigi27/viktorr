import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projets() {
  const [projets, setProjets] = useState<Projet[]>([]);
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjets(data))
      .catch((error) => console.error("Erreur de chargement des projets :", error));
  }, []);

  interface Projet {
    id: number;
    title: string;
    description: string;
    demo: string;
    site: string;
    technologies: string[];
  }

  const handleClick = (projet: Projet) => {
    setSelectedProjet(projet);
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      <h1 className="GatbyGilmourRegular text-3xl text-center pt-10 md:text-4xl lg:text-5xl lg:pt-20">Projets</h1>

      <div className="flex flex-col items-center gap-10 pt-10 mt-10 md:flex-row md:justify-center md:gap-28 md:mt-32">
        {projets.map((projet) => (
          <motion.div
            key={projet.id}
            className="relative w-72 h-64 bg-black rounded-lg cursor-pointer"
            onClick={() => handleClick(projet)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: projet.id * 0.1 }}
          >
            <div className="absolute inset-0 m-auto w-48 h-48 bg-white flex items-center justify-center rounded-md">
              <h2 className="text-3xl font-bold text-black AlienLeagueRegular">{projet.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProjet && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white text-black p-8 rounded-lg max-w-sm w-full md:p-16 md:max-w-lg">
            <h2 className="text-2xl font-bold AlienLeagueRegular md:text-4xl">{selectedProjet.title}</h2>
            <p className="mt-4 text-lg md:text-xl">{selectedProjet.description}</p>
            <div className="mt-4">
              <img src={selectedProjet.demo} alt={selectedProjet.title} className="w-full rounded-md"/>
            </div>
            <div className="mt-4">
              <a
                href={selectedProjet.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Voir le site
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400 md:text-md">
                Technologies : {selectedProjet.technologies.join(", ")}
              </p>
            </div>
            <button
              className="mt-4 text-white bg-gray-900 px-4 py-2 rounded-md"
              onClick={() => setSelectedProjet(null)}
            >
              Fermer
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}