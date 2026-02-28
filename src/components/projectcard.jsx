export default function ProjectCard({
  heading,
  description,
  techstack,
  state,
}) {
  const color =
    state === "not-started"
      ? "bg-red-500"
      : state === "ongoing"
        ? "bg-blue-500"
        : "bg-green-500";

  const label =
    state === "not-started"
      ? "Not Started"
      : state === "ongoing"
        ? "Ongoing"
        : "Complete";
  return (
    <div className="item-center flex">
      <div
        className="
          rounded-[22px]  
          border-1 border-gray-600 
          inset-shadow-md inset-shadow-gray-700/50
        bg-black/50
          backdrop-blur-sm 
          w-86 sm:w-75
          h-80 p-6 
          flex flex-col items-start
          hover:border-red-500
          hover:shadow-red-500/25 hover:shadow-xl
          hover:scale-103 transition-all duration-200
          "
      >
        <h2 className="text-gray-300 font-wide text-[18px] pt-[-10px] ">
          {heading}
        </h2>
        <p className="text-white/65 select-none font-donglelight text-2xl leading-[18px] pt-7">
          {description}
        </p>
        <p className="text-gray-400 select-none font-parafont text-[21px] absolute bottom-8">
          {techstack}
        </p>
        <div className="absolute bottom-3 left-0 w-full px-[23px] flex justify-between items-center">
          <div
            className="text-gray-300 font-wide text-[13px] cursor-pointer p-1 px-2 
          transition-all duration-200 hover:ease-in-out rounded-[8px] hover:bg-white hover:text-black"
          >
            GITHUB
          </div>

          <div className="flex items-center gap-2 font-parafont">
            <span className={`w-2 h-2 rounded-full ${color}`}></span>
            <span className="text-[19px] text-gray-400">{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
