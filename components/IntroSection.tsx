"use client";
import Image from "next/image";
import { MotionDiv, MotionH1, MotionSpan } from "./framer";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

export default function IntroSection() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const startDate = dayjs("2023-08-22"); // Replace with your actual start date
    const now = dayjs();
    const diff = dayjs.duration(now.diff(startDate));

    const years = diff.years();
    const months = diff.months();
    const days = diff.days();

    setExperience(`${years} years, ${months} months, and ${days} days`);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <MotionDiv
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/adi-photo.png"
              alt="Ricardo portrait"
              width={192}
              height={192}
              quality={100}
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            />
          </MotionDiv>
          <MotionSpan
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </MotionSpan>
        </div>
      </div>

      <MotionH1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Adi.</span> I'm an aspiring{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">{experience}</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My main focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </MotionH1>

      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 borderBlack  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white borderBlack px-7 py-3 flex cursor-pointer  gap-2 rounded-full items-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 flex items-center text-gray-700 gap-2 cursor-pointer rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/adi-toromanovic/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 flex items-center borderBlack outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition  text-gray-700 gap-2 text-[1.35rem] hover:text-gray-950 rounded-full dark:bg-white/10 dark:text-white/60"
          href="https://github.com/KilJae69"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithubSquare />
        </a>
      </MotionDiv>
    </section>
  );
}
