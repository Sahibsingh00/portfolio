import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SvgAnimation = ({ onComplete }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const boltPath = svgRef.current.querySelector('#bolt-path');
    const boltRect = svgRef.current.querySelector('#bolt-rect');

    gsap.set(boltPath, { strokeDasharray: boltPath.getTotalLength(), strokeDashoffset: boltPath.getTotalLength() });
    gsap.set(boltRect, { scaleY: 0, transformOrigin: "center bottom" });

    const timeline = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    timeline
      .to(boltPath, { strokeDashoffset: 0, duration: 0.75, ease: "power2.inOut" })
      .to(boltRect, { scaleY: 1, duration: 0.75, ease: "power2.inOut" }, "-=0.5");

  }, [onComplete]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 134 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '1em', height: '1em', display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path id="bolt-path" fillRule="evenodd" clipRule="evenodd" d="M101.08 11C102.439 11 103.402 12.3264 102.982 13.6187L78.6746 88.3335C78.2542 89.6259 79.2175 90.9522 80.5765 90.9522H108.983C110.634 90.9522 111.574 92.8401 110.579 94.1577L10.2304 227L39.4408 125.708C39.8095 124.429 38.8499 123.154 37.5191 123.154H7.82733C6.44727 123.154 5.48193 121.789 5.94147 120.488L44.1353 12.334C44.4176 11.5346 45.1733 11 46.0211 11H101.08Z" stroke="#0AE448" strokeWidth="4"></path>
      <mask id="mask0_1413_68143" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="134" height="227">
        <rect id="bolt-rect" width="134" height="227" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1413_68143)">
        <path fillRule="evenodd" clipRule="evenodd" d="M102.08 10C103.439 10 104.402 11.3264 103.982 12.6187L79.6746 87.3335C79.2542 88.6259 80.2175 89.9522 81.5765 89.9522H109.983C111.634 89.9522 112.574 91.8401 111.579 93.1577L11.2304 226L40.4408 124.708C40.8095 123.429 39.8499 122.154 38.5191 122.154H8.82733C7.44727 122.154 6.48193 120.789 6.94147 119.488L45.1353 11.334C45.4176 10.5346 46.1733 10 47.0211 10H102.08Z" fill="#0AE448"></path>
      </g>
    </svg>
  );
};

export default SvgAnimation;