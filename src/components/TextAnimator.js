import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TextAnimator = ({ text, animationType, binaryColor = 'green' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const elements = Array.from(container.querySelectorAll('span'));

    // Set up the IntersectionObserver to trigger the animation when the element is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Clear previous animations and set the initial state
          gsap.set(elements, { opacity: 0 });

          const tl = gsap.timeline({ delay: 0.2 });

          elements.forEach((element, index) => {
            const finalChar = element.innerHTML;

            if (animationType === 'matrix') {
              tl.to(
                element,
                {
                  opacity: 1,
                  color: binaryColor, // Set color for the binary digits
                  onUpdate: () => {
                    element.innerHTML = Math.random() > 0.5 ? '0' : '1';
                  },
                  duration: 0.5,
                  ease: 'none',

                  onComplete: () => {
                    element.style.color = ''; // Reset color to default after animation
                    element.innerHTML = finalChar;
                  }
                },
                index * 0.1
              );
            } else {
              tl.fromTo(
                element,
                { opacity: 0 },
                { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1 },
                index * 0.1
              );
            }
          });

          observer.unobserve(container); // Stop observing once the animation has played
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(container);

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [animationType, binaryColor]);

  // Function to render each character as a separate span
  const renderChar = (char, index) => (
    <span
      key={index}
      style={{
        display: 'inline-block',
        margin: '0',
        padding: '0',
        width: char === ' ' ? '0.5em' : 'auto',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );

  return (
    <div ref={containerRef} style={{ display: 'inline-block', textAlign: 'center' }}>
      {text.split('').map(renderChar)}
    </div>
  );
};

export default TextAnimator;
