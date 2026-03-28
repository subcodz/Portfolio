import { useEffect, useState } from "react";
import useFadeInOnScroll from "../useFadeInOnScroll";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const name = "SUBHAJIT";
  const fadeRef = useFadeInOnScroll();

  useEffect(() => {
    requestAnimationFrame(() => {
      setAnimate(true);
    });
  }, []);

  return (
    <section ref={fadeRef} className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <h1
          className="
            font-hidrom
            text-gray-300
            select-none
            opacity-60
            cursor-default
            text-[110px] sm:text-[150px]
            transition-all duration-300 ease-out
            hover:scale-110 
            
          "
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className={`inline-block hero-letter ${
                animate ? "animate" : ""
              } text-gray-300 hover:font-orion`}
              style={{
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p className="font-donglelight sm:px-0 px-8 text-gray-300 text-[23px] leading-4 sm:text-[22px] sm:w-[700px] select-none">
          A backend enthusiast with special interest in system design: building
          scalable and efficient systems, coming from wondering how things work.
          Currently exploring and learning technologies to build something that
          solves real world problems.
        </p>
      </div>
    </section>
  );
}
