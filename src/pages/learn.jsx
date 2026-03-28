import { learndata } from "../components/constants";
import LearnCard from "../components/learncard";
import useFadeInOnScroll from "../useFadeInOnScroll";

export default function Learn() {
  const headingRef = useFadeInOnScroll();
  const paraRef = useFadeInOnScroll();
  const cardsRef = useFadeInOnScroll();

  return (
    <div className="select-none justify-center flex py-15 ">
      <div className="flex flex-col items-center sm:items-start justify-center ">
        <h1
          ref={headingRef}
          className="fade-in-hidden text-gray-300 font-wide text-[28px]"
        >
          Let's Learn
        </h1>
        <p
          ref={paraRef}
          className="fade-in-hidden  pb-7 text-gray-400 text-[12px] sm:px-0 px-8 font-jetmono sm:leading-5 leading-4"
        >
          Here, I share some resources of various core concepts in a simplified
          manner which can help one to learn them efficiently.
        </p>
        <div
          ref={cardsRef}
          className="fade-in-hidden gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {learndata.map((card, index) => (
            <LearnCard
              key={index}
              heading={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
