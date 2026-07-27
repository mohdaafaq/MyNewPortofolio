import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black py-28 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px]">
            My Expertise
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I enjoy working across the full stack, from designing beautiful
            user interfaces to building scalable backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-4 rounded-xl bg-black/30 border border-white/5 p-3 hover:border-cyan-400/40 transition"
                  >
                    <Icon className="text-3xl text-cyan-400" />

                    <span className="text-gray-300 font-medium">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}