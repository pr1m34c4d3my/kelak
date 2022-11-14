import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import mainpic from "../public/logokelak.png";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, We are Kelak Studio!",
      "<Consult-Design-Develop />",
      "[Have something great in mind?]",
      "We'll-Help-MakeIt-Happens.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative bg-white w-500px h-500px rounded-full pl-3 mx-auto">
        <Image className=" w-40" src={mainpic} alt="kelak" />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Digital Creative Agency
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#tech">
            <button className="heroButton">Tech</button>
          </Link>
          <Link href="#gallery">
            <button className="heroButton">Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
