import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
    </div>
  );
}

export default Projects;
