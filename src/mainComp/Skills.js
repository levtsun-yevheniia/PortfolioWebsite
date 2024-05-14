import useAnimatedButtons from '../utils/useAnimatedButtons';
import { useCursor } from '../utils/cursorContext';

import skillsbackgroundimage from '../assets/skills.jpg';
import cv from '../assets/Yevheniia_Levtsun_CV.pdf';

const Skills = () => {
  const { onMouseHover, onMouseHoverOut, onClickCursorAnimation } = useCursor();
  useAnimatedButtons();
  return (
    <div className="skills" id="skills">
      <img className="first__background" src={skillsbackgroundimage} alt="Main" />
      <div className="container">
        <div className="title">
          <div className="heading">
            <p>Skills</p>
          </div>
        </div>
        <div className="skills_block">
          <div className="column column--first">
            <div className="category">
              <div className="title">
                <p>Web Development Stack</p>
              </div>
              <div className="items">
                <div className="row">
                  <div className="item">
                    <p>ReactJS</p>
                  </div>
                  <div className="item">
                    <p>Redux Toolkit</p>
                  </div>
                  <div className="item">
                    <p>React Router</p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <p>TypeScript</p>
                  </div>
                  <div className="item">
                    <p>JavaScript</p>
                  </div>
                  <div className="item">
                    <p>HTML5</p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <p>CSS3</p>
                  </div>
                  <div className="item">
                    <p>SCSS</p>
                  </div>
                  <div className="item">
                    <p>jQuery</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="category">
              <div className="title">
                <p>Backend Development</p>
              </div>
              <div className="items">
                <div className="row">
                  <div className="item item--long">
                    <p>Spring Framework</p>
                  </div>
                  <div className="item">
                    <p>Java</p>
                  </div>
                  <div className="item item--long">
                    <p>REST API design</p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <p>MVC architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column column--second">
            <div className="category">
              <div className="title">
                <p>Database and Server Technologies</p>
              </div>
              <div className="items">
                <div className="row">
                  <div className="item">
                    <p>SQL</p>
                  </div>
                  <div className="item">
                    <p>HTTP principles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="category">
              <div className="title">
                <p>Structure and management</p>
              </div>
              <div className="items">
                <div className="row">
                  <div className="item">
                    <p>Data structures</p>
                  </div>
                  <div className="item item--long">
                    <p>Object Oriented Programming</p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <p>Algorithms</p>
                  </div>
                  <div className="item">
                    <p>Git</p>
                  </div>
                  <div className="item">
                    <p>Microsoft Office suite</p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <p>Web programming concepts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column column--third">
            <div className="category">
              <div className="title">
                <p>Design</p>
              </div>
              <div className="items">
                <div className="row">
                  <div className="item">
                    <p>Photoshop</p>
                  </div>
                  <div className="item">
                    <p>UI/UX</p>
                  </div>
                  <div className="item">
                    <p>Illustrator</p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <p>InDesign</p>
                  </div>
                  <div className="item">
                    <p>Figma</p>
                  </div>
                  <div className="item">
                    <p>Adobe XD</p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <p>Responsive design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="category">
              <div className="title">
                <p>Languages</p>
              </div>
              <div className="items">
                <div className="row">
                  <div className="item">
                    <p>English</p>
                  </div>
                  <div className="item">
                    <p>French</p>
                  </div>
                  <div className="item">
                    <p>Russian</p>
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <p>Ukrainian</p>
                  </div>
                  <div className="item">
                    <p>Polish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button_block">
          <a href={cv} target="_blank">
            <div
              className="btn btn--second"
              onMouseEnter={onMouseHover}
              onMouseLeave={onMouseHoverOut}
              onClick={onClickCursorAnimation}
            >
              View CV
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
