import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full top-0 left-0" />
      <div className="absolute w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hello?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="space-y-8"
          >

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">

              <h3 className="text-2xl font-semibold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <MdEmail className="text-cyan-400 text-2xl" />
                  </div>

                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">
                      razviaafaq@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <MdLocationOn className="text-cyan-400 text-2xl" />
                  </div>

                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">
                      Udaipur, Rajasthan
                    </p>
                  </div>
                </div>

              </div>

              <div className="flex gap-4 mt-10">

                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition">
                  <FaGithub />
                </a>

                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition">
                  <FaLinkedin />
                </a>

                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 transition">
                  <FaInstagram />
                </a>

              </div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full mt-5 bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full mt-5 bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none resize-none focus:border-cyan-400"
            />

            <button
              className="mt-6 w-full py-4 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              Send Message →
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}