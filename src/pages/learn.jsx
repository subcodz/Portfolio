import { learndata } from "../components/constants";
import LearnCard from "../components/learncard";

export default function Learn() {
  return (
    <div className="select-none items-center justify-center flex ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white font-wide text-[28px]">Let's Learn</h1>
        <p className="pt-3 pb-10 text-white text-[23px] sm:px-0 px-8 font-donglelight sm:leading-5 leading-4">
          Here, I share some resources of various core concepts in a simplified
          manner which can help one to learn them efficiently.
        </p>
        <div className=" gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
