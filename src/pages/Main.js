import Header from './../mainComp/Header';
import First from './../mainComp/First';
import AboutMe from '../mainComp/AboutMe';
import Skills from '../mainComp/Skills';
import Projects from '../mainComp/Projects';
import SourceCode from '../mainComp/SourceCode';
import Contact from '../mainComp/Contact';

import gsap from 'gsap';

import React from 'react';

const Main = () => {
  //   const $bigBall = document.querySelector('.cursor__ball--big');
  //   const $smallBall = document.querySelector('.cursor__ball--small');
  //   $bigBall.classList.add('hovered');
  //   $smallBall.classList.add('hovered');
  // };

  // const onMouseHoverOut = () => {
  //   const $bigBall = document.querySelector('.cursor__ball--big');
  //   const $smallBall = document.querySelector('.cursor__ball--small');
  //   $bigBall.classList.remove('hovered');
  //   $smallBall.classList.remove('hovered');
  // };

  // React.useEffect(() => {
  //   const $bigBall = document.querySelector('.cursor__ball--big');
  //   const $smallBall = document.querySelector('.cursor__ball--small');
  //   const $hoverables = document.querySelectorAll('.hoverable');

  //   let mouseX = 0;
  //   let mouseY = 0;

  //   function onMouseMove(e) {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //     gsap.to($bigBall, { duration: 0.4, x: mouseX - 15, y: mouseY - 15 });
  //     gsap.to($smallBall, { duration: 0.1, x: mouseX - 5, y: mouseY - 7 });
  //   }

  //   window.addEventListener('mousemove', onMouseMove);

  //   for (let i = 0; i < $hoverables.length; i++) {
  //     $hoverables[i].addEventListener('mouseenter', onMouseHover);
  //     $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  //   }

  //   return () => {
  //     document.body.removeEventListener('mousemove', onMouseMove);
  //     for (let i = 0; i < $hoverables.length; i++) {
  //       $hoverables[i].removeEventListener('mouseenter', onMouseHover);
  //       $hoverables[i].removeEventListener('mouseleave', onMouseHoverOut);
  //     }
  //   };
  // }, []);

  const onMouseHover = () => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    $bigBall.classList.add('hovered');
    $smallBall.classList.add('hovered');
  };

  const onMouseHoverOut = () => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    $bigBall.classList.remove('hovered');
    $smallBall.classList.remove('hovered');
  };

  const onClickCopy = () => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    $bigBall.classList.add('copied');
    $smallBall.classList.add('copied');
    console.log('click');
  };

  const onMouseHoverCopy = () => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    $bigBall.classList.remove('copied');
    $smallBall.classList.remove('copied');
    $bigBall.classList.add('clicktocopy');
    $smallBall.classList.add('clicktocopy');
    console.log('hover');
  };

  const onMouseHoverOutForCopy = () => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    $bigBall.classList.remove('copied');
    $smallBall.classList.remove('copied');
    $bigBall.classList.remove('clicktocopy');
    $smallBall.classList.remove('clicktocopy');
    console.log('remove');
  };

  React.useEffect(() => {
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

  return (
    <div className="main_container">
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
      <Header onMouseHover={onMouseHover} onMouseHoverOut={onMouseHoverOut} />
      <First onMouseHover={onMouseHover} onMouseHoverOut={onMouseHoverOut} />
      <AboutMe />
      <Skills onMouseHover={onMouseHover} onMouseHoverOut={onMouseHoverOut} />
      <Projects onMouseHover={onMouseHover} onMouseHoverOut={onMouseHoverOut} />
      <SourceCode onMouseHover={onMouseHover} onMouseHoverOut={onMouseHoverOut} />
      <Contact
        onMouseHover={onMouseHover}
        onMouseHoverOut={onMouseHoverOut}
        onClickCopy={onClickCopy}
        onMouseHoverOutForCopy={onMouseHoverOutForCopy}
        onMouseHoverCopy={onMouseHoverCopy}
      />
    </div>
  );
};

export default Main;
