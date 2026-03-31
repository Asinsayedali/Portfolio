import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

const navItems = [
  { name: "Home",       href: "/#home" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects",   href: "/#projects" },
  { name: "Contact",    href: "/#contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", () => {});
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      setMobileOpen(false);
      document.querySelector(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{ scaleX, background: "var(--accent-hex)" }}
      />

      {/* ── Pill navbar ── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed z-50 left-1/2 -translate-x-1/2"
        style={{ top: 16 }}
      >
        <div
          className="flex items-center gap-8 px-6 py-3 transition-all duration-500"
          style={{
            borderRadius: 9999,
            background: scrolled
              ? "rgba(var(--bg-rgb), 0.82)"
              : "rgba(var(--bg-rgb), 0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(var(--text-rgb), 0.1)",
            boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.15)" : "none",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "-0.02em",
              color: "rgb(var(--text-rgb))",
              whiteSpace: "nowrap",
            }}
            className="transition-opacity hover:opacity-60 duration-200"
          >
            asa<span style={{ color: "var(--accent-hex)" }}>.</span>
          </Link>

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06, duration: 0.45 }}
              >
                <Link
                  to={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative text-xs font-medium uppercase tracking-widest transition-colors duration-200 group"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.1em",
                    color: pathname === item.href ? "var(--accent-hex)" : "rgba(var(--text-rgb), 0.5)",
                  }}
                >
                  {item.name}
                  <span
                    className="absolute -bottom-0.5 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"
                    style={{ background: "var(--accent-hex)" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Theme toggle */}
          <div style={{ borderLeft: "1px solid rgba(var(--text-rgb), 0.1)", paddingLeft: 16 }}>
            <ThemeToggle />
          </div>

          {/* Mobile hamburger (inside pill) */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ color: "rgba(var(--text-rgb), 0.6)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2"
            style={{
              borderRadius: 16,
              background: "rgba(var(--bg-rgb), 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(var(--text-rgb), 0.1)",
              overflow: "hidden",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block px-6 py-3 text-sm font-medium transition-colors hover:bg-[rgba(var(--text-rgb),0.04)]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(var(--text-rgb), 0.6)",
                  borderBottom: "1px solid rgba(var(--text-rgb), 0.05)",
                }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
