import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Formations() {
  interface Formation {
    id: number;
    title: string;
    date: string;
    description: string;
  }

  const [formations, setFormations] = useState<Formation[]>([]);
  const [visibleDescriptions, setVisibleDescriptions] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetch("/data/parcours.json")
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setFormations(data);
      })
      .catch((error) => console.error("Erreur de chargement des data : ", error));
  }, []);

  const toggleDescription = (id: number) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-white px-6 py-10 lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Section Expériences */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="GatbyGilmourRegular text-3xl text-center lg:text-center lg:mt-[5rem] lg:text-4xl lg:mb-[8rem]">
            Expériences
          </p>
          {formations
            .filter((formation) => formation.id === 1 || formation.id === 2)
            .map((formation) => (
              <motion.div
                key={formation.id}
                className="bg-black bg-opacity-50 p-6 rounded-md shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">{formation.title}</h3>
                <p className="text-gray-400">{formation.date}</p>
                <img
                  src="/click-logo.svg"
                  alt="click"
                  className="cursor-pointer w-8 h-8 mt-2 lg:ml-[58rem] ml-[19rem]"
                  onClick={() => toggleDescription(formation.id)}
                />
                {visibleDescriptions[formation.id] && (
                  <motion.p
                    className="mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {formation.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
        </motion.div>

        {/* Section Formations */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="GatbyGilmourRegular text-3xl text-center lg:text-center lg:mt-[5rem] lg:text-4xl lg:mb-[8rem]">
            Formations
          </p>
          {formations
            .filter((formation) => formation.id === 3 || formation.id === 4)
            .map((formation) => (
              <motion.div
                key={formation.id}
                className="bg-black bg-opacity-50 p-6 rounded-md shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">{formation.title}</h3>
                <p className="text-gray-400">{formation.date}</p>
                <img
                  src="/click-logo.svg"
                  alt="click"
                  className="cursor-pointer w-8 h-8 mt-2 lg:ml-[58rem] ml-[19rem]"
                  onClick={() => toggleDescription(formation.id)}
                />
                {visibleDescriptions[formation.id] && (
                  <motion.p
                    className="mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {formation.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
        </motion.div>

      </div>
    </div>
  );
}