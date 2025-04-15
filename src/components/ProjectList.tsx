
import { Github, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Doctor Appointment System",
    description: "Built a comprehensive appointment system for doctors using Django and AWS services. The system enables users to book appointments, doctors to manage them, and includes prescription uploads. Implemented with AWS DynamoDB for storage, SNS for notifications, and CloudWatch for monitoring. Utilizes AWS SDK (Boto3) for programmatic service integration and is hosted on Elastic Beanstalk with automated GitHub Actions deployment.",
    technologies: ["Django", "AWS DynamoDB", "AWS SNS", "AWS CloudWatch", "Boto3", "GitHub Actions", "Elastic Beanstalk"],
    repoLink: "https://github.com/Asinsayedali/Appointment",
  },
  {
    title: "AI Chat Assistant",
    description: "Developed an AI chat assistant for communities, streamlining their support systems. The assistant effectively handles user queries related to community policies and functionalities. Implemented a Retrieval-Augmented Generation (RAG) application using Pathway pipeline and OpenAI API. Additionally, the assistant offers optional Twitter API integration and utilizes Streamlit for its user-friendly interface.",
    technologies: ["OpenAI", "Pathway", "RAG", "Streamlit", "Twitter API"],
    repoLink: "#",
  },
  {
    title: "AI Image Classifier",
    description: "Created an AI image classifier using PyTorch and FastAI to distinguish between BMW and Mercedes-Benz cars. Used a ResNet50 model and trained it on a dataset of car images to recognize these two brands.",
    technologies: ["PyTorch", "FastAI", "ResNet50", "Computer Vision"],
    demoLink: "#",
  },
  {
    title: "Project Wiki",
    description: "Created a demo of Wikipedia using Django, allowing users to add, edit, and update content on the website.",
    technologies: ["Django", "Python", "HTML", "CSS"],
  },
  {
    title: "Website for MuLearn Campus Chapter",
    description: "Made a functional static web page for helping students to onboard and give details about mulearn campus chapter. It helped students with their onboarding process and make the initial journey easy.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
  },
];

const ProjectList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <Card key={project.title} className="bg-card border-none card-hover dark:bg-card dark:border-white/5">
          <CardHeader>
            <CardTitle className="text-xl">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-accent/10 text-foreground rounded transition-colors duration-300 hover:bg-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              {project.repoLink && (
                <Button variant="outline" size="sm" asChild className="transition-colors duration-300 hover:bg-accent/10">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" />
                    Repository
                  </a>
                </Button>
              )}
              {project.demoLink && (
                <Button variant="outline" size="sm" asChild className="transition-colors duration-300 hover:bg-accent/10">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;
