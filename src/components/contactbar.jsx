import { social } from "./constants";
import useFadeInOnScroll from "../useFadeInOnScroll";

export default function Contact() {
  const linksRef = useFadeInOnScroll();

  return (
    <div
      id="contactbar"
      className="py-2 px-4 
                        backdrop-blur-[10px] 
                        left-1/2 
                        -translate-x-1/2 
                        bg-black/15 
                        rounded-[10px] 
                        hover:scale-120
                        border-1 border-gray-700
                        bottom-8 z-50 
                        fixed flex justify-center
                        shadow-lg/50 shadow-black
                      transition-all duration-200
                        "
    >
      <div
        ref={linksRef}
        className="fade-in-hidden text-[11px] font-jetmono
                  gap-5 flex 
                  justify center 
                text-gray-300 "
      >
        {social.map((i) => (
          <a
            href={i.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all
            hover:px-2
            hover:font-jetmonothick
            duration-300 
            hover:bg-white hover:text-black rounded-[5px]"
          >
            {i.name}
          </a>
        ))}
      </div>
    </div>
  );
}
