import {
  CaretCircleDoubleRight,
  GithubLogo,
  LinkedinLogo,
  List,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import "./App.css";

function App() {
  const navItems = [
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Portfolio",
      url: "#portfolio",
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
    <div className="relative w-full bg-gray-500 flex">
      <div className="menuIcon block xl:hidden absolute top-4 right-4 p-3 rounded-full">
        <List size={32} />
      </div>
      <header className="hidden xl:block w-[300px] min-h-screen px-4 py-6 bg-gray-800 text-gray-100">
        <img
          src="https://picsum.photos/150"
          alt="profile image"
          className="mx-auto mb-6 border-8 border-white/25 rounded-full"
        />
        <h1 className="text-5xl font-medium text-center mb-4">Will Delorm</h1>
        <h2 className="text-center mb-8">
          Your friendly neighborhood developer
        </h2>
        <ul className="text-xl mx-6 mb-8">
          {navItems.map(({ title, url }, index) => (
            <li key={index} className="mb-3">
              <a href={url} className="flex items-center space-x-4">
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
      <main className="w-full min-h-screen flex-1"></main>
    </div>
  );
}

export default App;
