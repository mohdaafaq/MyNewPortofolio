import { motion } from "framer-motion";
import profile from "../assets/bg.png"; // Your image

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute -right-32 bottom-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-medium uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Passionate About Building
            <span className="text-cyan-400"> Modern Web Apps</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile}
                alt="Profile"
                className="relative w-95 rounded-3xl border border-white/10"
              />

            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <h3 className="text-3xl font-bold text-white">
              Hello, I'm Mohammed Aafaq 👋
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              I'm a MERN Stack Developer and Computer Science student who enjoys
              creating responsive, user-friendly, and scalable web applications.
              I love turning ideas into modern digital experiences using React,
              Tailwind CSS, Node.js, Express, and MongoDB.
            </p>

            <p className="text-gray-400 mt-5 leading-8">
              I'm always learning new technologies, solving real-world
              problems, and building projects that improve my skills as a
              developer.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              {[
                "Responsive Design",
                "React.js",
                "Node.js",
                "MongoDB",
                "REST APIs",
                "Tailwind CSS",
                "Git & GitHub",
                "Problem Solving",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="text-cyan-400">✓</span>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-white/5 rounded-2xl border border-white/10 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">20+</h4>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>

              <div className="bg-white/5 rounded-2xl border border-white/10 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>

              <div className="bg-white/5 rounded-2xl border border-white/10 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">100%</h4>
                <p className="text-gray-400 mt-2">Dedication</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}