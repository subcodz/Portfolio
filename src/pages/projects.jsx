import { projectdata } from "../components/constants";
import ProjectCard from "../components/projectcard";

export default function Projects(){
    return(
        <div className="flex flex-col relative items-center">
            <h1 className="text-white text-[28px] sm:text-3xl  font-wide ">PROJECTS</h1>
            <div className=" gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative items-center pt-10 ">
            {projectdata.map((card, index)=>(
                <ProjectCard
                key={index}
                heading={card.title}
                description={card.description}
                techstack={card.techstack}
                state={card.state}
                />
            ))}
            </div>
        </div>
    );
}