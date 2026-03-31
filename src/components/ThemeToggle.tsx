
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import SunMoonIcon from './icons/SunMoonIcon';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    // Default dark — portfolio is designed for dark mode
    return stored === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <SunMoonIcon className={`h-5 w-5 transition-transform ${theme === 'dark' ? 'text-amber-300' : ''}`} />
    </Button>
  );
};

export default ThemeToggle;
