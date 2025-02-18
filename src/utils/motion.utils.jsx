export const motionParent = {
  hidden: {},
  fadeUp: {
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

export const motionChild = {
  hidden: { opacity: 0, y: 50 },
  fadeUp: { opacity: 1, y: 0, transition: { duration: 1 } },
};
