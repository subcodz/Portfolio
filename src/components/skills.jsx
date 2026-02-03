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
              <div className="grid grid-rows-3 gap-2">

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
    <div className="border-2 rounded-[8px] bg-gray-800 border-gray-800 p-4">
      <h2 className="text-white font-wide text-[12px] mb-3">
        {title}
      </h2>

      <div className="grid grid-cols-5">
        {icons
          .filter(i => i.label === label)
          .map((i, idx) => {
            const Icon = i.icon;

            return (
              <div
                key={idx}
                className="
                  flex flex-col items-center gap-0
                  
                "
              >
                <div
                  className="
                    w-10 h-10
                    flex items-center justify-center
                    rounded-md
                    bg-white/10
                    hover:bg-white/20
                    
                    hover:-translate-y-1
                    hover:shadow-lg
                    transition-all duration-200
                  "
                >
                  {Icon ? (
                    <img src={i.icon} className="w-6 h-6 object-contain" />
                  ) : (
                    <span className="opacity-40">?</span>
                  )}
                </div>
                
                {/* <span>{i.name}</span> */}
                
              </div>
            );
          })}
      </div>
    </div>
  );
}