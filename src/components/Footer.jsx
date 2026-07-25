import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              Mohammed<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Building beautiful, responsive and scalable web
              applications using modern technologies.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Navigation
            </h3>

            <ul className="space-y-3">

              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-cyan-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}

            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3 items-center">
                <MdEmail className="text-cyan-400 text-xl" />
                <span className="text-gray-400">
                  your@email.com
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <MdLocationOn className="text-cyan-400 text-xl" />
                <span className="text-gray-400">
                  Udaipur, Rajasthan
                </span>
              </div>

            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Follow Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-pink-500 hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Mohammed Aafaq. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-cyan-500 text-black flex items-center justify-center hover:scale-110 transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}