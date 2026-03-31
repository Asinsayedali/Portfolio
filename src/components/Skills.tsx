import { motion, Variants } from "framer-motion";
import {
  Code2, Database, Server, Globe,
  Github, GitBranch, FileCode, Layers,
  Cloud, Container, Users, UserPlus, Briefcase, BookOpen,
} from "lucide-react";

const Cup = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const skillCategories = [
  {
    title: "Languages", number: "01",
    skills: [
      { name: "C/C++",  icon: <Code2    size={13} /> },
      { name: "Python", icon: <FileCode size={13} /> },
      { name: "Java",   icon: <Cup /> },
      { name: "SQL",    icon: <Database size={13} /> },
    ],
  },
  {
    title: "Technologies & Frameworks", number: "02",
    skills: [
      { name: "GitHub",                icon: <Github    size={13} /> },
      { name: "Git",                   icon: <GitBranch size={13} /> },
      { name: "Tailwind CSS",          icon: <Layers    size={13} /> },
      { name: "Docker",                icon: <Container size={13} /> },
      { name: "Django",                icon: <Globe     size={13} /> },
      { name: "AWS Cognito",           icon: <Users     size={13} /> },
      { name: "AWS DynamoDB",          icon: <Database  size={13} /> },
      { name: "AWS SNS",               icon: <Cloud     size={13} /> },
      { name: "AWS Elastic Beanstalk", icon: <Server    size={13} /> },
      { name: "HTML",                  icon: <FileCode  size={13} /> },
      { name: "CSS",                   icon: <Layers    size={13} /> },
      { name: "PyCharm",               icon: <Code2     size={13} /> },
      { name: "VS Code",               icon: <Code2     size={13} /> },
    ],
  },
  {
    title: "Soft Skills", number: "03",
    skills: [
      { name: "Teamwork",             icon: <Users     size={13} /> },
      { name: "Team Management",      icon: <UserPlus  size={13} /> },
      { name: "Community Management", icon: <Briefcase size={13} /> },
      { name: "Leadership",           icon: <BookOpen  size={13} /> },
    ],
  },
];

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.3, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Skills = () => (
  <section id="skills">
    <motion.h2
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="text-2xl mb-8 accent-line"
      style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "rgb(var(--text-rgb))" }}
    >
      Skills
    </motion.h2>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((cat, ci) => (
        <motion.div key={cat.title}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: ci * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="card-base p-6 h-full"
        >
          <div className="flex items-baseline gap-3 mb-5">
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.7rem", color: "var(--accent-hex)", letterSpacing: "0.08em" }}>
              {cat.number}
            </span>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "rgba(var(--text-rgb), 0.82)" }}>
              {cat.title}
            </h3>
          </div>

          <motion.div className="flex flex-wrap gap-2" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {cat.skills.map((skill, i) => (
              <motion.span key={skill.name} custom={i} variants={chipVariants} className="chip">
                {skill.icon}
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
