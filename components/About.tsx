import { motion } from "framer-motion";
import aboutimg from "../public/about1.jpg";
import React from "react";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-col xl:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      {/* Image */}
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="pt-10"
      >
        <Image
          className="-mb-20 md:mb-20 flex-shrink-0 xl:rounded-lg rounded-full object-cover w-[300px] md:w-[500px] l xl:w-[1000px]"
          src={aboutimg}
          alt=""
          objectFit="cover"
        />
      </motion.div>
      {/* Content */}
      <div className="space-y-10 px-0 md:px-28">
        <h4 className="text-4xl font-semibold">
          Here is our{" "}
          <span className="underline decoration-[#F7AB0A]/50 animate-pulse">
            little
          </span>{" "}
          story
        </h4>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          tempora nostrum, eius architecto saepe ipsa quo expedita sunt
          necessitatibus cupiditate magni rerum laudantium quis aut eum autem
          possimus, error laboriosam.
        </p>
      </div>
    </motion.div>
  );
}
