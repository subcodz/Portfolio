import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Skills from "../components/skills";
import Timeline from "../components/timeline";
import { others } from "../components/constants";

export default function About() {
  return (
    <div className=" w-full gap-5 flex select-none justify-center  pt-25 pb-25">
      <div className="sm:grid sm:grid-cols-[0.9fr_0.7fr_0.6fr] items-start gap-4 w-79 sm:w-fit">
        <div className="grid sm:auto-rows-auto gap-4">
          <div
            className="
                            px-6 flex flex-col
                            backdrop-blur-sm bg-black/50
                            z-0 
                            
                            p-5
                            rounded-[25px]
                            border-1 sm:border-2       
                            border-red-700
                        "
          >
            <h1 className="text-white text-[24px]  font-wide items-start">
              ABOUT ME
            </h1>
            <p
              className="
                                text-gray-200 text-[23px] md:text-[23px]
                                pt-5  max-w-[55ch] text-left
                                font-donglelight leading-[0.8]
                            "
            >
              Hi, I'm Subhajit, a BTech CSE undergrad (engineering), love for
              technology and the process of developing and exploring has always
              been exciting to me. Apart from building tech projects to solve
              real world problems I also do some graphic designing/poster
              making, have a huge amount of love for music. Given below are some
              of my tech skills and how I have used them in various projects.
            </p>
          </div>
          <div
            className="
                            
                            
                            backdrop-blur-sm bg-black/50 
                            p-5
                            rounded-[25px]
                            border-1 sm:border-2 border-red-700
                    "
          >
            <h1 className="text-2xl font-wide pb-5 text-white">others</h1>

            <div className="flex flex-wrap gap-1">
              {others.map((item) => (
                <div className="flex flex-col">
                  <div
                    className="
                                    flex
                                    items-center
                                    h-7
                                    rounded-[20px]
                                    border-1 border-gray-700
                                    bg-gray-800
                                    hover:none hover:bg-white hover:text-black
                                    px-2 font-parafont text-[22px]
                                    hover:shadow-lg
                                    gap-2 text-gray-200
                                    hover:-translate-y-1
                                    transition-all duration-200
                                "
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:my-0 my-3">
          <Skills />
        </div>
        <div className="sm:grid sm:auto-rows-auto-auto">
          <Timeline />
        </div>
      </div>
    </div>
  );
}
