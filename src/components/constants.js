import reactIcon from "../assets/react.svg";
import pythonIcon from "../assets/python.svg";
import gitIcon from "../assets/git.svg";
import jsIcon from "../assets/js.svg";
import tailwindIcon from "../assets/tailwind.svg";
import linkedinIcon from "../assets/linkedin.svg";

export const Nav_links = [
    {target: "home", label: "HOME"},
    {target: "about", label: "ABOUT"},
    {target: "projects", label: "PROJECTS"},
    {target: "contacts", label: "CONTACTS"}
]


export const projectdata = [
    { title: "Portfolio", state:"ongoing", heading:"Heading1",techstack: "React, Tailwind, GSAP", description: "This is the portfolio website, where I showcase my skills, project, my interests, on going plans and projects. I built this also to learn some frontend skills and to get started with projects." },
    { title: "Finax", state:"not-started", heading:"Heading1",techstack: "", description: "An AI assisted finance manager which just doesn't manages but also helps you with your personal wants and needs." },
    { title: "Edupal", state:"not-started", heading:"Heading1",techstack: "", description: "Notion but for the students, manage classes, exams, notes, to-dos', projects assignments for the whole course work with your AI buddy. Mention your side quests/career goals and you will be set up." },
    
]

export const icons = [
    { name: "React", label:"frontend"},
    { name: "Python", label:"language"},
    { name: "Git", label:"language"},
    { name: "Nextjs", label:"frontend" },
    { name: "js", label:"language" },
    { name: "springboot", label:"backend" },
    { name: "Tailwind", label:"frontend" },
    { name: "Java", label: "language"},
    { name: "Nodejs", label: "backend"}
];

export const social = [
        { name: "linkedin", icon: linkedinIcon, link:"https://linkedin.com/in/subhajit-baidya-30a5a1363"},
        { name: "github", icon: gitIcon, link:"https://github.com/subcodz"},
        { name: "mail", icon: gitIcon, link:"mailto:subs88badd@gmail.com"},
        
];