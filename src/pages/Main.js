import Header from './../mainComp/Header';
import First from './../mainComp/First';
import AboutMe from '../mainComp/AboutMe';
import Skills from '../mainComp/Skills';
import Projects from '../mainComp/Projects';
import SourceCode from '../mainComp/SourceCode';
import Contact from '../mainComp/Contact';

import { useCursor } from '../utils/cursorContext';

import React from 'react';
import { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';

const Main = () => {
  useEffect(() => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    let mouseX = 0;
    let mouseY = 0;

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to($bigBall, { duration: 0.4, x: mouseX - 15, y: mouseY - 15 });
      gsap.to($smallBall, { duration: 0.1, x: mouseX - 5, y: mouseY - 7 });
    }

    window.addEventListener('mousemove', onMouseMove);

    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].removeEventListener('mouseenter', onMouseHover);
        $hoverables[i].removeEventListener('mouseleave', onMouseHoverOut);
      }
    };
  }, []);

  const comp = useRef(null);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(
        [
          '#title5',
          '#title2',
          '#title1',
          '#title3',
          '#title4',
          '#title6',
          '#title7',
          '#title8',
          '#title9',
          '#title10',
        ],
        {
          opacity: 0,
          y: '-=30',
          stagger: 0.07,
        },
      ).to('#slider', {
        yPercent: '-100',
        duration: 1,
        delay: 0.3,
      });
    }, comp);
    return () => context.revert();
  }, []);

  const { onMouseHover, onMouseHoverOut } = useCursor();

  return (
    <div className="main_container" ref={comp}>
      <div className="loader" id="slider">
        <div className="loading">
          <p id="title1">L</p>
          <p id="title2">o</p>
          <p id="title3">a</p>
          <p id="title4">d</p>
          <p id="title5">i</p>
          <p id="title6">n</p>
          <p id="title7">g</p>
          <p id="title8">.</p>
          <p id="title9">.</p>
          <p id="title10">.</p>
        </div>
      </div>

      <div class="cursor">
        <div class="cursor__ball cursor__ball--big ">
          <svg>
            <circle stroke="white" stroke-width="1"></circle>
          </svg>
          <div class="text">
            Click <br></br> to copy
          </div>
          <div class="text2">Copied</div>
        </div>

        <div class="cursor__ball cursor__ball--small">
          <svg height="22" width="22">
            <circle cx="12" cy="18" r="4" stroke-width="0"></circle>
          </svg>
        </div>
      </div>

      <Header />
      <First />
      <AboutMe />
      <Skills />
      <Projects />
      <SourceCode />
      <Contact />
    </div>
  );
};

export default Main;
