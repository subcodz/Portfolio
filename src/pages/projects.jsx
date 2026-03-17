import { projectdata } from "../components/constants";
import ProjectCard from "../components/projectcard";
import useFadeInOnScroll from "../useFadeInOnScroll";

export default function Projects() {
  const headingRef = useFadeInOnScroll();
  const paraRef = useFadeInOnScroll();
  const cardsRef = useFadeInOnScroll();

  return (
    <div className="flex flex-col items-center sm:items-start  py-10 px-5">
      <h1
        ref={headingRef}
        className="fade-in-hidden text-gray-300 text-[28px] sm:text-3xl  font-wide "
      >
        PROJECTS
      </h1>
      <p
        ref={paraRef}
        className="fade-in-hidden pt-1 pb-7 text-gray-400 text-[23px] sm:px-0 px-8 font-donglelight sm:leading-5 leading-4"
      >
        I try finding real world problems or things that can be made better in a
        different way and build them.
      </p>
      <div
        ref={cardsRef}
        className="fade-in-hidden gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center "
      >
        {projectdata.map((card, index) => (
          <ProjectCard
            key={index}
            heading={card.title}
            description={card.description}
            techstack={card.techstack}
            state={card.state}
          />
        ))}
      </div>
    </div>
  );
}
