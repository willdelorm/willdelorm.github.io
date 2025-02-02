import queerEugene from "../assets/queereugene.png";
import designationDK from "../assets/designationDK.png";
import betabox from "../assets/betabox.png";
import clearscore from "../assets/clearscore.png";

function Projects() {
  const projects = [
    {
      title: "Queer Eugene",
      link: "https://queereugene.com",
      image: queerEugene,
      description:
        "Non-profit LGBTQ+ organization in Eugene, Oregon. I was responsible for the front-end design and development of the website. The website was built using Next.js and Tailwind CSS.",
      devItems: ["React", "TailwindCSS", "Firebase", "Shadcn", "Next.js"],
    },
    {
      title: "DesignationDK",
      link: "https://designationdk.com",
      image: designationDK,
      description:
        "Small architecture firm in New York City. I built their landing page using SquareSpace and custom CSS.",
      devItems: ["SquareSpace", "CSS"],
    },
    {
      title: "BetaBox",
      link: "https://github.com/willdelorm/betabox",
      image: betabox,
      description:
        "Climbing tracker web app that allows users to log their climbing sessions and track their progress. This personal project was built using React and Bootstrap.",
      devItems: ["React", "Bootstrap", "Vite"],
    },
    {
      title: "ClearScore",
      link: "https://github.com/willdelorm/clearscore",
      image: clearscore,
      description:
        "Frontend Technical Assessment: Ideas board to create, update and delete ideas.",
      devItems: ["React", "TypeScript", "Vite"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full px-10 py-32 flex justify-between items-center space-x-10"
    >
      <div className="mb-10 flex-1 space-y-10">
        <div className="space-y-3 mb-20">
          <h2 className="text-4xl font-medium">Projects</h2>
          <hr className="w-16 border-0 border-t-2" />
        </div>
        <div className="px-[120px] space-y-16">
          {projects.map((project, idx) => (
            <a key={idx} href={project.link} className="flex">
              <div className="mr-6">
                <img src={project.image} className="w-[300px]" alt="profile image" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl medium">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex space-x-3">
                  {project.devItems.map((item) => (
                    <div key={item} className="bg-gray-200 px-3 py-1 rounded-lg">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
