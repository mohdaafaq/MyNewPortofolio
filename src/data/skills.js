import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiNextdotjs,
  SiVscodium,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: SiPostman },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "VS Code", icon:VscVscode},
    ],
  },
];