// ScrollReveal.js
import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000); // Apply the delay before setting it to visible
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      className={`${className} transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      ref={sectionRef}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
