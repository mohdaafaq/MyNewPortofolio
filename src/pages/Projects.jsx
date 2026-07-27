import React from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  const projects = [
  {
    title: "AI Document Assistant",
    description:
      "An AI-powered document assistant built with React and OpenAI APIs for summarizing, rewriting, and analyzing documents.",
    image: "/projects/ai-doc.png",
    tech: ["React", "Tailwind", "Node.js", "OpenAI"],
    github: "#",
    demo: "#",
  },
  {
    title: "StudyBase",
    description:
      "A notes-sharing platform where students can upload and download subject notes with an admin dashboard.",
    image: "/projects/studybase.png",
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio with Framer Motion, responsive design, and premium animations.",
    image: "/projects/portfolio.png",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    demo: "#",
  },
];
  return (
    <section id="projects" className="bg-black py-28">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<p className="text-cyan-400 uppercase tracking-widest">
Featured Work
</p>

<h2 className="text-5xl font-bold text-white mt-4">
My <span className="text-cyan-400">Projects</span>
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((project,index)=>(

<motion.div

key={index}

whileHover={{
y:-10,
}}

className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl"
>

<div className="overflow-hidden">

<img

src={project.image}

alt={project.title}

className="h-60 w-full object-cover hover:scale-110 transition duration-500"

/>

</div>

<div className="p-6">

<h3 className="text-2xl font-semibold text-white">

{project.title}

</h3>

<p className="text-gray-400 mt-4 leading-7">

{project.description}

</p>

<div className="flex flex-wrap gap-2 mt-5">

{project.tech.map((tech)=>(

<span

key={tech}

className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm"
>

{tech}

</span>

))}

</div>

<div className="flex gap-4 mt-8">

<a

href={project.github}

className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 text-center text-white hover:bg-cyan-500 transition"
>

<FaGithub className="inline mr-2"/>

Code

</a>

<a

href={project.demo}

className="flex-1 bg-cyan-500 rounded-xl py-3 text-center text-black font-semibold hover:bg-cyan-400 transition"
>

<FaExternalLinkAlt className="inline mr-2"/>

Live

</a>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>
  )
}

export default Projects