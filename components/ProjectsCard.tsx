import React from "react";
import Image from "next/image";
import talenthanks from "../public/talenthanks.jpg";
import { motion } from "framer-motion";
import react from "../public/react.png";
import vue from "../public/vue.png";
import php from "../public/php.png";
import html from "../public/html5.png";
import js from "../public/js.png";
import vs from "../public/visual-studio.png";
import ts from "../public/typescript.png";

type Props = {};

export default function ProjectsCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-3xl items-center space-y-7 flex-shrink-0
    w-[80%] h-[103%] md:w-[500px] xl:w-[700px] snap-center bg-[#292929] px-10 pt-5 md:px-10 md:hover:opacity-100 md:opacity-50"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={talenthanks}
          alt=""
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Talenthanks</h4>
        <p className="font-bold text-2xl mt-1">Website Development</p>
        <div className="flex space-x-2 my-2">
          <Image className="w-10 h-10 rounded-full" src={vue} alt="" />
          <Image className="w-10 h-10 rounded-full" src={html} alt="" />
          <Image className="w-10 h-10 rounded-full" src={js} alt="" />
          <Image className="w-10 h-10 rounded-full" src={vs} alt="" />
        </div>

        <p className="uppercase py-5 text-gray-300">April 2021 - June 2021</p>

        <ul className=" list-disc space-y-4 ml-5 text-lg">
          <li> Creating UI/UX for Wireframe</li>
          <li>
            Sustained building and implementing structured talent management
            system
          </li>
          <li>Using Firebase & Node Express.js </li>
          <li>Deployment in Hosting </li>
        </ul>
      </div>
    </article>
  );
}
