
import { 
  Briefcase, 
  Calendar,
  Building2
} from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const experiences = [
  {
    title: "Freelancer",
    company: "Self-Employed",
    period: "Jan 2025 - Present",
    responsibilities: [
      "Developed an AI interviewer application utilizing the DeepSeek R1 5B parameter model with Ollama for real-time interactions.",
      "Built a cloud-based doctor appointment system using Django and AWS services, implementing user authentication with Cognito, data storage in DynamoDB, and notifications via SNS.",
      "Integrated AWS CodePipeline for CI/CD to automate deployment for the appointment system.",
    ],
  },
  {
    title: "GDG On Campus Organizer",
    company: "Google Developer Groups",
    period: "Sept 2024 - Present",
    responsibilities: [
      "Started first ever GDG On Campus Chapter at campus.",
      "Organized GDG campus campaigns and events inside campus.",
    ],
  },
  {
    title: "State Program Lead",
    company: "Gtech Mulearn, Trivandrum",
    period: "May 2023 - Sept 2024",
    description: "BEWEB.dev is a 5-month program designed to provide training in full stack web development. In collaboration with Gtech Learn and Pygrammers, this program is conducted across the state of Kerala, India.",
    responsibilities: [
      "Facilitated the recruitment and selection process of participants, assessing their suitability for the program and providing guidance throughout the duration.",
      "Collaborated with Gtech Learn and Pygrammers to establish and oversee the program's execution across the Kerala state.",
    ],
  },
  {
    title: "Campus Lead",
    company: "Gtech Mulearn, Trivandrum",
    period: "Dec 2022 - Oct 2024",
    description: "MuLearn is a synergic philosophy of education, with a culture of mutual learning through micro groups of peers.",
    responsibilities: [
      "Organized both technical and non-technical events in college.",
      "Led successful campus chapter activities, driving progress towards Level 5 status.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2 className="text-2xl font-poppins font-semibold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <Card 
            key={index}
            className="bg-card border-none card-hover transition-all duration-300 dark:bg-card dark:border-white/5"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    {experience.company}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {experience.description && (
                <p className="mb-3 text-muted-foreground">{experience.description}</p>
              )}
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
