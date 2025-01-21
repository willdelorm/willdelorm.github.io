import { CaretRight } from "@phosphor-icons/react";

function Projects() {
  const projects = [
    {
      title: "project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut magni voluptatibus possimus architecto adipisci expedita veritatis quasi et animi aspernatur, maxime mollitia saepe corporis ad rem inventore doloremque labore?",
      devItems: ["tech1", "tech3", "tech4"],
    },
    {
      title: "project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut magni voluptatibus possimus architecto adipisci expedita veritatis quasi et animi aspernatur, maxime mollitia saepe corporis ad rem inventore doloremque labore?",
      devItems: ["tech1", "tech3", "tech4"],
    },
    {
      title: "project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut magni voluptatibus possimus architecto adipisci expedita veritatis quasi et animi aspernatur, maxime mollitia saepe corporis ad rem inventore doloremque labore?",
      devItems: ["tech1", "tech3", "tech4"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full px-10 py-32 flex justify-between items-center space-x-10"
    >
      <div className="mb-10 flex-1 space-y-10">
        <div className="space-y-3">
          <h2 className="text-4xl font-medium">Projects</h2>
          <hr className="w-16 border-0 border-t-2" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            eligendi aspernatur expedita dolore, cupiditate in at quisquam
            recusandae, ducimus maiores minima quibusdam amet delectus odit
            similique exercitationem qui? Rem, magni.
          </p>
        </div>
        <div className="px-[120px] space-y-12">
          {projects.map((project) => (
            <div className="flex">
              <div className="max-w-[300px] mr-6">
                <img src="https://picsum.photos/300/200" alt="profile image" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl medium">{project.title}</h3>
                <p>{project.description}</p>
                <div className="px-6 flex space-x-3">
                  {project.devItems.map((item) => (
                    <div className="bg-gray-200 px-3 py-1 rounded-lg">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
