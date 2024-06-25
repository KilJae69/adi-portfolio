import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";


import dotsArtImg from "@/public/dotsart.webp"
import bookMeAppImg from "@/public/bookmeapp.webp"
import undershopImg from "@/public/undershop.webp"
import hiddenGemImg from "@/public/hiddengem.webp"
import devOverflowImg from "@/public/dev-overflow.webp"
import corpBlogImg from "@/public/corp-blog.webp"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated law school",
    location: "Bosnia and Herzegovina",
    description:
      "After graduation and some internship jobs I started working as a court lawyer with  private law firm.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Associate Lawyer",
    location: "Bosnia and Herzegovina",
    description:
      "I worked as a court lawyer for 2 years. I was responsible for representing clients in court, drafting legal documents and providing legal advice.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
  {
    title: "Child Protection Officer, Save the Children",
    location: "Bosnia and Herzegovina",
    description:
      "Provided 24/7 support to unaccompanied and separated children, assessed protection needs, and developed strategies to address challenges.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Child Protection Coordinator, Save the Children",
    location: "Bosnia and Herzegovina",
    description:
      "Developed and implemented a comprehensive Child Protection Program, coordinated and supervised a team, and managed cases of vulnerable individuals.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Protection Liaison Assistant, UNHCR",
    location: "Bosnia and Herzegovina",
    description:
      "Conducted protection monitoring, provided counseling to persons of concern, and liaised with stakeholders to ensure effective access to rights.",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2020",
  },
  {
    title: "Senior Protection Assistant, UNHCR",
    location: "Bosnia and Herzegovina",
    description:
      "Collaborated with team members to support the Head of Field Unit, developed strategies for complex protection issues, and trained colleagues on protection topics",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2023",
  },
  {
    title: "Professional Experience Summary",
    location: "Bosnia and Herzegovina",
    description:
      "From 2016 to 2023, I developed strong analytical and problem-solving skills, worked in diverse teams, and adopted a user-centric approach. My experiences have honed my ability to adapt, work under deadlines, communicate effectively, and manage projects efficiently.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2023",
  },
] as const;

type devExperience = {
  title: string;
  courses?: string[];
  stack?: string[];
  description: string;
  icon: React.ReactElement;
  date: string;
}
export const devExperiencesData: readonly devExperience[] = [
  {
    title: "Completed several Udemy online courses",
    courses: ["Colt Steele's Web Developer Bootcamp", "Advanced CSS and SASS by Jonas Schmedtmann", "Complete JavaScript Course by Jonas Schmedtmann"],
    description:
      "Even though my goal was to focus on more modern web development technologies, I decided to start with the basics. I completed several online courses to get a solid foundation in web development.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023 - October 2023",
  },
  {
    title: "Built my first solo project (Static website)",
    stack: ["HTML", "SCSS", "JavaScript"],
    description:
      "My first project was a static website for a small local handcraft business.",
    icon: React.createElement(IoLogoJavascript),
    date: "November 2023 - December 2023",
  },
  {
    title: "Completed Jonas Schmedtmann's The Ultimate React Course",
    courses: ["The Ultimate React Course by Jonas Schmedtmann"],
    description:
      "After finishing my first project I continued with focusing on React, so I completed Jonas Schmedtmann's React course and started planning my next solo project.",
    icon: React.createElement(LuGraduationCap),
    date: "January 2024",
  },
  {
    title: "Built my first SPA project with React",
    stack: ["React", "Tailwind CSS", "Supabase"],
    description:
      "I decided to build an app for myself, as I never really liked native browser bookmarks. So I built a simple CRUD application for saving and categorizing bookmarks for my favourite resources for learning web development.",
    icon: React.createElement(FaReact),
    date: "February 2024 - March 2024",
  },
  {
    title: "Started learning Next.js",
    courses: ["Next.js by Example", "Jonas Schmedtmann's Next.js course", "JSM Ultimate Next JS course"],
    description:
      "After going through projects and courses with plain JavaScript, and then React, I decided to focus all of my time on learning and mastering Next.js, so I completed several courses and code-alongs to get as much code through my fingers as possible.",
    icon: React.createElement(LuGraduationCap),
    date: "March 2024 - indefinitely",
  },
  {
    title: "Completed corporate blog website",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "After diving into multiple full-stack projects with Next.js, I decided to take a small turn back to the front-end and build a corporate blog website focusing on clean design and high performance.",
    icon: React.createElement(SiNextdotjs),
    date: "June 2024",
  },
] as const;



export const projectsData = [
  {
    title: "Dots Art",
    description:
      "Simple static website for a local handcraft bussiness. ",
    tags: ["HTML", "CSS/Sass", "JavaSript",],
    imageUrl: dotsArtImg,
    repoUrl: "https://github.com/KilJae69/dotsArt",
    status: "Completed",
  },
  {
    title: "BookMeApp",
    description:
      "A simple CRUD SPA application for saving and categorizing bookmarks for favourite resources for learning web development.",
    tags: ["React", "Tailwind", "Zustand", "React Query", "Supabase"],
    imageUrl: bookMeAppImg,
    repoUrl: "https://github.com/KilJae69/BookMeApp",
    status: "Completed",
  },
  {
    title: "Hidden Gem",
    description:
      "Small booking website for a fictional resort in wilderness.",
    tags: [ "Next.js", "Supabase", "Tailwind"],
    imageUrl: hiddenGemImg,
    repoUrl:"https://github.com/KilJae69/the-hidden-gem-website",
    status: "Needs improvements",
  },
  {
    title: "Under Shop",
    description:
      "Practice project for a fictional e-commerce website, built with Next.js and Wix SDK.",
    tags: [ "Next.js", "Wix SDK", "Tailwind","TypeScript"],
    imageUrl: undershopImg,
    repoUrl:"https://github.com/KilJae69/under-armour-shop",
    status: "Needs improvements",
  },
  {
    title: "Dev Overflow",
    description:
      "Full-stack project for a fictional developer community website. The app uses OpenAI's GPT-3-5 for generating answers to questions. ",
    tags: [ "Next.js", "Mongo DB", "TypeScript", "OpenAI", "Tailwind"],
    imageUrl: devOverflowImg,
    repoUrl: "https://github.com/KilJae69/stack_overflow_next_js_14",
    status: "Needs improvements",
  },
  {
    title: "Corp Blog Website",
    description:
      "NextJS corporate blog website focusing on clean design and high performance.",
    tags: [ "Next.js", "Tailwind","TypeScript", "Shadcn UI"],
    imageUrl: corpBlogImg,
    repoUrl: "https://github.com/KilJae69/teric",
    status: "Completed",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS/SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Supabase",
  "MongoDB",
  "Zustand",
  "React Query",
  "Framer Motion",
] as const;