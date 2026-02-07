export default function Footer() {
  return (
    <div
      className="w-full 
        rounded-tl-[50px] 
        rounded-tr-[50px] 
        flex flex-col 
        select-none 
        backdrop-blur-[20px] bg-black/50 
        h-60
        sm:h-110"
    >
      <p
        className="font-parafont 
            text-[20px] sm:text-2xl 
            flex justify-center 
            mt-10 mb-[-25px] 
            text-gray-300"
      >
        website built and designed by
      </p>
      <h1
        className="text-[65px] sm:text-[250px] 
            font-ferrite 
            flex justify-center 
            leading-none 
            p-3
            text-transparent
            bg-[url(/text_bg.jpg)]
            bg-cover
            bg-center
            bg-clip-text "
      >
        SUBHAJIT
      </h1>

      <div className=" ">
        <p className="flex justify-center text-[23px] font-parafont text-white">
          Links
        </p>
      </div>
    </div>
  );
}
