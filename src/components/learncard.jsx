export default function LearnCard({ heading, description }) {
  return (
    <div>
      <div
        className="w-86 sm:w-75 h-55 
          rounded-[15px] 
          backdrop-blur-sm 
          select-none
          hover:scale-103
          hover:border-gray-400
          transition-all duration-200
          flex flex-col p-6
          border-1 border-gray-700
          bg-black/50 items-start"
      >
        <h2 className="text-gray-300 font-wide text-[18px] ">{heading}</h2>
        <p className="text-white/65 select-none font-donglelight text-[22px] leading-[15px] pt-7">
          {description}
        </p>
        <div className="h-[23px] w-[23px] rounded-full items-center flex justify-center bg-gray-200 absolute bottom-3 right-3">
          <img src="https://cdn.simpleicons.org/github" />
        </div>
      </div>
    </div>
  );
}
