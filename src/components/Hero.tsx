
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 section-padding" id="home">
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins heading-gradient mb-6">
            Computer Science Student & Tech Enthusiast
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Third-year B.Tech student passionate about software development, AI, and building innovative solutions. 
            Currently exploring Web Development and Artificial Intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="mailto:asinsayedali@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/Asinsayedali" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/asin-sayed-ali" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
