"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "./SectionHeading";
import { devExperiencesData, experiencesData } from "@/lib/data";
import React, { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import { useThemeContext } from "@/context/themeContext";
import { MotionSpan } from "./framer";

export default function ExperienceSection() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useThemeContext();
  const [activeTab, setActiveTab] = useState("past");

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <div className="flex flex-col gap-4 sm:flex-row sm:max-w-[50%] w-full mx-auto justify-between mb-8 relative">
        <button
          className={`${
            activeTab === "past" ? "font-bold" : "font-normal"
          } px-4 py-2 whitespace-nowrap transition-all relative hover:font-bold`}
          onClick={() => setActiveTab("past")}
        >
          Past / Transferable Exp
          {activeTab === "past" && (
            <MotionSpan
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="bg-white size-full rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
            ></MotionSpan>
          )}
        </button>
        <button
          className={`${
            activeTab === "current" ? "font-bold" : "font-normal"
          } px-4 py-2 whitespace-nowrap transition-all relative hover:font-bold`}
          onClick={() => setActiveTab("current")}
        >
          Current / Web Dev Exp
          {activeTab === "current" && (
            <MotionSpan
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="bg-white rounded-full absolute -z-10 inset-0 size-full dark:bg-gray-800"
            ></MotionSpan>
          )}
        </button>
      </div>

      <div>
        {activeTab === "past" ? (
          <div
            className={`${
              activeTab === "past" ? "opacity-1" : "opacity-0"
            } transition-all duration-300 ease-in-out`}
          >
            <VerticalTimeline animate lineColor="">
              {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                  <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                      background:
                        theme === "light"
                          ? "#f3f4f6"
                          : "rgba(255,255,255, 0.05)",
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0, 0.5)",
                      textAlign: "left",
                      padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                      borderRight:
                        theme === "light"
                          ? ".4rem solid  #9ca3af"
                          : ".4rem solid rgba(255,255,255, 0.5)",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                      background:
                        theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                      fontSize: "1.5rem",
                    }}
                  >
                    <h3 className="capitalize font-semibold">{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!mt-1 !font-normal !text-gray-700 !dark:text-white/75">
                      {item.description}
                    </p>
                  </VerticalTimelineElement>
                </React.Fragment>
              ))}
            </VerticalTimeline>
          </div>
        ) : (
          <div
            className={`${
              activeTab === "current" ? "opacity-1" : "opacity-0"
            } transition-all duration-300 ease-in-out`}
          >
            <VerticalTimeline animate lineColor="">
              {devExperiencesData.map((item, index) => (
                <React.Fragment key={index}>
                  <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                      background:
                        theme === "light"
                          ? "#f3f4f6"
                          : "rgba(255,255,255, 0.05)",
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0, 0.5)",
                      textAlign: "left",
                      padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                      borderRight:
                        theme === "light"
                          ? ".4rem solid  #9ca3af"
                          : ".4rem solid rgba(255,255,255, 0.5)",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                      background:
                        theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                      fontSize: "1.5rem",
                    }}
                  >
                    <h3 className="capitalize font-semibold">{item.title}</h3>
                    {item.courses && (
                      <ul className="flex flex-col list-disc text-sm italic font-normal my-4 gap-1">
                        {item.courses.length > 0 &&
                          item.courses.map((course, index) => (
                            <li key={index} className=" !mt-0">
                              {course}
                            </li>
                          ))}
                      </ul>
                    )}
                    <p className="!mt-1 !font-normal !text-gray-700 !dark:text-white/50">
                      {item.description}
                    </p>
                  </VerticalTimelineElement>
                </React.Fragment>
              ))}
            </VerticalTimeline>
          </div>
        )}
      </div>
    </section>
  );
}
