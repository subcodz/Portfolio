import useFadeInOnScroll from "../useFadeInOnScroll";

export default function Footer() {
  const textRef = useFadeInOnScroll();
  const headingRef = useFadeInOnScroll();

  return (
    <div
      className="w-full 
        rounded-tl-[50px] 
        rounded-tr-[50px] 
        flex flex-col
        select-none 
        backdrop-blur-[20px] bg-black/50 
        h-60 mt-15
        sm:h-110"
    >
      <p
        ref={textRef}
        className="fade-in-hidden font-parafont 
            text-[20px] sm:text-2xl 
            flex justify-center 
            sm:pt-9 pt-5
            text-gray-400"
      >
        website built and designed by
      </p>
      <h1
        ref={headingRef}
        className="fade-in-hidden text-[110px] sm:text-[300px] 
            font-hidrom
            flex justify-center 
            leading-none 
            
            brightness-80
            text-transparent
            bg-[url(/text_bg.jpg)]
            sm:bg-top bg-left
            bg-clip-text 
            "
      >
        SUBHAJIT
      </h1>

      <div className=" "></div>
    </div>
  );
}
