import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FlippingWords from "../components/flipword";

export default function Hero() {
  const lettersRef = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.set(lettersRef.current, { opacity: 0, y: 100 });

    gsap.to(lettersRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      stagger: 0.1,
      duration: 3.5,
      ease: "power3.out",
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(heroRef.current, {
      scale: 1.09,
      duration: 0.4,
      ease: "power2.out",
      color: "red",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(heroRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
      color: "rgba(255,255,255,0.85)",
    });
  };

  const name = "SUBHAJIT";

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Intro text */}
      <h2 className="text-red-500 text-2xl font-revive select-none">Hi, I'm</h2>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="will-change-transform"
      >
        <h1
          ref={heroRef}
          className="font-hidrom text-gray-300 select-none cursor-default
                     text-[110px] sm:text-[220px]"
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="hover:font-orion"
            >
              {char}
            </span>
          ))}
        </h1>
      </div>

      <p className="font-donglelight leading-5 sm:leading-5 text-gray-300  text-center text-[25px] sm:text-[22px] w-[370px] sm:w-[650px] select-none">
        Hi, I'm Subhajit, a BTech CSE undergrad (engineering), love for
        technology and the process of developing and exploring has always been
        exciting to me. Apart from building tech projects to solve real world
        problems I also do some graphic designing/poster making, have a huge
        amount of love for music. Given below are some of my tech skills and how
        I have used them in various projects.
      </p>
    </section>
  );
}
