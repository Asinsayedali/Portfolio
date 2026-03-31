
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import ProjectList from "@/components/ProjectList";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const contactLinks = [
  { label: "asinsayedali@gmail.com", href: "mailto:asinsayedali@gmail.com", icon: Mail, external: false },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/asin-sayed-ali/", icon: Linkedin, external: true },
  { label: "Twitter / X", href: "https://x.com/asin_sayed", icon: Twitter, external: true },
  { label: "GitHub",     href: "https://github.com/Asinsayedali", icon: Github, external: true },
];

function SectionHeading({ label }: { label: string }) {
  return (
    <motion.div className="mb-16"
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2 style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: "clamp(2rem, 5vw, 2.8rem)", letterSpacing: "-0.025em",
        color: "rgb(var(--text-rgb))",
      }}>
        {label}
      </h2>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ marginTop: 10, height: 2, width: 44, background: "var(--accent-hex)", borderRadius: 2 }}
      />
    </motion.div>
  );
}

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Index = () => (
  <div className="min-h-screen bg-background">
    <Analytics />
    <SpeedInsights />
    <Navbar />
    <Hero />

    {/* Experience */}
    <section id="experience" className="py-28 container-custom">
      <SectionHeading label="Experience" />
      <div className="space-y-20">
        <Reveal><Skills /></Reveal>
        <Reveal delay={0.12}><WorkExperience /></Reveal>
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="py-28 container-custom">
      <SectionHeading label="Projects" />
      <ProjectList />
    </section>

    {/* Contact */}
    <section id="contact" className="py-28 container-custom">
      <SectionHeading label="Contact" />
      <Reveal>
        <div className="max-w-lg">
          <p className="text-base leading-relaxed mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.42)" }}
          >
            Open to new opportunities, collaborations, and interesting conversations.
            Pick a channel below.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactLinks.map((link, i) => (
              <motion.a key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }} viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="card-base flex items-center gap-3 px-5 py-3.5 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <link.icon size={17} className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: "var(--accent-hex)" }} />
                <span className="text-sm font-medium truncate transition-colors duration-200"
                  style={{ color: "rgba(var(--text-rgb), 0.55)" }}
                >
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>

    {/* Footer */}
    <footer className="py-8 mt-4" style={{ borderTop: "1px solid rgba(var(--text-rgb), 0.06)" }}>
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.25)" }}
      >
        <span>© {new Date().getFullYear()} Asin Sayed Ali</span>
        <span>Built with React · Tailwind · Framer Motion</span>
      </div>
    </footer>
  </div>
);

export default Index;
