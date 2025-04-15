
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Code2, Database, Server, Globe, 
  Github, GitBranch, FileCode, Layers, 
  MonitorSmartphone, Cloud, Container, Workflow,
  Briefcase, UserPlus, Users, BookOpen
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C/C++", icon: <Code2 className="w-3.5 h-3.5 mr-1" /> },
        { name: "Python", icon: <FileCode className="w-3.5 h-3.5 mr-1" /> },
        { name: "Java", icon: <Cup className="w-3.5 h-3.5 mr-1" /> },
        { name: "SQL", icon: <Database className="w-3.5 h-3.5 mr-1" /> },
      ],
    },
    {
      title: "Technologies, Tools & Frameworks",
      skills: [
        { name: "GitHub", icon: <Github className="w-3.5 h-3.5 mr-1" /> },
        { name: "Git", icon: <GitBranch className="w-3.5 h-3.5 mr-1" /> },
        { name: "Pycharm", icon: <FileCode className="w-3.5 h-3.5 mr-1" /> },
        { name: "Vscode", icon: <Code2 className="w-3.5 h-3.5 mr-1" /> },
        { name: "Tailwind CSS", icon: <Layers className="w-3.5 h-3.5 mr-1" /> },
        { name: "Docker", icon: <Container className="w-3.5 h-3.5 mr-1" /> },
        { name: "Django", icon: <Globe className="w-3.5 h-3.5 mr-1" /> },
        { name: "AWS Cognito", icon: <Users className="w-3.5 h-3.5 mr-1" /> },
        { name: "AWS Dynamodb", icon: <Database className="w-3.5 h-3.5 mr-1" /> },
        { name: "AWS SNS", icon: <Cloud className="w-3.5 h-3.5 mr-1" /> },
        { name: "AWS Elastic beanstalk", icon: <Server className="w-3.5 h-3.5 mr-1" /> },
        { name: "HTML", icon: <FileCode className="w-3.5 h-3.5 mr-1" /> },
        { name: "CSS", icon: <Layers className="w-3.5 h-3.5 mr-1" /> },
      ],
    },
    {
      title: "Others",
      skills: [
        { name: "Team work", icon: <Users className="w-3.5 h-3.5 mr-1" /> },
        { name: "Team management", icon: <UserPlus className="w-3.5 h-3.5 mr-1" /> },
        { name: "Community management", icon: <Briefcase className="w-3.5 h-3.5 mr-1" /> },
        { name: "Leadership", icon: <BookOpen className="w-3.5 h-3.5 mr-1" /> },
      ],
    },
  ];

  return (
    <section id="skills">
      <h2 className="text-2xl font-poppins font-semibold mb-6">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.title} className="bg-card border-none card-hover dark:bg-card dark:border-white/5">
            <CardHeader>
              <CardTitle className="text-lg">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary"
                    className="bg-accent/10 text-foreground hover:bg-accent/20 flex items-center transition-colors duration-300"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Custom Coffee cup icon for Java (since Lucide doesn't have a Java icon)
const Cup = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
    <line x1="6" y1="2" x2="6" y2="4"></line>
    <line x1="10" y1="2" x2="10" y2="4"></line>
    <line x1="14" y1="2" x2="14" y2="4"></line>
  </svg>
);

export default Skills;
