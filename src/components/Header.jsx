import React from "react";
import {
  CaretCircleDoubleRight,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import ProfileImage from "../assets/profile.jpg";
import { motion } from "motion/react";
import { fadeRight, parentHeader } from "../utils/motion.utils";

function Header() {
  const navItems = [
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Projects",
      url: "#projects",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  const socialItems = [
    {
      icon: <LinkedinLogo size={32} />,
      url: "https://www.linkedin.com/in/willdelorm/",
    },
    {
      icon: <GithubLogo size={32} />,
      url: "https://www.github.com/willdelorm/",
    },
    {
      icon: <PaperPlaneTilt size={32} />,
      url: "mailto:will@willdelorm.com",
    },
  ];

  return (
    <motion.header
      className="px-10 py-10 lg:left-0 lg:fixed lg:w-[300px] lg:h-screen lg:px-4"
      variants={parentHeader}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
    >
      <motion.img
        src={ProfileImage}
        alt="profile image"
        className="w-[150px] border-8 border-white/25 rounded-full mx-auto mb-6 xl:w-[200px]"
        variants={fadeRight}
      />
      <motion.div className="text-center mb-8" variants={fadeRight}>
        <h1>Will Delorm</h1>
        <h2 className="text-base">Your friendly neighborhood developer</h2>
      </motion.div>
      <motion.nav variants={fadeRight}>
        <ul className="hidden lg:block text-xl mx-6 mb-8">
          {navItems.map(({ title, url }, index) => (
            <li key={index} className="mb-3">
              <a href={url} className="flex items-center space-x-4">
                <CaretCircleDoubleRight size={24} />
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
      <motion.ul className="flex space-x-6 justify-center" variants={fadeRight}>
        {socialItems.map(({ icon, url }, index) => (
          <li key={index}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </motion.ul>
    </motion.header>
  );
}

export default Header;
