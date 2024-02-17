"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc px-3">
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
      <ul className="list-disc px-3">
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
      <ul className="list-disc px-3">
        <li>CodeChef CIEM Chapter</li>
        <li>Full Stack Web Development-Internshala training</li>
        <li>Web Development Intership-Prodigy InfoTech</li>
        <li>Letter of Recommendation-Prodigy InfoTech</li>
        <li>Java Full Stack Development using Angular - Anudip Foundation</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className=" text-white sm:py-8" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 z-12">
        <Image
          src="/image/laptop.webp"
          width={500}
          height={500}
          className="shadow-[0_10px_20px_10px_rgba(240,_46,_170,_0.1)]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full sm:py-6">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-small md:text-base">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have a strong
            foundation in technologies like Core Java, MySQL, Spring
            Boot,HTML,CSS, JavaScript and Git. I am a quick learner and I am
            always looking to expand my knowledge and skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {" "}
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
