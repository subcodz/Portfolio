import { icons } from "./constants"

export default function Skills(){
    return(
        <div
        className="
        p-5 flex flex-col
        backdrop-blur-sm bg-black/50
        rounded-[25px]
        border-1 sm:border-2 border-red-700
        min-h-[260px]

        "
        >
            <h1 className="text-white font-wide text-[24px] mb-4">
            SKILLS
            </h1>
            <div className="">
              <div className="grid auto-rows-auto items-start gap-2">

                  <SkillSection title="Frontend" label="frontend" />

                  <SkillSection title="Backend" label="backend" />

                  <SkillSection title="Languages" label="language" />

                  
              </div>
            </div>
        </div>
    )
}


function SkillSection({ title, label }) {
  return (
    <div className=" rounded-[12px] bg-transparent border-1 border-gray-700 p-4 hover:-translate-y-1 transition-all duration-200 hover:bg-blue-800 ">
      <h2 className="text-white font-wide text-[12px] mb-3">
        {title}
      </h2>

      <div className="flex flex-wrap gap-1">
        {icons
          .filter(i => i.label === label)
          .map((i, idx) => {
            const Icon = i.icon;

            return (
              <div
                key={idx}
                className="
                  flex flex-col 
                  gap-2
                "
              >
                <div
                  className="
                    flex
                    items-center
                    h-7
                    rounded-[20px]
                    border-1 border-gray-700
                    bg-gray-800
                    hover:border-white/60 hover:bg-transparent
                    px-2 font-donglelight text-[22px]
                    hover:shadow-lg
                    gap-2 text-gray-200
                    hover:-translate-y-1
                    transition-all duration-200
                  "
                >
                  {i.name}
                  
                </div>
                
                
              </div>
            );
          })}
      </div>
    </div>
  );
}