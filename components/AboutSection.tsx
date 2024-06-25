"use client";

import SectionHeading from "./SectionHeading";
import { MotionSection } from "./framer";

import { useSectionInView } from "@/lib/hooks";

export default function AboutSection() {
  const { ref } = useSectionInView("About");

  return (
    <MotionSection
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Law</span>, I spent three years working in
        a private law firm and the next five years with the{" "}
        <span className="font-medium">United Nations, UNHCR</span>. Despite the
        great experiences and work conditions, I always found myself missing
        something crucial.
        <br />
        <br />
        It might took me a while to realize it (yeah, 8 years 😂), but my
        strongest asset proved to be a relentless work ethic, a passion for
        learning and achieving new skills that would make me a better
        proffesional in my field, and maybe most of all, ability to{" "}
        <span className="font-semibold">grind</span> (coding whole day without
        looking at a clock 🤭). I've also learned that the most valuable asset
        one can have is knowledge — being skilled in something others are not. I can't buy it, I can't inherit it, I can't find it, I can only earn it.
        <br />
        <br />
        And that is how one lawyer and UN officer becomes{" "}
        <span className="italic font-semibold">web developer</span>🧑‍💻. In web development, I see
        endless possibilities for learning and improvement, and every day, I feel better at what I am doing than I was the day before and that is all I could ask for from a profession.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        with my furry friends 🐶😸, reading resource materials, and spending time with my family.
      </p>
    </MotionSection>
  );
}
