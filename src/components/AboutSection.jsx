'use client'

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>MySQL</li>
        <li>Hibernate</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Calcutta Institute Of Engineering & Management</li>
        <li>Kalyani Central Model School</li>
        <li>Orient Day School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CodeChef CIEM Chapter</li>
        <li>Full Stack Web Development - Internshala training</li>
        <li>Web Development Internship - Prodigy InfoTech</li>
        <li>Letter of Recommendation - Prodigy InfoTech</li>
        <li>Java Full Stack Development using Angular - Anudip Foundation</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white py-8 px-4 xl:px-0 pt-24 pb-24" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
          <Image
            src="/image/laptop.webp"
            width={500}
            height={500}
            alt="Laptop image"
            className="rounded-lg shadow-2xl mb-8 md:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg mb-6">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have a strong
              foundation in technologies like Core Java, MySQL, Spring Boot,
              HTML, CSS, JavaScript, and Git. I am a quick learner and I am
              always looking to expand my knowledge and skill set.
            </p>
            <div className="flex flex-row justify-start mt-8">
              {TAB_DATA.map((item) => (
                <TabButton
                  key={item.id}
                  selectTab={() => handleTabChange(item.id)}
                  active={tab === item.id}
                >
                  {item.title}
                </TabButton>
              ))}
            </div>
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

