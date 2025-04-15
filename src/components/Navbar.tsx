
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { pathname } = useLocation();
  
  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 dark:bg-transparent dark:backdrop-blur-md bg-background/80 backdrop-blur-sm border-b dark:border-white/10">
      <nav className="container-custom h-16 flex items-center justify-between">
        <Link to="/" className="heading-gradient font-poppins text-lg font-semibold">
          Asin Sayed Ali
        </Link>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`nav-link ${
                pathname === item.href ? "text-foreground" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`nav-link text-lg ${
                    pathname === item.href ? "text-foreground" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-2">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
