import myphoto from '../assets/contact_photo.png';
import linkedinphoto from '../assets/contact_linkedin.png';

import { useCursor } from '../utils/cursorContext';

const Contact = () => {
  const {
    onClickCopy,
    onMouseHoverOutForCopy,
    onMouseHover,
    onMouseHoverOut,
    onMouseHoverCopy,
    onClickCursorAnimation,
  } = useCursor();

  function copyText(id) {
    var copiedText = document.getElementById(id).innerText;

    // temporary elem
    var tempInput = document.createElement('input');
    tempInput.style.opacity = 0;
    tempInput.value = copiedText;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    console.log('copied' + copiedText);
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="title">
          <div className="heading">
            <p>Contact</p>
          </div>
        </div>
        <div className="block">
          <div className="block__text">
            <p>
              Looking for a dedicated<br></br> and skilled individual to join your team?<br></br>{' '}
              Contact me!
            </p>
          </div>
          <div className="block__photo">
            <img src={myphoto} alt="My photo" />
          </div>
        </div>
        <div className="links">
          <div className="links__linkedIn">
            <a href="https://www.linkedin.com/in/yevheniia-levtsun/" target="_blank">
              <img
                src={linkedinphoto}
                alt="My photo"
                onMouseEnter={onMouseHover}
                onMouseLeave={onMouseHoverOut}
                onClick={onClickCursorAnimation}
              />
            </a>
          </div>
          <div
            class="links__gmail"
            onMouseEnter={onMouseHoverCopy}
            onMouseOut={onMouseHoverOutForCopy}
            onClick={() => {
              copyText('email');
              onClickCopy();
            }}
          >
            <p id="email">levtsun.yevheniia@gmail.com</p>
          </div>
          <div
            className="links__number"
            onMouseEnter={onMouseHoverCopy}
            onMouseOut={onMouseHoverOutForCopy}
            onClick={() => {
              copyText('email');
              onClickCopy();
            }}
          >
            <p id="number">+1 (438)-778-0977</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
