import mainimage from '../assets/background3.jpg';
import mainvideo from '../assets/mainvideo.gif';
import video from '../assets/IMG_0070.MP4';
import planet from '../assets/planet.png';
import linkedIn from '../assets/linkedIn.png';
import github from '../assets/github.png';

import React from 'react';
import ReactPlayer from 'react-player';

import gsap from 'gsap';

const First = ({ onMouseHover, onMouseHoverOut }) => {
  // const moveButton = (button, deltaX, deltaY) => {
  //   gsap.to(button, {
  //     x: deltaX,
  //     y: deltaY,
  //     duration: 0.3,
  //     ease: 'power2.out',
  //   });
  // };

  // React.useEffect(() => {
  //   const buttons = document.querySelectorAll('.animated-button');

  //   buttons.forEach((button) => {
  //     button.addEventListener('mousemove', (e) => {
  //       const rect = e.target.getBoundingClientRect();
  //       const centerX = rect.left + rect.width / 2;
  //       const centerY = rect.top + rect.height / 2;
  //       const coursorX = e.clientX;
  //       const coursorY = e.clientY;

  //       let deltaX = centerX;
  //       let deltaY = centerY;

  //       if (coursorX > centerX) {
  //         deltaX = deltaX + 10;
  //       } else if (coursorX < centerX) {
  //         deltaX = deltaX - 10;
  //       }

  //       if (coursorY > centerY) {
  //         deltaY = deltaY + 10;
  //       } else if (coursorY < centerY) {
  //         deltaY = deltaY - 10;
  //       }

  //       const readyX = deltaX - centerX;
  //       const readyY = deltaY - centerY;

  //       console.log(readyX, readyY);

  //       moveButton(button, readyX, readyY);
  //     });
  //     button.addEventListener('mouseleave', () => {
  //       moveButton(button, 0, 0);
  //     });
  //   });
  // }, []);

  return (
    <div className="first">
      {/* <img className="first__background" src={mainimage} alt="Main" /> */}

      {/* <video autoplay muted loop className="first__video">
        <source src={mainvideo} type="video/gif"></source>
      </video> */}

      {/* <div>
      <img src={mainvideo} className="first__video" alt="Backgroundvideo" />
      </div> */}

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
            src={linkedIn}
            alt="LinkedIn"
          />
          <img
            className="github_icon"
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseHoverOut}
            src={github}
            alt="GitHub"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
