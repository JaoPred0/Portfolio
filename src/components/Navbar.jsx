import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 500); // altura do scroll
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkVariants = {
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  const links = ["Home", "Projetos", "Timeline", "Contato"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500`}
    >
      <div
        className={`
          mx-auto flex items-center justify-between px-6 py-3
          backdrop-blur-sm transition-all duration-500
          text-white
          ${isScrolled
            ? "w-full rounded-none top-0 left-0 border-none bg-black/70 shadow-lg"
            : "w-[90%] max-w-5xl rounded-3xl border border-white/30 bg-black shadow-md mt-4"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-white">
          <CodeBracketIcon className="w-6 h-6" />
          <span>João Pedro</span>
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="transition-colors duration-300">{link}</span>
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white rounded-full"
                layoutId="underline"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
        </div>

        {/* Menu mobile */}
        <div className="md:hidden relative">
          <button
            className="p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-40 bg-black/80 backdrop-blur-xl rounded-lg shadow-lg flex flex-col py-2 z-50"
              >
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
