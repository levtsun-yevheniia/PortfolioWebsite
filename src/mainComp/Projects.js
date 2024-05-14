import React from 'react';

import gsap from 'gsap';

import arrow from '../assets/arrow.png';
import firstimage from '../assets/first_project3.jpg';
import secondimage from '../assets/portfolioproject.png';
import thirdimage from '../assets/planningproject.jpg';
import lastimage from '../assets/lastproject.jpg';

import firstprojectvideo from '../assets/first_project_video.gif';
import secondprojectvideo from '../assets/SecondProjectVid.gif';
import thirdprojectimage from '../assets/planningproject2.jpg';
import { useCursor } from '../utils/cursorContext';

const Projects = () => {
  const { onMouseHover, onMouseHoverOut, onClickCursorAnimation } = useCursor();

  const [sections, setSections] = React.useState({
    1: { isOpen: false },
    2: { isOpen: false },
    3: { isOpen: false },
    4: { isOpen: false },
  });

  const handleMouseOver = (id) => {
    setSections((prevSections) => ({
      ...prevSections,
      [id]: { isOpen: true },
    }));
  };

  const handleMouseOut = (id) => {
    setSections((prevSections) => ({
      ...prevSections,
      [id]: { isOpen: false },
    }));
  };

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects',
      toggleActions: 'restart none none none',
      ease: 'power1.inOut',
    },
  });

  t1.to('#scroll_btn_block', { x: -50, duration: 2 }).to('#scroll_btn_block', {
    x: 0,
    duration: 1.5,
  });

  return (
    <div className="projects" id="projects">
      <div className="title">
        <div className="heading">
          <p>Projects</p>
        </div>
      </div>
      <div className="content">
        <div className="content__title">
          <p>Take a look at some of my projects</p>
        </div>
        <div className="content__slider">
          <div className="scroll_btn_block" id="scroll_btn_block">
            <img className="arrow" src={arrow} alt="arrow_image"></img>
            <div className="scroll">
              <p>Scroll</p>
            </div>
          </div>
          <div className="items_row">
            <div
              className={`item ${sections[1]?.isOpen ? 'active' : ''}`}
              onMouseOver={() => handleMouseOver(1)}
              onMouseOut={() => handleMouseOut(1)}
            >
              <div className="item-inner">
                <div className="item-inner__front">
                  <img src={firstimage} alt="First project image" />
                  <div className="text">
                    <p className="text__head">WEB APPLICATION</p>
                    <p className="text__title">YOUR STYLISH ONTARIO</p>
                    <p className="text__technologies">
                      React, TypeScript, Context, React Router, Sass & CSS, Design
                    </p>
                  </div>
                </div>
                <div className="item-inner__back">
                  <img src={firstprojectvideo} alt="First project video" />
                  <div className="text">
                    <p className="text__title">About</p>
                    <p className="text__about">
                      Full-fledged React web app for a clothing shop. Browse, filter, and search for
                      items effortlessly. Add to cart, stay updated with client block news, and
                      enjoy seamless navigation.
                    </p>
                  </div>
                  <div className="buttons">
                    <a href="http://yourstylishontario.infinityfreeapp.com" target="_blank">
                      <button
                        className="btn btn--first"
                        onMouseEnter={onMouseHover}
                        onMouseLeave={onMouseHoverOut}
                        onClick={onClickCursorAnimation}
                      >
                        Website
                      </button>
                    </a>
                    <a
                      href="https://github.com/levtsun-yevheniia/React-Clothes-Shop"
                      target="_blank"
                    >
                      <button
                        className="btn btn--first"
                        onMouseEnter={onMouseHover}
                        onMouseLeave={onMouseHoverOut}
                        onClick={onClickCursorAnimation}
                      >
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`item ${sections[2]?.isOpen ? 'active' : ''}`}
              onMouseOver={() => handleMouseOver(2)}
              onMouseOut={() => handleMouseOut(2)}
            >
              <div className="item-inner">
                <div className="item-inner__front">
                  <img src={secondimage} alt="First project image" />
                  <div className="text">
                    <p className="text__head">WEBSITE</p>
                    <p className="text__title">PORTFOLIO</p>
                    <p className="text__technologies">React, JavaScript, SaSS & CSS, Design</p>
                  </div>
                </div>
                <div className="item-inner__back item-inner__back--second">
                  <img src={secondprojectvideo} alt="First project video" />
                  <div className="text">
                    <p className="text__title">About</p>
                    <p className="text__about">
                      A clean, single-page portfolio for a developer, featuring easy access to
                      skills, experience, projects, and contacts. Dark background and light colors
                      for other elements which is a great way to highlight important details.
                    </p>
                  </div>

                  <div className="buttons">
                    <a
                      href="http://yevheniialevtsunwebdeveloper.infinityfreeapp.com"
                      target="_blank"
                    >
                      <button
                        className="btn btn--first"
                        onMouseEnter={onMouseHover}
                        onMouseLeave={onMouseHoverOut}
                        onClick={onClickCursorAnimation}
                      >
                        Website
                      </button>
                    </a>
                    <a href="https://github.com/levtsun-yevheniia/PortfolioWebsite" target="_blank">
                      <button
                        className="btn btn--first"
                        onMouseEnter={onMouseHover}
                        onMouseLeave={onMouseHoverOut}
                        onClick={onClickCursorAnimation}
                      >
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`item ${sections[3]?.isOpen ? 'active' : ''}`}
              onMouseOver={() => handleMouseOver(3)}
              onMouseOut={() => handleMouseOut(3)}
            >
              <div className="item-inner">
                <div className="item-inner__front item-inner__front--third">
                  <img src={thirdimage} alt="First project image" />
                  <div className="text">
                    <p className="text__head">WEBSITE</p>
                    <p className="text__title">INCREASE YOUR PRODUCTIVITY</p>
                    <p className="text__technologies">JavaScript, CSS, HTML</p>
                  </div>
                </div>
                <div className="item-inner__back item-inner__back--third">
                  <img src={thirdprojectimage} alt="First project video" />
                  <div className="text">
                    <p className="text__title">About</p>
                    <p className="text__about">
                      The website serves as an informative platform dedicated to an
                      productivity-boosting application detailing its features and functionalities.
                      It provides users with insights into the app's capabilities.
                    </p>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://github.com/levtsun-yevheniia/Increase-Your-Productivity"
                      target="_blank"
                    >
                      <button
                        className="btn btn--first"
                        onMouseEnter={onMouseHover}
                        onMouseLeave={onMouseHoverOut}
                        onClick={onClickCursorAnimation}
                      >
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`item ${sections[4]?.isOpen ? 'active' : ''}`}
              onMouseOver={() => handleMouseOver(4)}
              onMouseOut={() => handleMouseOut(4)}
            >
              <div className="item-inner">
                <div className="item-inner__front item-inner__front--last">
                  <img src={lastimage} alt="First project image" />
                  <div className="text">
                    <p className="text__title">NEW PROJECTS ARE COMING!</p>
                    <p className="text__technologies">Check out my GitHub to see the process</p>
                  </div>
                </div>
                <div className="item-inner__back item-inner__back--last">
                  <div className="buttons">
                    <a href="https://github.com/levtsun-yevheniia" target="_blank">
                      <button
                        className="btn btn--first"
                        onMouseEnter={onMouseHover}
                        onMouseLeave={onMouseHoverOut}
                        onClick={onClickCursorAnimation}
                      >
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
