import React from "react";
import {
  CaretCircleDoubleRight,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import ProfileImage from "../assets/profile.jpg";

function Header({ handleClick }) {
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
      url: "mailto:willdelorm@gmail.com",
    },
  ];

  return (
    <header className="-left-full xl:left-0 fixed w-[300px] h-screen px-4 py-6 bg-gray-800 text-gray-100 z-10">
      <img
        src={ProfileImage}
        alt="profile image"
        className="w-[200px] mx-auto mb-6 border-8 border-white/25 rounded-full"
      />
      <h1 className="text-5xl font-medium text-center mb-4">Will Delorm</h1>
      <h2 className="text-center mb-8">Your friendly neighborhood developer</h2>
      <ul className="text-xl mx-6 mb-8">
        {navItems.map(({ title, url }, index) => (
          <li key={index} className="mb-3">
            <a
              href={url}
              className="flex items-center space-x-4"
              onClick={() => {
                if (window.innerWidth < 1280) {
                  handleClick();
                }
              }}
            >
              <CaretCircleDoubleRight size={24} />
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center space-x-8">
        {socialItems.map(({ icon, url }, index) => (
          <li key={index}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
