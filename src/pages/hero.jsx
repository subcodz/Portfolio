import { useEffect, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const name = "SUBHAJIT";

  useEffect(() => {
    requestAnimationFrame(() => {
      setAnimate(true);
    });
  }, []);

  return (
    <section className="w-full flex items-center justify-center">
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

        <p className="font-donglelight hidden sm:flex text-gray-300 text-center text-[25px] leading-4 sm:text-[22px] w-[700px] px-8 select-none">
          Hi, I'm Subhajit, a BTech CSE undergrad (engineering), love for
          technology and the process of developing and exploring has always been
          exciting to me. Apart from building tech projects to solve real world
          problems I also do some graphic designing/poster making, have a huge
          amount of love for music. Given below are some of my tech skills and
          how I have used them in various projects.
        </p>
      </div>
    </section>
  );
}
