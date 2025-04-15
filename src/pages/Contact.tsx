
import Navbar from "@/components/Navbar";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-custom pt-24 pb-16">
        <h1 className="text-4xl font-poppins font-bold heading-gradient mb-16">Contact</h1>
        
        <div className="space-y-6 max-w-lg mx-auto">
          <Button variant="outline" size="lg" className="w-full" asChild>
            <a href="mailto:asinsayedali@gmail.com">
              <Mail className="mr-2" />
              asinsayedali@gmail.com
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="w-full" asChild>
            <a href="https://www.linkedin.com/in/asin-sayed-ali/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" />
              LinkedIn Profile
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="w-full" asChild>
            <a href="https://x.com/asin_sayed" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2" />
              Twitter Profile
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Contact;
