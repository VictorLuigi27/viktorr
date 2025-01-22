import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Howl } from 'howler'; // Importer Howler.js

export default function Menu() {
  // Créer un objet Howl pour le son
  const hoverSound = new Howl({
    src: ['/music/sound-menu.wav'], // Chemin vers le fichier audio dans le dossier public
    volume: 0.1,  // Ajuste le volume si nécessaire
    onplay: () => {
      // Cette fonction est appelée lorsqu'un son commence à être joué
      if (Howler.ctx.state === 'suspended') {
        Howler.ctx.resume(); // Résume le contexte audio si suspendu
      }
    },
  });

  // Fonction qui joue le son au survol
  const playHoverSound = () => {
    hoverSound.play();
  };

  // Array of menu items to loop through for animation delay
  const menuItems = [
    { name: "Profil", to: "/profil" },
    { name: "Expériences et Formations", to: "/experiences-et-formations" },
    { name: "Compétences", to: "/competences" },
    { name: "Projets", to: "/projets" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      <motion.h1
        className="GatbyGilmourRegular text-7xl text-center pt-20"
        initial={{ opacity: 0, x: -100 }} // Initial state (invisible and offset to the left)
        animate={{ opacity: 1, x: 0 }} // Final state (visible and in the normal position)
        transition={{ duration: 1 }} // Duration of the animation
      >
        Victor
      </motion.h1>

      <motion.div
        className="TrenchThin text-3xl text-center mt-36"
        initial={{ opacity: 0, x: -100 }} // Start from the left side
        animate={{ opacity: 1, x: 0 }} // Animate to normal position
        transition={{ duration: 1, delay: 0.5 }} // Delay to make the transition smooth
      >
        <ul className="flex flex-col space-y-5">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              className="inline-block"
              initial={{ opacity: 0, x: -100 }} // Start from the left side
              animate={{ opacity: 1, x: 0 }} // Animate to normal position
              transition={{
                duration: 1,
                delay: index * 0.3, // Add a delay based on the index (each item will have a different delay)
              }}
            >
              <Link
                to={item.to}
                className="inline-block transform transition hover:-translate-y-2 duration-300"
                onMouseEnter={playHoverSound} // Joue le son au survol
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <p className="text-center text-sm mt-[25rem]">&copy; 2025 VICTOR - Tous droits réservés.</p>
    </div>
  );
}
