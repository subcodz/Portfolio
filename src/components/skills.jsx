import { useState } from "react";
import { icons } from "./constants";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { title: "Frontend", label: "frontend" },
    { title: "Backend", label: "backend" },
    { title: "Languages", label: "language" },
  ];

  return (
    <div
      className="
        p-5 flex flex-col
        bg-black/25 backdrop-blur-3xl
        rounded-[25px]
        border-1 border-gray-600
        
      "
    >
      <h1 className="text-white font-wide text-[24px] mb-4">SKILLS</h1>

      {/* Category Buttons */}
      <div className="flex gap-1 mb-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.label;

          return (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(isActive ? null : cat.label)}
              className={`
                text-[22px] font-parafont px-3  rounded-full border
                transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "text-white border-gray-600 hover:text-black hover:bg-white"
                }
              `}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* All Skills */}
      <div className="flex flex-wrap gap-2">
        {icons.map((i, idx) => {
          const isActive = activeCategory === i.label;

          return (
            <div
              key={idx}
              className={`
                flex items-center
                h-auto
                rounded-[20px]
                border-1
                px-2 gap-2
                font-donglelight text-[20px]
                transition-all duration-200
                hover:-translate-y-1
                hover:shadow-lg/40 hover:shadow-yellow-300
                ${
                  isActive
                    ? "bg-white text-black font-parafont border-white  "
                    : "bg-gray-800 text-white border-gray-700 hover:bg-white hover:text-black hover:font-parafont"
                }
              `}
            >
              <div className="h-[15px] w-[15px]">
                <img src={i.imgsrc} alt={i.name} />
              </div>
              <div>{i.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
