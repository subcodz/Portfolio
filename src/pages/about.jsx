import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { icons } from "../components/constants";
import Skills from "../components/skills";


export default function About() {
    
    return (
        <div className=" w-full gap-5 flex select-none justify-center relative pt-25 pb-25">
            <div className="sm:grid sm:grid-cols-[0.9fr_0.7fr] items-start gap-4 w-79 sm:w-fit">    
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
                            hover:scale-y-[103%]
                            hover:scale-x-[103%]
                            transition-all
                            duration: 200
                        "
                    >
                        <h1 className="text-white text-[24px]  font-wide items-start">ABOUT ME</h1>
                        <p
                            className="
                                text-gray-200 text-[23px] md:text-[23px]
                                pt-5  max-w-[55ch] text-left
                                font-donglelight leading-[0.8]
                            "
                        >
                            Hi, I'm Subhajit, a BTech CSE undergrad (engineering), love
                            for technology and the process of developing and exploring
                            has always been exciting to me. Apart from building tech
                            projects to solve real world problems I also do some graphic
                            designing/poster making, have a huge amount of love for music.
                            Given below are some of my tech skills and how I have used
                            them in various projects.
                        </p>
                    </div>
                    <div className="
                            
                            flex flex-col
                            backdrop-blur-sm bg-black/50 
                            p-5
                            rounded-[25px]
                            border-1 sm:border-2 border-red-700
                    ">
                        <h1 className="text-2xl font-wide text-white">TIMELINE</h1>
                    </div>
                    {/*<div className="text-[20px] font-wide
                                     text-white border-1 
                                     sm:border-2 border-red-700 
                                     backdrop-blur-sm 
                                     bg-black/50 rounded-[25px] p-5">
                        What I'm learning NOW
                        <div className="font-parafont text-[20px] pt-3">
                            <p>DSA-Graphs</p>
                            <p>DEV-React</p>
                        
                        </div>
                    </div>*/}
                </div>
                <div className="sm:my-0 my-3">
                    <Skills/>
                </div>
            </div>
        </div>
    );
}
                                                     