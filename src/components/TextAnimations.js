import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TextAnimations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const elements = Array.from(container.querySelectorAll('span, svg'));

    gsap.set(elements, { opacity: 0 });

    const tl = gsap.timeline({ delay: .5 });

    const animateElement = (element, index) => {
      if (element.tagName.toLowerCase() === 'svg') {
        const boltPath = element.querySelector('#bolt-path');
        const clipRect = element.querySelector('#clip-rect');
        const textI = element.nextElementSibling;

        gsap.set(boltPath, { strokeDasharray: boltPath.getTotalLength(), strokeDashoffset: boltPath.getTotalLength() });
        gsap.set(clipRect, { y: '100%' });
        gsap.set(textI, { x: '-30%' ,opacity: 0 });

        tl.set(element, { opacity: 1 }, index * 0.1)
          .to(boltPath, { strokeDashoffset: 0, duration: .5, ease: 'power2.inOut' })
          .to(clipRect, { y: '0%', duration: .5, ease: 'power2.inOut', onUpdate: () => gsap.set(boltPath, { fill: '#0AE448' }) }, '-=0.7')
          .to(element, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)' })
          .to(textI, { x: '0%' , opacity: 1, delay: .3 , duration: 0.6, ease: 'power2.out' }, '-=0.25');
      } else if (element.classList.contains('text-i')) {
        // Skip the 'I' text element as it's handled in the SVG animation
        return;
      } else {
        const animations = [
          { x: -200, opacity: 0, ease: 'bounce.out'},
          { y: -50, rotation: -15 },
          { rotationZ: 360, scale: 2, opacity: 0, ease: 'elastic.out(1, 0.5)', duration: 1.5 },
          { y: 90, rotation: -15 },
          { rotationY: 90, skewX: -45, transformOrigin: 'right', opacity: 0, ease: 'power2.out', duration: 1 },
          { scale: 2, rotation: -360 },
          { y: -40, x: 40, rotation: 45 },
          { y: 40, x: -40, rotation: -45 },
          { scale: 1.6, y: 20, rotation: 180 },
          { scale: 2.4, x: -20, rotation: -180 }
        ];
        
        const animation = animations[index % animations.length];
        
        tl.fromTo(element,
          { opacity: 0, ...animation },
          { opacity: 1, x: 0, y: 0, rotation: 0, delay: .5 , scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
          index * 0.1
        );
      }
    };

    elements.forEach(animateElement);
  }, []);

  const renderChar = (char, index, word) => {
    if (char === 'I') {
      return (
        <span key={`${word}-${index}`} style={{ display: 'inline-block', position: 'relative',  margin: '0 4px' }}>
          <svg viewBox="0 0 134 229" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <defs>
              <clipPath id={`clip-path-${word}-${index}`}>
                <rect id="clip-rect" x="0" y="0" width="134" height="227" fill="white"/>
              </clipPath>
            </defs>
            <path id="bolt-path" d="M101.08 11C102.439 11 103.402 12.3264 102.982 13.6187L78.6746 88.3335C78.2542 89.6259 79.2175 90.9522 80.5765 90.9522H108.983C110.634 90.9522 111.574 92.8401 110.579 94.1577L10.2304 227L39.4408 125.708C39.8095 124.429 38.8499 123.154 37.5191 123.154H7.82733C6.44727 123.154 5.48193 121.789 5.94147 120.488L44.1353 12.334C44.4176 11.5346 45.1733 11 46.0211 11H101.08Z" stroke="#0AE448" strokeWidth="4" fill="transparent" clipPath={`url(#clip-path-${word}-${index})`}/>
          </svg>
          <span className="text-i" style={{ display: 'inline-block' ,position: 'relative', zIndex: 1 }}>I</span>
        </span>
      );
    }
    return (
      <span key={`${word}-${index}`} style={{ display: 'inline-block', margin: '0 2px' }}>
        {char}
      </span>
    );
  };

  return (
    <div ref={containerRef} style={{ display: 'inline-block', textAlign: 'center' }}>
      <div>
        {'SAHIB'.split('').map((char, index) => renderChar(char, index, 'sahib'))}
      </div>
      <div>
        {'SINGH'.split('').map((char, index) => renderChar(char, index, 'singh'))}
      </div>
    </div>
  );
};

export default TextAnimations;