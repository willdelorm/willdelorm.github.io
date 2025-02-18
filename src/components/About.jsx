import { motion } from "motion/react";
import { fadeRight, fadeUp, parentAbout } from "../utils/motion.utils";

const aboutText = `Hi, I’m Will! I’m a frontend developer passionate about crafting beautiful, responsive websites that bring people’s ideas to life. I thrive on building digital spaces that reflect the passions of my clients.
Currently, I’m freelancing with local businesses to establish their online presence and expand their reach. Most recently, I designed and built a new site for Queer Eugene. On the side, I’m diving into Python and AI development to broaden my skill set.
Before web development, I designed lighting for performances, creating immersive atmospheres for audiences and artists. Later, I taught rock climbing, breaking down complex systems into simple, actionable steps. These experiences sharpened my eye for detail and my ability to communicate effectively with diverse teams.
When I’m not building sleek user interfaces, you’ll find me climbing, hiking, or lost in a good book. Lately, I’ve been channeling my inner Magneto to save the multiverse.
📬 Let’s connect! If you need a dynamic, detail-oriented developer, I’d love to collaborate.`;

function About() {
  return (
    <motion.section
      id="about"
      className="w-full h-screen flex items-center px-10 py-20 xl:px-20 xl:py-32"
      variants={parentAbout}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
    >
      <div className="max-w-[1000px] space-y-4">
        <motion.div variants={fadeRight}>
          <h2>About</h2>
          <hr className="w-16 border-0 border-t-2" />
        </motion.div>
        {aboutText.split("\n").map((text, index) => (
          <motion.p key={index} variants={fadeUp}>
            {text}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}

export default About;
