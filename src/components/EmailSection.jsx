"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const EmailSection = () => {
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socialLinks = [
    { href: "https://github.com/bhavnapandit", icon: faGithub },
    {
      href: "https://www.linkedin.com/in/bhavna-pandit-470285235/",
      icon: faLinkedin,
    },
    { href: "https://www.facebook.com/bhavna.pandit.184", icon: faFacebook },
    { href: "https://www.instagram.com/", icon: faInstagram },
  ];

  return (
    <section id="contact" className="py-24 sm:pr-6 lg:pr-8 overflow-hidden">
      <div className="max-w-7xl mx-auto backdrop-blur-lg border-gray-700 rounded-lg">
        <div className="p-8">
          
          <div className="grid md:grid-cols-2 gap-12">

            {/* Left Section */}
            <motion.div
              variants={fadeInUpVariants}
              initial="initial"
              animate="animate"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                Let&apos;s Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  something great
                </span>{" "}
                <br />
                together
              </h2>
              <motion.p
                className="text-lg text-gray-300 mb-8 font-serif"
                whileHover={{ color: "#FFFFFF", transition: { duration: 0.3 } }}
              >
                pritybhavna2001@gmail.com
              </motion.p>
            </motion.div>

            {/* Right Section */}
            <motion.div
              variants={fadeInUpVariants}
              initial="initial"
              animate="animate"
            >
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I&apos;m currently looking for new opportunities, my inbox is
                always open. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you. I&apos;m open to
                internships, freelance work, or full-time positions, and
                I&apos;m excited to embrace new challenges.
              </p>
              <div className="flex flex-wrap gap-6 text-white text-3xl mb-8">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="w-8 h-8 text-gray-300 hover:text-pink-500 transition-colors duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.linkedin.com/in/bhavna-pandit-470285235/"
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmailSection;
