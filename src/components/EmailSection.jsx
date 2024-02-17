"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-8">
        <h5 className="text-5xl font-bold text-white my-2 font-serif leading-tight">
          Let&apos;s Build <br />
          something <br />
          great together
        </h5>
        <p className="mt-6 mb-8 text-[#ADB7BE] border-b hover:text-slate-200 border-gray-500  font-serif text-sm">
          pritybhavna2001@gmail.com
        </p>
      </div>
      <div>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you.I'm open to internships, freelance work, or
          full-time positions, and I'm excited to embrace new challenges.
        </p>
        <div className=" flex flex-row gap-3 text-white text-3xl py-2">
          <Link href="https://github.com/bhavnapandit">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link href="https://www.linkedin.com/in/bhavna-pandit-470285235/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="https://www.facebook.com/bhavna.pandit.184">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>

        <Link className="px-6 py-2 mr-8 mt-2  w-full sm:w-fit rounded-full text-white bg-pink-500 hover:bg-slate-400" href='https://www.linkedin.com/in/bhavna-pandit-470285235/' >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
