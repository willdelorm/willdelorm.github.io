import { motion } from "motion/react";
import { motionParent, motionChild } from "../utils/motion.utils";

function Footer() {
  return (
    <motion.footer
      className="w-full px-10 py-5"
      variants={motionParent}
      initial="hidden"
      whileInView="fadeUp"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-[1000px] flex flex-col items-center"
        variants={motionChild}
      >
        <p className="font-semibold">Copyright © 2025 Will Delorm</p>
        <p>Designed by me</p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
