import React, { useEffect, useRef } from 'react';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'none';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: AnimationDirection;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedElement({
  children,
  animation = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    // Setup initial state
    const initialTransform = 
      animation === 'up' ? 'translate3d(0, 40px, 0)' :
      animation === 'down' ? 'translate3d(0, -40px, 0)' :
      animation === 'left' ? 'translate3d(40px, 0, 0)' :
      animation === 'right' ? 'translate3d(-40px, 0, 0)' :
      animation === 'scale' ? 'scale(0.95)' :
      'translate3d(0, 0, 0)';
    
    currentElement.style.transform = initialTransform;
    currentElement.style.opacity = animation === 'none' ? '1' : '0';
    currentElement.style.transition = `transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1.0) ${delay}ms, opacity 0.8s cubic-bezier(0.17, 0.55, 0.55, 1.0) ${delay}ms`;
    
    // Setup observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (!once || !hasAnimated.current)) {
          currentElement.style.transform = 'translate3d(0, 0, 0) scale(1)';
          currentElement.style.opacity = '1';
          hasAnimated.current = true;
          
          if (once) {
            observer.unobserve(currentElement);
          }
        } else if (!entry.isIntersecting && !once && hasAnimated.current) {
          currentElement.style.transform = initialTransform;
          currentElement.style.opacity = animation === 'none' ? '1' : '0';
          hasAnimated.current = false;
        }
      });
    }, { threshold });
    
    observer.observe(currentElement);
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, delay, threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}