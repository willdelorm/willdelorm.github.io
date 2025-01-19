import { CaretRight } from "@phosphor-icons/react";

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full px-10 py-32 flex justify-between items-center space-x-10"
    >
      <div className="max-w-[720px] mb-10 flex-1 space-y-10">
        <div className="space-y-3">
          <h2 className="text-4xl font-medium">Skills</h2>
          <hr className="w-16 border-0 border-t-2" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex justify-between px-[120px]">
          <div>
            <h3 className="text-2xl font-medium mb-3">Languages</h3>
            <ul className="mb-3">
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>TypeScript</p>
              </li>
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>HTML/CSS</p>
              </li>
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>SQL</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-3">Other stuff</h3>
            <ul className="mb-3">
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>React</p>
              </li>
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>Tailwind</p>
              </li>
              <li className="mb-4 flex items-center space-x-3">
                <CaretRight size={24} />
                <p>PostGreSQL</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-[300px] h-[300px] bg-gray-600">
        {/* Dev Icons here */}
      </div>
    </section>
  );
}

export default Skills;
