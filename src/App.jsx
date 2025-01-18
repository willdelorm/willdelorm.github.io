import {
  CaretCircleDoubleRight,
  CaretRight,
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
    <div className="relative w-full bg-white flex">
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
      <main className="w-full min-h-screen flex-1 bg-gray-500">
        <section id="about" className="w-full px-10 py-32 bg-white">
          <div className="mb-10">
            <h2 className="text-4xl font-medium mb-3">About</h2>
            <hr className="w-16 border-0 border-t-2 mb-3" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              tempore, consequuntur nam unde maiores exercitationem eius rem ex
              doloribus officiis nisi? Corrupti cupiditate nobis fuga ea
              voluptatum? Officiis, totam laudantium.
            </p>
          </div>
          <div className="px-3">
            <h3 className="text-2xl font-medium mb-3">Web Developer</h3>
            <p className=" mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <ul className="px-6 mb-3">
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>Phone: 973-634-4619</p>
              </li>
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>Email: willdelorm@gmail.com</p>
              </li>
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>Location: Eugene, OR</p>
              </li>
            </ul>
            <p className=" mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              molestiae blanditiis iure nisi perspiciatis temporibus voluptatum
              nulla laboriosam earum. Natus non corporis reiciendis vitae omnis
              doloremque dolorum, ipsum exercitationem assumenda?
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
