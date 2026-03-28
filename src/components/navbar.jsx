import { Nav_links } from "./constants";
import { Link } from "react-router-dom";
import useFadeInOnScroll from "../useFadeInOnScroll";

function Navbar() {
  const logoRef = useFadeInOnScroll();
  const linksRef = useFadeInOnScroll();

  const handleContactsClick = () => {
    const contactbar = document.getElementById("contactbar");
    if (contactbar) {
      // First blink
      contactbar.style.borderColor = "rgb(230, 23, 23)";
      contactbar.style.borderWidth = "3px";
      contactbar.style.boxShadow = "0 0 20px rgb(230, 23, 23)";
      setTimeout(() => {
        contactbar.style.borderColor = "rgb(55, 65, 81)";
        contactbar.style.borderWidth = "1px";
        contactbar.style.boxShadow = "";
      }, 300);

      // Second blink
      setTimeout(() => {
        contactbar.style.borderColor = "rgb(230, 23, 23)";
        contactbar.style.borderWidth = "3px";
        contactbar.style.boxShadow = "0 0 20px rgb(230, 23, 23)";
      }, 600);
      setTimeout(() => {
        contactbar.style.borderColor = "rgb(55, 65, 81)";
        contactbar.style.borderWidth = "1px";
        contactbar.style.boxShadow = "";
      }, 900);
    }
  };

  return (
    <nav
      className=" 
        backdrop-blur-[20px] 
        flex justify-center
        z-50 
        shadow-lg/50 shadow-black
        border-1
        border-gray-700 
        bg-black/15 
        px-15 py-2 
        rounded-[10px] 
         fixed
        left-1/2 -translate-x-1/2
        top-5 "
    >
      <div
        className="flex items-center justify-center
          gap-35               
          text-gray-400 
          font-mono 
          
          /* Smooth scaling on all breakpoints */
          scale-90 sm:scale-95 md:scale-100 lg:scale-105 xl:scale-110 
          transition-transform duration-300
            "
      >
        <h2
          ref={logoRef}
          className="fade-in-hidden
                
                text-gray-300 
                font-wide text-xl
                 
                transition duration-300
                hover:text-red-500 select-none "
        >
          SUBHAJIT
        </h2>

        <div
          ref={linksRef}
          className="fade-in-hidden
                hidden 
                gap-4
                sm:text-[10px] 
                sm:justify-center
                sm:flex
                font-medium 
                
                font-jetmonothick
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
                         text-[10px]
                         font-jetmonothick
                         select-none hover:px-2
                         hover:text-black
                         hover:bg-white hover:rounded-[5px]
                         "
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={handleContactsClick}
            className="transition-all
                       duration-250
                       text-[10px]
                       select-none
                      hover:px-2
                         hover:text-black
                         hover:bg-white hover:rounded-[5px]"
          >
            CONTACTS
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
