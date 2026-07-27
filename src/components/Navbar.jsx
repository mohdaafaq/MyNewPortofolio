import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto mt-4 px-6 py-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          Aafaq<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="relative text-gray-300 hover:text-white transition duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/mohdaafaq"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
          >
            <FaGithub size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aafaq-razvi-958206406"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:scale-110"
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* Email */}
          <a
            href="mailto:razviaafaq@gmail.com"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-110"
          >
            <MdEmail size={22} />
          </a>
        </div>
        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-[400px] mt-3" : "max-h-0"
        }`}
      >
        <div className="mx-4 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition"
            >
              {link.name}
            </a>
          ))}

          <div className="flex p-6 justify-center gap-4 mt-6 border-t border-white/10 pt-6">
            <a
              href="https://github.com/mohdaafaq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white hover:text-black transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/aafaq-razvi-958206406"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#0A66C2] transition"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:razviaafaq@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-red-500 transition"
            >
              <MdEmail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
