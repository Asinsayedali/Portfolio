
import { useEffect, useRef } from 'react';

interface UseScrollRevealProps {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const useScrollReveal = ({ 
  threshold = 0.1, 
  rootMargin = '0px', 
  delay = 0,
  direction = 'left'
}: UseScrollRevealProps = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    // Set initial transform based on direction
    let initialTransform = 'translateY(30px)';
    if (direction === 'left') initialTransform = 'translateX(-50px)';
    if (direction === 'right') initialTransform = 'translateX(50px)';
    if (direction === 'up') initialTransform = 'translateY(30px)';
    if (direction === 'down') initialTransform = 'translateY(-30px)';
    
    currentRef.style.transform = initialTransform;
    currentRef.style.opacity = '0';
    currentRef.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              currentRef.style.opacity = '1';
              currentRef.style.transform = 'translate(0)';
            }, delay);
            observer.unobserve(currentRef);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay, direction]);

  return ref;
};
