import React, { useEffect, useRef } from 'react';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'bounce' | 'zoom' | 'none';
type AnimationSpeed = 'fast' | 'normal' | 'slow';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: AnimationDirection;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  speed?: AnimationSpeed;
  distance?: number; // How far elements move (in px) 
}

export default function AnimatedElement({
  children,
  animation = 'up',
  delay = 0,
  threshold = 0.05, // Lower threshold to trigger sooner
  className = '',
  once = true,
  speed = 'normal',
  distance = 30
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    // Get transition duration based on speed
    const getDuration = () => {
      switch (speed) {
        case 'fast': return 500; // 0.5s
        case 'slow': return 900; // 0.9s
        default: return 700; // 0.7s
      }
    };
    
    const duration = getDuration();

    // Setup initial state
    const initialTransform = 
      animation === 'up' ? `translate3d(0, ${distance}px, 0)` :
      animation === 'down' ? `translate3d(0, -${distance}px, 0)` :
      animation === 'left' ? `translate3d(${distance}px, 0, 0)` :
      animation === 'right' ? `translate3d(-${distance}px, 0, 0)` :
      animation === 'scale' ? 'scale(0.95)' :
      animation === 'zoom' ? 'scale(0.85)' :
      animation === 'bounce' ? 'translateY(20px)' :
      'translate3d(0, 0, 0)';
    
    currentElement.style.transform = initialTransform;
    currentElement.style.opacity = animation === 'none' ? '1' : '0';
    currentElement.style.transition = `transform ${duration}ms cubic-bezier(0.17, 0.55, 0.55, 1.0) ${delay}ms, opacity ${duration}ms cubic-bezier(0.17, 0.55, 0.55, 1.0) ${delay}ms`;
    
    // Setup observer with reduced rootMargin to trigger earlier
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (!once || !hasAnimated.current)) {
          // Apply different transform for bounce animation
          if (animation === 'bounce') {
            currentElement.style.transform = 'translateY(0)';
            currentElement.style.transition = `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`;
            
            // Add a little bounce
            setTimeout(() => {
              currentElement.style.transform = 'translateY(-10px)';
              setTimeout(() => {
                currentElement.style.transform = 'translateY(0)';
              }, 200);
            }, duration + delay);
          } else {
            currentElement.style.transform = 'translate3d(0, 0, 0) scale(1)';
          }
          
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
    }, { 
      threshold,
      rootMargin: '0px 0px -10% 0px' // Trigger earlier before element is fully in view
    });
    
    observer.observe(currentElement);
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, delay, threshold, once, speed, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}