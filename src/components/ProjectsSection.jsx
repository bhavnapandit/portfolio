"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
const projectData = [
  {
    id: 1,
    title: "Food Ordering Website",
    description: "HTML-CSS-JAVASCRIPT",
    image: "/project/p1.png",
    gitUrl: "https://github.com/bhavnapandit/food-website.git",
    previewUrl: "https://food-website-black-psi.vercel.app/"
  },
  {
    id: 2,
    title: "Travel Website",
    description: "NEXT.JS",
    image: "/project/p7.png",
    gitUrl: "https://github.com/bhavnapandit/travel.git",
    previewUrl: "https://travel-beta-indol.vercel.app/"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Next.js-Tailwind",
    image: "/project/p8.png",
    gitUrl: "https://github.com/bhavnapandit/portfolio.git",
    previewUrl: "https://portfolio-lake-gamma-36.vercel.app/"
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description: "HTML-CSS-JAVASCRIPT",
    image: "/project/p3.png",
    gitUrl: "https://github.com/bhavnapandit/tic-tac-toe.git",
    previewUrl: "https://organized-curly-carnation.glitch.me/"
  },
  {
    id: 5,
    title: "Weather App",
    description: " HTML-CSS-Javascript ",
    image: "/project/p6.png",
    gitUrl: "https://github.com/bhavnapandit/weatherApp.git",
    previewUrl: "https://weather-app-theta-three-19.vercel.app/"
  },
  {
    id: 6,
    title: "Pet-Shelter-Management",
    description: "Java-Hibernate-Junit-Spring Boot-Postman",
    image: "/project/p4.png",
    gitUrl: "https://github.com/bhavnapandit/Pet-Rescue-And-Shelter-Management-System.git",
    previewUrl: "/"
  },
  {
    id: 7,
    title: "Free Code-learning Websites",
    description: "Angular-Bootstrap",
    image: "/project/p5.png",
    gitUrl: "/",
    previewUrl: "/"
  },
 
];
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  
  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul  className="grid md:grid-cols-3 gap-19 md:gap-12">
        {projectData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
