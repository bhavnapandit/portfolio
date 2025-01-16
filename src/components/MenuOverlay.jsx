"use client"

import React from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#121212] bg-opacity-95 z-50 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <motion.ul className="flex flex-col items-center space-y-6">
        {links.map((link, index) => (
          <motion.li key={index} variants={itemVariants}>
            <NavLink href={link.path} title={link.title} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MenuOverlay;

