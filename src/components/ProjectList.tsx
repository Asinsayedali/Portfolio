import { motion, Variants } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";

const projects = [
  {
    title: "Doctor Appointment System",
    description: "Comprehensive appointment system using Django and AWS. Enables booking, doctor management, and prescription uploads. Built with DynamoDB, SNS, CloudWatch, and deployed via Elastic Beanstalk with GitHub Actions CI/CD.",
    technologies: ["Django", "AWS DynamoDB", "AWS SNS", "CloudWatch", "Boto3", "Elastic Beanstalk"],
    repoLink: "#",
  },
  {
    title: "AI Law Book",
    description: "AI-powered law reference tool using LangChain and Gemini 1.5 Pro. Users can ask questions about legal topics, answered via a FAISS vector database for efficient retrieval.",
    technologies: ["Flask", "Python", "FAISS", "LangChain", "Gemini API", "React.js"],
    repoLink: "https://github.com/Asinsayedali/Lawbook",
  },
  {
    title: "AI Interviewer",
    description: "AI-powered interview prep tool using LangChain + DeepSeek R1 5B (Ollama). Retrieves context from your resume via vector search to simulate realistic technical interviews.",
    technologies: ["Flask", "Python", "FAISS", "LangChain", "Ollama", "DeepSeek R1 5B"],
    repoLink: "https://github.com/midnightcoder04/DeepSeek_Child_Interviewer",
  },
  {
    title: "AI Chat Assistant",
    description: "Community support chatbot using RAG (Pathway + OpenAI). Handles policy queries, optional Twitter API integration, and a Streamlit interface.",
    technologies: ["OpenAI", "Pathway", "RAG", "Streamlit", "Twitter API"],
    repoLink: "https://github.com/Asinsayedali/AI-ChatAssistant",
  },
  {
    title: "AI Image Classifier",
    description: "ResNet50-based BMW vs. Mercedes-Benz classifier trained with PyTorch and FastAI on a custom dataset. Deployed live on Hugging Face Spaces.",
    technologies: ["PyTorch", "FastAI", "ResNet50", "Computer Vision"],
    demoLink: "https://huggingface.co/spaces/Asinsayed/Bmw-Clasifier",
  },
  {
    title: "Project Wiki",
    description: "Wikipedia-style knowledge base built with Django. Users can create, edit, and version encyclopedia entries.",
    technologies: ["Django", "Python", "HTML", "CSS"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ProjectList = () => (
  <motion.div
    className="grid gap-5 md:grid-cols-2"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
  >
    {projects.map((project, index) => (
      <motion.div
        key={project.title}
        variants={cardVariant}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="card-base p-6 flex flex-col group"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3 gap-3">
          <h3
            className="text-base leading-snug transition-colors duration-300 group-hover:text-[var(--accent-hex)]"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "rgba(var(--text-rgb), 0.88)" }}
          >
            {project.title}
          </h3>
          <span
            className="shrink-0 text-[0.65rem] font-mono px-2 py-0.5 rounded-full"
            style={{ background: "rgba(var(--text-rgb),0.08)", border: "1px solid rgba(var(--text-rgb),0.18)", color: "rgba(var(--text-rgb), 0.5)" }}
          >
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(var(--text-rgb), 0.42)" }}
        >
          {project.description}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(var(--text-rgb),0.06)", border: "1px solid rgba(var(--text-rgb),0.12)", color: "rgba(var(--text-rgb), 0.65)", fontFamily: "'DM Sans', sans-serif" }}
            >
              <Github size={13} /> Repository
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(var(--text-rgb),0.06)", border: "1px solid rgba(var(--text-rgb),0.12)", color: "rgba(var(--text-rgb), 0.65)", fontFamily: "'DM Sans', sans-serif" }}
            >
              <LinkIcon size={13} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default ProjectList;
