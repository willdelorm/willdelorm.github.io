import queerEugene from "../assets/queereugene.png";
import designationDK from "../assets/designationDK.png";
import clearscore from "../assets/clearscore.png";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { motionParent, motionChild } from "../utils/motion.utils";

function Projects() {
  const projects = [
    {
      title: "Queer Eugene",
      link: "https://github.com/willdelorm/queer-eugene-2024",
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
      link: "https://willdelorm.github.io/clearscore/",
      image: clearscore,
      description:
        "Frontend Technical Assessment: Ideas board to create, update and delete ideas.",
      devItems: ["React", "TypeScript", "Vite"],
    },
  ];

  return (
    <section id="projects" className="w-full px-10 py-20 xl:px-20 xl:py-32">
      <motion.div
        className="max-w-[1000px] space-y-4"
        variants={motionParent}
        initial="hidden"
        whileInView="fadeUp"
        viewport={{ once: true }}
      >
        <motion.div variants={motionChild}>
          <h2>Projects</h2>
          <hr className="w-16 border-0 border-t-2" />
        </motion.div>
        <motion.ul className="space-y-16" variants={motionParent}
        initial="hidden"
        whileInView="fadeUp"
        viewport={{ once: true }}>
          {projects.map((project, idx) => (
            <motion.li variants={motionChild} key={idx}>
              <a
                href={project.link}
                target="_blank"
                className="flex flex-col lg:flex-row"
              >
                <div className="mb-6 lg:mr-6">
                  <img
                    src={project.image}
                    className="w-full lg:w-[300px]"
                    alt="screenshot of project"
                  />
                </div>
                <div className="lg:flex-1">
                  <h3 className="mb-3">
                    {project.title}{" "}
                    <span className="inline-block">
                      <ArrowUpRight size={20} />
                    </span>
                  </h3>
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
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default Projects;
