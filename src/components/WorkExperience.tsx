import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "Sixtysix Technologies",
    period: "Present",
    responsibilities: [
      "Building scalable APIs and system architecture.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    title: "Freelancer",
    company: "Self-Employed",
    period: "Jan 2025 – Present",
    responsibilities: [
      "Developed an AI interviewer application using DeepSeek R1 5B with Ollama for real-time interactions.",
      "Built a cloud-based doctor appointment system with Django and AWS (Cognito, DynamoDB, SNS, CodePipeline).",
    ],
  },
  {
    title: "GDG On Campus Organizer",
    company: "Google Developer Groups",
    period: "Sept 2024 – Present",
    responsibilities: [
      "Founded the first GDG On Campus chapter at the college.",
      "Organized developer campaigns and events on campus.",
    ],
  },
  {
    title: "State Program Lead",
    company: "Gtech Mulearn, Trivandrum",
    period: "May 2023 – Sept 2024",
    description: "BEWEB.dev — a 5-month state-wide full stack development program run in collaboration with Gtech Learn and Pygrammers across Kerala.",
    responsibilities: [
      "Managed participant recruitment, selection, and guidance throughout the program.",
      "Coordinated with Gtech Learn and Pygrammers on program execution across the state.",
    ],
  },
  {
    title: "Campus Lead",
    company: "Gtech Mulearn, Trivandrum",
    period: "Dec 2022 – Oct 2024",
    description: "MuLearn — a mutual-learning platform built around micro peer groups.",
    responsibilities: [
      "Organized technical and non-technical events at campus level.",
      "Led chapter activities, driving progress towards Level 5 status.",
    ],
  },
];

const WorkExperience = () => (
  <section id="work-experience">
    <motion.h2
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="text-2xl mb-10 accent-line"
      style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "rgb(var(--text-rgb))" }}
    >
      Work Experience
    </motion.h2>

    <div className="relative">
      {/* Timeline line */}
      <motion.div
        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "absolute", left: 20, top: 0, bottom: 0, width: 1,
          background: "linear-gradient(to bottom, transparent, rgba(var(--text-rgb),0.35) 15%, rgba(var(--text-rgb),0.35) 85%, transparent)",
          transformOrigin: "top",
        }}
      />

      <div className="space-y-8 pl-12">
        {experiences.map((exp, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative group"
          >
            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: i * 0.07 + 0.15 }}
              style={{
                position: "absolute", left: -40, top: 20,
                width: 10, height: 10, borderRadius: "50%",
                background: "rgb(var(--bg-rgb))",
                border: "2px solid rgba(var(--text-rgb),0.5)",
                boxShadow: "0 0 10px rgba(var(--text-rgb),0.2)",
              }}
            />

            {/* Card */}
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="card-base p-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="text-base font-semibold transition-colors duration-300 group-hover:text-[var(--accent-hex)]"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "rgba(var(--text-rgb), 0.88)" }}
                >
                  {exp.title}
                </h3>
                <span className="text-xs flex items-center gap-1 shrink-0"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--accent-hex)" }}
                >
                  <Calendar size={11} /> {exp.period}
                </span>
              </div>

              <p className="text-sm flex items-center gap-1.5 mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.42)" }}
              >
                <Building2 size={13} /> {exp.company}
              </p>

              {exp.description && (
                <p className="text-sm leading-relaxed mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.32)", fontStyle: "italic" }}
                >
                  {exp.description}
                </p>
              )}

              <ul className="space-y-1.5">
                {exp.responsibilities.map((r, idx) => (
                  <li key={idx} className="flex gap-2 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.45)" }}
                  >
                    <span style={{ color: "var(--accent-hex)", marginTop: 4, flexShrink: 0 }}>›</span>
                    {r}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;
