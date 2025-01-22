import { motion } from 'framer-motion';

export default function Profil() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white flex flex-col lg:flex-row px-6 py-8 lg:pt-[10rem] lg:pl-[10rem] lg:overflow-hidden">
      {/* Section gauche : image + texte */}
      <motion.div
        className="flex flex-col items-center lg:items-center lg:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -100 }} // Commence à gauche avec opacité 0
        animate={{ opacity: 1, x: 0 }} // Se déplace vers sa position et devient visible
        transition={{ duration: 1 }}
      >
        <img
          src="/images/photo-site.jpg"
          alt="Photo"
          className="rounded-full w-40 lg:w-64 lg:mb-5"
        />
        <div className="TrenchThin text-base text-center lg:text-left space-y-4 max-w-xs lg:max-w-lg lg:text-2xl">
          <p>
            Salut à toi, je m'appelle Victor. Je suis un grand passionné
            d'informatique et de jeux vidéo depuis mon plus jeune âge.
          </p>
          <p>
            J'ai toujours baigné dans ces domaines et mon but est de trouver un
            travail dans le développement web tout en concevant mes projets de
            jeux vidéos.
          </p>
          <p>
            Je suis très créatif et déterminé dans ma vie, en plus d'aimer
            apprendre de nouvelles technologies, car c'est ce qui m'anime au
            quotidien.
          </p>
        </div>
      </motion.div>

      {/* Section droite : jeux et artistes */}
      <motion.div
        className="flex flex-col items-center lg:items-center lg:w-1/2 space-y-10 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 100 }} // Commence à droite avec opacité 0
        animate={{ opacity: 1, x: 0 }} // Se déplace vers sa position et devient visible
        transition={{ duration: 1, delay: 0.3 }} // Ajout de délai pour que ce soit décalé
      >
        <p className="GatbyGilmourRegular text-2xl">Jeux et artistes préférés</p>
        
        {/* Liste des jeux */}
        <motion.ul
          className="space-y-5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }} // Délais pour une animation plus progressive
        >
          <li className="bg-white text-black w-48 lg:w-64 FungkaCityRegular text-xl lg:text-3xl rounded-md py-2 text-center">
            The Last of Us
          </li>
          <li className="bg-white text-black w-48 lg:w-64 FungkaCityRegular text-xl lg:text-3xl rounded-md py-2 text-center">
            Alice Madness Returns
          </li>
          <li className="bg-white text-black w-48 lg:w-64 FungkaCityRegular text-xl lg:text-3xl rounded-md py-2 text-center">
            Mindcop
          </li>
        </motion.ul>

        {/* Liste des artistes */}
        <motion.ul
          className="space-y-5"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }} // Délais pour décaler l'animation
        >
          <li className="bg-white text-black w-32 lg:w-40 FungkaCityRegular text-lg lg:text-3xl rounded-md py-2 text-center">
            Nirvana
          </li>
          <li className="bg-white text-black w-32 lg:w-40 FungkaCityRegular text-lg lg:text-3xl rounded-md py-2 text-center">
            The Cure
          </li>
          <li className="bg-white text-black w-32 lg:w-40 FungkaCityRegular text-lg lg:text-3xl rounded-md py-2 text-center">
            Knock2
          </li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
