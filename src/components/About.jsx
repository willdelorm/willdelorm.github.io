import { CaretRight } from "@phosphor-icons/react";

const aboutText = `Hi, I’m Will! I’m a frontend developer passionate about crafting beautiful, responsive websites that bring people’s ideas to life. I thrive on building digital spaces that reflect the passions of my clients.
Currently, I’m freelancing with local businesses to establish their online presence and expand their reach. Most recently, I designed and built a new site for Queer Eugene. On the side, I’m diving into Python and AI development to broaden my skill set.
Before web development, I designed lighting for performances, creating immersive atmospheres for audiences and artists. Later, I taught rock climbing, breaking down complex systems into simple, actionable steps. These experiences sharpened my eye for detail and my ability to communicate effectively with diverse teams.
When I’m not building sleek user interfaces, you’ll find me climbing, hiking, or lost in a good book. Lately, I’ve been channeling my inner Magneto to save the multiverse.
📬 Let’s connect! If you need a dynamic, detail-oriented developer, I’d love to collaborate.`

function About() {
  return (
    <section id="about" className="w-full px-10 py-32">
      <div className="mb-10 space-y-3">
        <h2 className="text-4xl font-medium">About</h2>
        <hr className="w-16 border-0 border-t-2" />
        {aboutText.split("\n").map((text, index) => (<p key={index}>{text}</p>))}
      </div>
    </section>
  );
}

export default About;
