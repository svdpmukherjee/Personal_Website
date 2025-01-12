import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-3xl" />,
      link: "https://linkedin.com/in/svdpmukherjee",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-3xl" />,
      link: "https://github.com/svdpmukherjee",
      color: "hover:text-[#333]",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-3xl" />,
      link: "https://www.facebook.com/svdp.mukherjee/",
      color: "hover:text-[#1877f2]",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-3xl" />,
      link: "mailto:suvadeep.mukherjee@uni.lu",
      color: "hover:text-red-500",
    },
  ];

  return (
    <div className="py-16" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <p className="text-gray-600">
            Feel free to reach out for any open vacancies, collaborations,
            discussions, or just to say hi!
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`text-gray-600 transition-colors duration-300 ${contact.color}`}
              aria-label={contact.name}
            >
              {contact.icon}
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Based in Luxembourg 🇱🇺, but always open to global opportunities and
            collaborations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
