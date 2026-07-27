import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import heroImage from "../assets/bg.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-6">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center min-h-screen px-6 lg:px-12">
        {/* LEFT SIDE */}
        <div className="z-20 text-center lg:text-left">
          <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            👋 Welcome to my Portfolio
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Hi, I'm
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-6xl pb-6 font-black"
            >
              Mohammed Aafaq
            </motion.h1>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="mt-10 text-2xl md:text-3xl text-gray-300 font-semibold"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mt-6 max-w-xl text-gray-400 leading-8"
          >
            I build modern, responsive and high-performance web applications
            using React, Tailwind CSS, Node.js, Express and MongoDB. Passionate
            about creating beautiful user experiences with clean code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition"
            onClick={()=>{navigate('/projects')}}
            >
              View Projects
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition">
              Download Resume
            </button>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500 transition"
            >
              <MdEmail size={22} />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
            {["React", "Tailwind", "Node.js", "MongoDB", "Express"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[500px] lg:h-screen mt-10 lg:mt-0">
          <img
            src={heroImage}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

          {/* Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </div>
      
    </section>
  );
}
