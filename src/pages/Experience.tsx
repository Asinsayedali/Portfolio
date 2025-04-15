
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Navbar from "@/components/Navbar";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Experience = () => {
  const skillsRef = useScrollReveal({ direction: 'left' });
  const workRef = useScrollReveal({ direction: 'right', delay: 200 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-custom pt-24 pb-16">
        <h1 className="text-4xl font-poppins font-bold heading-gradient mb-16">Experience</h1>
        <div className="space-y-16">
          <div ref={skillsRef as React.RefObject<HTMLDivElement>}>
            <Skills />
          </div>
          <div ref={workRef as React.RefObject<HTMLDivElement>}>
            <WorkExperience />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
