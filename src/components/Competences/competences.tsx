import { motion } from "framer-motion";

export default function Competences() {
  const skills = [
    { name: "HTML", src: "/images/html.svg" },
    { name: "CSS", src: "/images/css.svg" },
    { name: "JavaScript", src: "/images/javascript.svg" },
    { name: "React", src: "/images/react.svg" },
    { name: "Node.js", src: "/images/node.svg" },
    { name: "MongoDB", src: "/images/mongo.svg" },
    { name: "Express.js", src: "/images/express.svg" },
    { name: "Next.js", src: "/images/nextjs.svg" },
    { name: "Three.js", src: "/images/threejs.svg" },
    { name: "TailwindCSS", src: "/images/tailwind.svg" },
    { name: "Bootstrap", src: "/images/bootstrap.svg" },
    { name: "Figma", src: "/images/figma.svg" }
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white flex flex-col items-center">
      <h1 className="GatbyGilmourRegular text-4xl text-center pt-20">Compétences</h1>

      <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-20 mt-16 px-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Délais pour décaler les animations
          >
            <img 
              src={skill.src} 
              alt={skill.name} 
              className="transition-transform duration-300 transform group-hover:-translate-y-4"
            />
            <div className="absolute inset-x-0 bottom-[-30px] bg-opacity-80 text-white text-center text-2xl py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 TrenchThin">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
