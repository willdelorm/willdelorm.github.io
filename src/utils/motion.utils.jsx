const staggerChildren = 0.3;
const duration = 0.7;

export const parentBasic = {
  hidden: {},
  show: {
    transition: { staggerChildren },
  },
};

export const parentHeader = {
  hidden: {},
  show: {
    transition: { staggerChildren },
  },
};

export const parentAbout = {
  hidden: {},
  show: {
    transition: { delayChildren: 1.2, staggerChildren },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration } },
};