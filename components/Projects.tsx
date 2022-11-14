import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll pt-20 pb-10 snap-x snap-mandatory ">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </motion.div>
  );
}

export default Projects;
