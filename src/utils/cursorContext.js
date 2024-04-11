import React, { createContext, useContext } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  return useContext(CursorContext);
};

export const CursorProvider = ({ children }) => {
  const cursorFunctions = {
    onMouseHover: () => {
      const $bigBall = document.querySelector('.cursor__ball--big');
      const $smallBall = document.querySelector('.cursor__ball--small');
      $bigBall.classList.add('hovered');
      $smallBall.classList.add('hovered');
    },
    onMouseHoverOut: () => {
      const $bigBall = document.querySelector('.cursor__ball--big');
      const $smallBall = document.querySelector('.cursor__ball--small');
      $bigBall.classList.remove('hovered');
      $smallBall.classList.remove('hovered');
    },
    onClickCursorAnimation: () => {
      const $bigBall = document.querySelector('.cursor__ball--big');
      const $smallBall = document.querySelector('.cursor__ball--small');
      $bigBall.classList.add('clicked');
      $smallBall.classList.add('clicked');

      setTimeout(() => {
        $bigBall.classList.remove('clicked');
        $smallBall.classList.remove('clicked');
      }, 30);
    },
    onClickCopy: () => {
      const $bigBall = document.querySelector('.cursor__ball--big');
      const $smallBall = document.querySelector('.cursor__ball--small');
      $bigBall.classList.add('copied');
      $smallBall.classList.add('copied');
    },
    onMouseHoverCopy: () => {
      const $bigBall = document.querySelector('.cursor__ball--big');
      const $smallBall = document.querySelector('.cursor__ball--small');
      $bigBall.classList.remove('copied');
      $smallBall.classList.remove('copied');
      $bigBall.classList.add('clicktocopy');
      $smallBall.classList.add('clicktocopy');
    },
    onMouseHoverOutForCopy: () => {
      const $bigBall = document.querySelector('.cursor__ball--big');
      const $smallBall = document.querySelector('.cursor__ball--small');
      $bigBall.classList.remove('copied');
      $smallBall.classList.remove('copied');
      $bigBall.classList.remove('clicktocopy');
      $smallBall.classList.remove('clicktocopy');
    },
  };

  return <CursorContext.Provider value={cursorFunctions}>{children}</CursorContext.Provider>;
};
