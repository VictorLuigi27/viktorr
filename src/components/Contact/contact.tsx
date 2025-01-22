import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>('');  // État pour gérer le message de succès/erreur

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xiyd78r',  // OK
      'template_35mef2m',   // OK
      form.current!,
      'LpZhRfsvG2EPSUT3R'  // OK
    )
    .then((result) => {
        setMessage('Message envoyé avec succès!');  // Message de succès
        console.log('Message envoyé avec succès!', result.text);
    }, (error) => {
        setMessage(`Erreur lors de l'envoi: ${error.text}`);  // Message d'erreur
        console.log('Erreur lors de l\'envoi:', error.text);
    });

    form.current!.reset();
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-white flex flex-col items-center">
      <motion.h1
        className="GatbyGilmourRegular text-4xl text-center pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h1>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 flex flex-col gap-6 max-w-lg w-full px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Votre nom"
          className="p-4 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          className="p-4 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="p-4 h-40 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Envoyer
        </button>
      </motion.form>

      {/* Affichage du message de succès ou d'erreur */}
      {message && (
        <motion.div
          className="mt-6 text-center p-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: message.startsWith("Message") ? "bg-green-500" : "bg-red-500",
          }}
        >
          {message}
        </motion.div>
      )}

      {/* Linkedin avec animation d'apparition */}
      <motion.a 
        href="https://www.linkedin.com/in/victordiazpro/"
        target='_blank'
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src="/images/linkedin.svg"
          alt="Linkedin"
          className="mt-10"
        />
      </motion.a>
      
    </div>
  );
}