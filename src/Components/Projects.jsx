import React from "react";
import ProjectData from "../Components/ProjectData";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const h1anim = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0,
    transition: { duration: 1, ease: "easeInOut" },
   },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // Delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -90 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const Projects = () => {
  return (
    <div id='projects' className=" w-full min-h-screen pt-10 pb-10 bg-[#1A1A19]">
      <motion.div
        className="w-[80%]   m-auto  "
       
      >
        <motion.h1
          variants={h1anim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}

          className="text-white  md:text-8xl text-xl "
        >
          What I’ve Been{" "}
          <motion.span className="text-amber-400"> Building .</motion.span>
        </motion.h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="md:w-[90%] min-h-full m-auto  flex mt-5 flex-wrap gap-10 items-center justify-center"
      >
        {ProjectData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-full" // optional class if needed
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
