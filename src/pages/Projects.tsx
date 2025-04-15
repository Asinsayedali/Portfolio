
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const projectsRef = useScrollReveal({ direction: 'left' });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-custom pt-24 pb-16">
        <h1 className="text-4xl font-poppins font-bold heading-gradient mb-16">Projects</h1>
        <div ref={projectsRef as React.RefObject<HTMLDivElement>}>
          <ProjectList />
        </div>
      </main>
    </div>
  );
};

export default Projects;
