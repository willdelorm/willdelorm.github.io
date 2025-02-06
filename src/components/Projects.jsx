import queerEugene from "../assets/queereugene.png";
import designationDK from "../assets/designationDK.png";
import clearscore from "../assets/clearscore.png";
import { ArrowUpRight } from "@phosphor-icons/react";

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
      className="w-full px-10 py-16 mx-auto md:py-32 space-y-4"
    >
        <div>
          <h2 className="md:text-4xl">Projects</h2>
          <hr className="w-16 border-0 border-t-2" />
        </div>
        <div className="md:px-[120px] space-y-16">
          {projects.map((project, idx) => (
            <a key={idx} href={project.link} target="_blank" className="flex flex-col md:flex-row">
              <div className="mb-6 md:mr-6">
                <img src={project.image} className="w-full md:w-[300px]" alt="profile image" />
              </div>
              <div className="md:flex-1">
                <h3 className="mb-3">{project.title}<span className="inline-block"><ArrowUpRight size={24} /></span></h3>
                <p className="mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.devItems.map((item) => (
                    <div key={item} className="dev-tag px-3 py-1 rounded-lg">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
    </section>
  );
}

export default Projects;
