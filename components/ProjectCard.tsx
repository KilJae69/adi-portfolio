"use client";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

import { MotionDiv } from "./framer";

type ProjectCardProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  repoUrl,
  status,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <MotionDiv
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="mb-3 group sm:mb-8 last:mb-0 relative overflow-hidden"
    >
      <span className="absolute top-2 left-5 sm:left-10 z-10 font-bold flex items-center gap-2 opacity-0 transition-all group-hover:opacity-100 translate-x-[-200px] group-hover:translate-x-0">
        Visit repo
        <FaAngleDoubleRight />
      </span>
      <a
        href={repoUrl}
        target="__blank"
        className="block bg-gray-100 pt-4 sm:pt-0 rounded-lg relative max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] sm:group-even:pl-8  hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 "
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full flex flex-col sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <span
            className={`my-2 ${
              status === "Completed" ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {status}
          </span>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] dark:text-white/70 uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        group-even:right-[initial] 
        group-even:-left-40 

        group-hover:scale-105 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2
        transition"
          quality={90}
        />
      </a>
    </MotionDiv>
  );
}
