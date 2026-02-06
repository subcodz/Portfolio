import { useState, useRef, useEffect } from "react";
import { milestones } from "./constants";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateLineHeight = () => {
      if (containerRef.current) {
        const dots = containerRef.current.querySelectorAll('.timeline-dot');
        if (dots.length >= 2) {
          const firstDot = dots[0];
          const lastDot = dots[dots.length - 1];
          
          const containerTop = containerRef.current.getBoundingClientRect().top;
          const firstDotCenter = firstDot.getBoundingClientRect().top - containerTop + firstDot.offsetHeight / 2;
          const lastDotCenter = lastDot.getBoundingClientRect().top - containerTop + lastDot.offsetHeight / 2;
          
          setLineHeight(lastDotCenter - firstDotCenter);
        }
      }
    };

    // Calculate immediately
    calculateLineHeight();
    
    // Recalculate after a short delay to account for animations
    const timeout = setTimeout(calculateLineHeight, 350);
    
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className="p-5 sm:border-2 bg-black/50 backdrop-blur-sm z-0 rounded-[25px] border-1 border-red-700">
      <h1 className="font-wide text-white text-2xl">TIMELINE</h1>

      <div className="pt-5 relative" ref={containerRef}>
        {/* Vertical line */}
        {lineHeight > 0 && (
          <div
            className="absolute mt-5 w-[2px] bg-gradient-to-b from-red-700 to-blue-800 rounded-[25px] transition-all duration-300"
            style={{ 
              height: `${lineHeight}px`,
              left: '7px',
              
            }}
          />
        )}

        <div className="flex flex-col gap-2">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-5"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Dot */}
              <span
                className={`timeline-dot mt-2 h-4 w-4 rounded-full shrink-0 transition-colors duration-300 ${
                  activeIndex === index ? "bg-red-500" : "bg-blue-600"
                }`}
              />

              {/* Content */}
              <div className="flex flex-col">
                <div className="border-1 rounded-[12px] border-gray-600 p-3 hover:border-gray-400">
                  <h1 className="text-gray-300 font-parafont text-[24px] cursor-pointer">
                    {item.title}
                  </h1>
                </div>
                {/* Expanding card */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-3 w-55 rounded-xl font-parafont2 leading-3 bg-white p-3 text-[23px] text-slate-700 shadow-xl">
                    {item.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}