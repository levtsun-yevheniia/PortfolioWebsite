import video from '../assets/IMG_0070.MP4';
import planet from '../assets/planet.png';
import linkedIn from '../assets/linkedIn.png';
import github from '../assets/github.png';
import { useCursor } from '../utils/cursorContext';

import React from 'react';

const First = () => {
  const { onMouseHover, onMouseHoverOut, onClickCursorAnimation } = useCursor();
  return (
    <div className="first">
      <video className="first__video" src={video} autoPlay muted loop />

      <div className="first__title">
        <div className="text">
          <p>Hi! My name is Yevheniia Levtsun and I’m</p>
          <h1>WEB DEVELOPER</h1>
        </div>
        <div className="located">
          <div className="located__image">
            <img src={planet} alt="BackgroundPicture" />
          </div>
          <p className="located__text">Located in Montreal, QC, Canada</p>
        </div>
      </div>
      <div className="container">
        <div className="first__links">
          <img
            className="linkedIn_icon"
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseHoverOut}
            onClick={onClickCursorAnimation}
            src={linkedIn}
            alt="LinkedIn"
          />
          <img
            className="github_icon"
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseHoverOut}
            onClick={onClickCursorAnimation}
            src={github}
            alt="GitHub"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
