import { useEffect } from 'react';
import gsap from 'gsap';
import React from 'react';

const useAnimatedButtons = () => {
  const moveButton = (button, deltaX, deltaY) => {
    gsap.to(button, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  React.useEffect(() => {
    const buttons = document.querySelectorAll('.btn, .animated-button');

    buttons.forEach((button) => {
      button.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const coursorX = e.clientX;
        const coursorY = e.clientY;

        let deltaX = centerX;
        let deltaY = centerY;

        if (coursorX > centerX) {
          deltaX = deltaX + 6;
        } else if (coursorX < centerX) {
          deltaX = deltaX - 6;
        }

        if (coursorY > centerY) {
          deltaY = deltaY + 6;
        } else if (coursorY < centerY) {
          deltaY = deltaY - 6;
        }

        const readyX = deltaX - centerX;
        const readyY = deltaY - centerY;

        moveButton(button, readyX, readyY);
      });
      button.addEventListener('mouseleave', () => {
        moveButton(button, 0, 0);
      });
    });
  }, []);

  return null;
};

export default useAnimatedButtons;
