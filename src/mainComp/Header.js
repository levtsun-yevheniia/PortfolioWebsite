import useAnimatedButtons from '../utils/useAnimatedButtons';
import { useCursor } from '../utils/cursorContext';
import React from 'react';

const Header = () => {
  const { onMouseHover, onMouseHoverOut, onClickCursorAnimation } = useCursor();
  useAnimatedButtons();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop + 50; // Настройте значение по вашему желанию
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="menu" id="menu">
          <div className="menu__options">
            <ul>
              <li onMouseEnter={onMouseHover} onMouseLeave={onMouseHoverOut}>
                <a
                  onClick={() => {
                    scrollToSection('about');
                    onClickCursorAnimation();
                  }}
                >
                  About me
                </a>
              </li>
              <li onMouseEnter={onMouseHover} onMouseLeave={onMouseHoverOut}>
                <a
                  onClick={() => {
                    scrollToSection('projects');
                    onClickCursorAnimation();
                  }}
                >
                  Projects
                </a>
              </li>
              <li onMouseEnter={onMouseHover} onMouseLeave={onMouseHoverOut}>
                <a
                  onClick={() => {
                    scrollToSection('skills');
                    onClickCursorAnimation();
                  }}
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>
          <div className="menu__btn">
            <button
              className="btn btn--first"
              onMouseEnter={onMouseHover}
              onMouseLeave={onMouseHoverOut}
            >
              <a
                onClick={() => {
                  scrollToSection('contact');
                  onClickCursorAnimation();
                }}
              >
                Contact me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
