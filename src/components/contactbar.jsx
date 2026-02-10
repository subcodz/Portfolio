import { social } from "./constants";

export default function Contact() {
  return (
    <div
      className="p-1 px-5 
                        backdrop-blur-[15px] 
                        left-1/2 
                        -translate-x-1/2 border-1
                        border-gray-700 
                        bg-black/15 
                        rounded-[50px] 
                        shadow-lg
                        bottom-8 z-50 
                        fixed flex justify-center"
    >
      <div
        className="text-[22px] font-parafont
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
            hover:px-3
            duration-300 
            hover:text-3xl
            hover:font-orion
            hover:scale-90
            active:translate-y-0
            hover:bg-white hover:text-black rounded-[25px]"
          >
            {i.name}
          </a>
        ))}
      </div>
    </div>
  );
}
