import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const roles = [
  "Backend Developer",
  "AI Enthusiast",
  "Open Source Builder",
  "Problem Solver",
];

const techStack = [
  "Python", "C", "Django", "FastAPI", "Django-ninja",
  "AWS", "Boto3", "Docker", "PostgreSQL",
  "Flask", "Git", "Github", "Postman", "Celery", "Streamlit",
];

function AnimatedCounter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const total = 40;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * to));
      if (frame >= total) clearInterval(timer);
    }, 28);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  useEffect(() => {
    const iv = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2800
    );
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-12 relative overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="container-custom w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* CARD A: Name */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="card-base p-8 lg:p-11 flex flex-col justify-between gap-8 md:col-span-7 md:row-span-2"
            style={{ minHeight: 360 }}
          >
            <div>
              <p
                className="text-xs uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.28)" }}
              >
                Portfolio · 2026
              </p>

              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.6rem, 5.5vw, 5.2rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.93,
                  color: "rgb(var(--text-rgb))",
                }}
              >
                Asin<br />
                Sayed<br />
                <span style={{ color: "rgba(var(--text-rgb), 0.35)" }}>Ali.</span>
              </h1>
            </div>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "rgba(var(--text-rgb), 0.42)",
                maxWidth: "40ch",
              }}
            >
              Building scalable backend systems and real-world AI applications.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:asinsayedali@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  background: "rgb(var(--text-rgb))",
                  color: "rgb(var(--bg-rgb))",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Mail size={15} />
                Email me
              </a>
              <a
                href="https://github.com/Asinsayedali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  background: "rgba(var(--text-rgb), 0.05)",
                  border: "1px solid rgba(var(--text-rgb), 0.1)",
                  color: "rgba(var(--text-rgb), 0.65)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/asin-sayed-ali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  background: "rgba(var(--text-rgb), 0.05)",
                  border: "1px solid rgba(var(--text-rgb), 0.1)",
                  color: "rgba(var(--text-rgb), 0.65)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* CARD B: Role cycling */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.14, ease }}
            whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
            className="card-base p-7 md:col-span-5 flex flex-col justify-between overflow-hidden relative"
          >
            <span
              aria-hidden
              style={{
                position: "absolute", right: -8, bottom: -20,
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "7rem", lineHeight: 1,
                color: "rgba(var(--text-rgb), 0.03)",
                userSelect: "none", pointerEvents: "none",
              }}
            >
              {">_"}
            </span>

            <p
              className="text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.28)" }}
            >
              Currently
            </p>

            <div style={{ minHeight: 80 }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 22, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -22, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.38, ease }}
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                    letterSpacing: "-0.02em",
                    color: "rgb(var(--text-rgb))",
                    lineHeight: 1.15,
                  }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-1.5">
              {roles.map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    width: i === roleIndex ? 22 : 6,
                    background:
                      i === roleIndex
                        ? "rgb(var(--text-rgb))"
                        : "rgba(var(--text-rgb), 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ height: 5, borderRadius: 3, display: "inline-block" }}
                />
              ))}
            </div>
          </motion.div>

          {/* CARD C: Location + availability */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
            className="card-base p-7 md:col-span-5 flex flex-col justify-between gap-5"
          >
            <div className="flex items-start gap-3">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(var(--text-rgb), 0.05)", border: "1px solid rgba(var(--text-rgb), 0.08)" }}
              >
                <MapPin size={16} style={{ color: "rgba(var(--text-rgb), 0.6)" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "rgb(var(--text-rgb))" }}>
                  Kerala, India
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(var(--text-rgb), 0.35)", marginTop: 2 }}>
                  UTC +5:30
                </p>
              </div>
            </div>

            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full"
                style={{ background: "rgba(34, 197, 94, 0.07)", border: "1px solid rgba(34, 197, 94, 0.18)" }}
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 }}
                />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#22c55e", fontWeight: 500 }}>
                  Available for work
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD D: Projects count */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
            className="card-base p-7 md:col-span-3 flex flex-col justify-between relative overflow-hidden"
          >
            <p
              className="text-xs uppercase tracking-[0.18em]"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.28)" }}
            >
              Projects
            </p>

            <div>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em",
                  lineHeight: 1, color: "rgb(var(--text-rgb))",
                }}
              >
                <AnimatedCounter to={6} />
                <span style={{ color: "rgba(var(--text-rgb), 0.3)" }}>+</span>
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(var(--text-rgb), 0.35)", marginTop: 4 }}>
                AI & backend apps built
              </p>
            </div>

            <a
              href="/#projects"
              className="inline-flex items-center gap-1 text-xs font-medium transition-opacity duration-200 hover:opacity-100"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.35)" }}
            >
              View all <ArrowUpRight size={13} />
            </a>
          </motion.div>

          {/* CARD E: Tech stack chips */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.36, ease }}
            whileHover={{ scale: 1.008, transition: { duration: 0.2 } }}
            className="card-base p-7 md:col-span-9"
          >
            <p
              className="text-xs uppercase tracking-[0.18em] mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.28)" }}
            >
              Tech Stack
            </p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } } }}
            >
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.75, y: 6 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease } },
                  }}
                  className="chip"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
