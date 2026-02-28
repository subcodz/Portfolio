import { Nav_links } from "./constants";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className=" 
        backdrop-blur-[20px] 
        
        flex justify-center
        z-50 
        border-1
        border-gray-700 
        bg-black/15 
        px-15 py-2 
        rounded-[30px] 
         fixed
        left-1/2 -translate-x-1/2
        top-5 "
    >
      <div
        className="flex items-center 
          gap-35               
          text-gray-300 
          font-mono 
          
          /* Smooth scaling on all breakpoints */
          scale-90 sm:scale-95 md:scale-100 lg:scale-105 xl:scale-110 
          transition-transform duration-300
            "
      >
        <h2
          className="
                
                text-gray-300 
                font-wide text-xl
                 
                transition duration-300
                hover:text-red-500 select-none "
        >
          SUBHAJIT
        </h2>

        <div
          className="
                hidden 
                lg:flex gap-5
                sm:text-lg 
                md:text-1xl 
                font-medium 
                mt-1
                font-parafont 
                "
        >
          {Nav_links.map((link) => (
            <button
              key={link.target}
              onClick={() => {
                document.getElementById(link.target)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="transition-all
                         duration-250
                         text-1xl
                         select-none
                         hover:text-2xl
                         hover:font-wide
                         hover:scale-75
                         
                         hover:text-black
                         hover:bg-white hover:rounded-[25px] hover:px-3
                         "
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
