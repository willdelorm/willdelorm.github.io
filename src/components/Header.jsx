import React from "react";
import {
  CaretCircleDoubleRight,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import ProfileImage from "../assets/profile.jpg";

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
    <header className="px-10 py-10 lg:left-0 lg:fixed lg:w-[300px] lg:h-screen lg:px-4">
      <img
        src={ProfileImage}
        alt="profile image"
        className="w-[150px] border-8 border-white/25 rounded-full mx-auto mb-6 xl:w-[200px]"
      />
      <div className="text-center mb-8">
        <h1>Will Delorm</h1>
        <h2 className="text-base">Your friendly neighborhood developer</h2>
      </div>
      <nav>
        <ul className="hidden lg:block text-xl mx-6 mb-8">
          {navItems.map(({ title, url }, index) => (
            <li key={index} className="mb-3">
              <a
                href={url}
                className="flex items-center space-x-4"
              >
                <CaretCircleDoubleRight size={24} />
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="flex space-x-6 justify-center">
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
