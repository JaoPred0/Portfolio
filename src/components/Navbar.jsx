import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 600);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        flex items-center justify-between
        px-6 py-3
        backdrop-blur-xl transition-all duration-500
        border border-white/10
        text-white
        ${isScrolled
          ? "w-full rounded-none top-0 left-0 -translate-x-0 border-none bg-black/40 py-4 shadow-lg"
          : "w-[90%] max-w-5xl rounded-3xl bg-white/5 shadow-md"}
      `}
    >
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-2xl animate-pulse">⚛️</span> React Bits
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {["Home", "Docs", "About", "Contact"].map((link) => (
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

      <button className="md:hidden p-2 rounded-md hover:bg-white/10 transition">
        <Menu size={24} />
      </button>
    </motion.nav>
  );
}
