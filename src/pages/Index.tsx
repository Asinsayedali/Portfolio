
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import ProjectList from "@/components/ProjectList";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SpeedInsights } from "@vercel/speed-insights/react"

const Index = () => {
  const experienceRef = useScrollReveal({ direction: 'left' });
  const projectsRef = useScrollReveal({ direction: 'right', delay: 100 });
  const contactRef = useScrollReveal({ direction: 'up', delay: 200 });

  return (
    <div className="min-h-screen bg-background">
      <SpeedInsights />
      <Navbar />
      <Hero />
      
      <section 
        ref={experienceRef as React.RefObject<HTMLElement>} 
        id="experience" 
        className="py-16 container-custom"
      >
        <h1 className="text-4xl font-poppins font-bold heading-gradient mb-16">Experience</h1>
        <div className="space-y-16">
          <Skills />
          <WorkExperience />
        </div>
      </section>

      <section 
        ref={projectsRef as React.RefObject<HTMLElement>}
        id="projects" 
        className="py-16 container-custom"
      >
        <h1 className="text-4xl font-poppins font-bold heading-gradient mb-16">Projects</h1>
        <ProjectList />
      </section>

      <section 
        ref={contactRef as React.RefObject<HTMLElement>}
        id="contact" 
        className="py-16 container-custom"
      >
        <h1 className="text-4xl font-poppins font-bold heading-gradient mb-16">Contact</h1>
        <div className="space-y-6 max-w-lg mx-auto">
          <Button variant="outline" size="lg" className="w-full transition-colors duration-300 hover:bg-accent/70" asChild>
            <a href="mailto:asinsayedali@gmail.com">
              <Mail className="mr-2" />
              asinsayedali@gmail.com
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="w-full transition-colors duration-300 hover:bg-accent/70" asChild>
            <a href="https://www.linkedin.com/in/asin-sayed-ali/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" />
              LinkedIn Profile
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="w-full transition-colors duration-300 hover:bg-accent/70" asChild>
            <a href="https://x.com/asin_sayed" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2" />
              Twitter Profile
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
