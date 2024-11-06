"use client";

import { useEffect } from 'react';
import './MouseEffect.css';

const MouseEffect: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glitter = document.createElement('div');
      glitter.className = 'glitter-trail';
      glitter.style.top = `${e.clientY}px`;
      glitter.style.left = `${e.clientX}px`;
      document.body.appendChild(glitter);

      setTimeout(() => {
        glitter.remove();
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default MouseEffect;
