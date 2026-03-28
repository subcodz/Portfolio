import Skills from "../components/skills";
import { others } from "../components/constants";
import useFadeInOnScroll from "../useFadeInOnScroll";

export default function About() {
  const aboutCardRef = useFadeInOnScroll();
  const othersCardRef = useFadeInOnScroll();
  const skillsRef = useFadeInOnScroll();

  return (
    <div className="px-5 pb-20">
      <div className="gap-5 flex select-none justify-center ">
        <div className="lg:grid lg:grid-cols-[0.5fr_0.5fr] sm:grid-cols-2 grid grid-cols-1 items-start gap-4 w-86 sm:w-fit">
          <div className="grid sm:auto-rows-auto gap-4">
            <div
              ref={aboutCardRef}
              className="
                        px-6 flex flex-col
                        backdrop-blur-sm bg-black/50
                        z-0
                        hover:scale-102
                        transition-all duration-200
                        p-5
                        rounded-[15px]
                        ring-1 ring-gray-700
                        "
            >
              <h1 className="text-gray-300 text-[24px] font-wide items-start">
                ABOUT ME
              </h1>
              <p
                className="text-gray-300 text-[21px]
                            pt-5  max-w-[55ch] text-left
                            font-donglelight leading-[0.8]"
              >
                Hi, I'm Subhajit, a BTech CSE undergrad (engineering), love for
                technology and the process of developing and exploring has
                always been exciting to me. Apart from building tech projects to
                solve real world problems I also do some graphic
                designing/poster making, have a huge amount of love for music.
                Given below are some of my tech skills and how I have used them
                in various projects.
              </p>
            </div>
            <div
              ref={othersCardRef}
              className="
                        max-w-4xl w-full mx-auto
                        hover:scale-102 transition-all duration-200
                        backdrop-blur-sm bg-black/50 
                        p-5
                        rounded-[15px]
                        inset-shadow-md
                        inset-shadow-gray-700/55
                        border-1 border-gray-700
                      "
            >
              <h1 className="text-2xl font-wide pb-5 text-gray-300">others</h1>

              <div className="flex flex-wrap gap-1 ">
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
                                  hover:bg-white hover:text-black
                                  px-2 font-jetmono text-[12px]
                                  hover:shadow-lg
                                  gap-2 text-gray-200
                                  hover:-translate-y-1
                                  transition-all duration-200
                                  hover:shadow-lg/40 hover:shadow-yellow-400
                                "
                    >
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div ref={skillsRef} className="fade-in-hidden sm:my-0 my-3">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
