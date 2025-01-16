"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-7 place-self-center text-center sm:text-left"
          >
            <motion.h1 
              className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I'm{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Bhavna",
                  1000,
                  "Web Developer",
                  1000,
                  "Software Developer",
                  1000,
                  "Electrical Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600"
              />
            </motion.h1>
            <motion.p 
              className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              As a recent graduate, I'm excited to embark on a journey into the
              world of development and contribute to innovative projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              <Link 
                href="https://drive.google.com/file/d/19vf_t6cf83uGC6bKLO0jDXXEIim1Czzj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button 
                  className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-5 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src="/image/hero-image.png"
                  alt="Bhavna's portrait"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
