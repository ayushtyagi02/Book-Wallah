"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import React from "react";
import {dummydata} from "../../../data/books-data"
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
export const ParallaxScroll = ({
  
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const images= dummydata
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <div
      className={cn("h-[100vh] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className='h-[4rem] mt-10 items-center justify-center p-5'>
            <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
            />
        </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-6xl mx-auto gap-10 py-20  px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <img
                src={el.coverImage}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <p className="font-semibold text-lg text-center leading-10">{el.bookName}</p>
              <div className="h-[0.6px] bg-black w-1/3 mx-auto"></div>
              <p className="font-serif text-sm text-center mt-2">{el.authorName}</p>

            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el.coverImage}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <p className="font-semibold text-lg text-center leading-10">{el.bookName}</p>
              <div className="h-[0.6px] bg-black w-1/3 mx-auto"></div>
              <p className="font-serif text-sm text-center mt-2">{el.authorName}</p>

            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el.coverImage}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <p className="font-semibold text-lg text-center leading-10">{el.bookName}</p>
              <div className="h-[0.6px] bg-black w-1/3 mx-auto"></div>
              <p className="font-serif text-sm text-center mt-2">{el.authorName}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
