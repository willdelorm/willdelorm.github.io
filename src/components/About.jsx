import { CaretRight } from "@phosphor-icons/react";

function About() {
  return (
    <section id="about" className="w-full px-10 py-32 max-w-[1200px]">
      <div className="mb-10 space-y-3">
        <h2 className="text-4xl font-medium">About</h2>
        <hr className="w-16 border-0 border-t-2" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          tempore, consequuntur nam unde maiores exercitationem eius rem ex
          doloribus officiis nisi? Corrupti cupiditate nobis fuga ea voluptatum?
          Officiis, totam laudantium.
        </p>
      </div>
      <div className="px-3 space-y-3">
        <h3 className="text-2xl font-medium">Web Developer</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <ul className="px-6">
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
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae
          blanditiis iure nisi perspiciatis temporibus voluptatum nulla
          laboriosam earum. Natus non corporis reiciendis vitae omnis doloremque
          dolorum, ipsum exercitationem assumenda?
        </p>
      </div>
    </section>
  );
}

export default About;
