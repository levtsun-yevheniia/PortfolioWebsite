import me from '../assets/photo.jpg';

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="aboutme" id="about">
      <div className="container">
        <div className="title">
          <div className="heading">
            <p>About me</p>
          </div>
        </div>
        <div className="content" id="content">
          <div className="firstblock" id="firstblock">
            <div className="image">
              <img src={me} alt="Me" />
            </div>
            <div className="text">
              <p>
                I am from <span class="highlight1">Ukraine</span> and obtained my bachelor's degree
                in Software Development in Poland. I enjoy hiking in the{' '}
                <span class="highlight2">mountains</span> with a fun group,{' '}
                <span class="highlight3">knitting</span> and spending time with my{' '}
                <span class="highlight4">dog</span>.
              </p>
            </div>
          </div>
          <div className="secondblock">
            <div className="column">
              <div className="charact charact--first">
                <div className="charact__title">
                  <p>Quick Learner and Adaptive</p>
                </div>
                <div className="charact__text">
                  <p>
                    I possess a remarkable ability to quickly grasp new concepts and adapt to
                    dynamic work environments. With strong time management skills, I efficiently
                    organize my tasks to meet deadlines, ensuring optimal productivity.
                  </p>
                  <p>
                    Additionally, my capacity to work independently allows me to thrive in various
                    situations, taking initiative and delivering results autonomously.
                  </p>
                </div>
              </div>
              <div className="charact charact--second">
                <div className="charact__title">
                  <p>Strategic Problem-Solver</p>
                </div>
                <div className="charact__text">
                  <p>
                    With strong analytical and organizational skills, I approach challenges
                    methodically, breaking them down into manageable tasks and implementing
                    systematic approaches for resolution.{' '}
                  </p>
                  <p>
                    My critical and strategic thinking abilities enable me to tackle obstacles with
                    confidence and precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="charact charact--third">
                <div className="charact__title">
                  <p>Enthusiastic Creator and Coder</p>
                </div>
                <div className="charact__text">
                  <p>
                    My passion for development stems from its unique blend of creative work and
                    logical problem-solving, two aspects I deeply enjoy.
                  </p>
                  <p>
                    {' '}
                    Each coding challenge presents an opportunity to exercise both my imagination
                    and analytical skills, fueling my commitment to delivering exceptional work and
                    making meaningful contributions to every project.
                  </p>
                </div>
              </div>
              <div className="charact charact--forth">
                <div className="charact__title">
                  <p>Unconventional Thinker</p>
                </div>
                <div className="charact__text">
                  <p>
                    As someone who thinks unconventionally, I thrive on approaching problems from
                    unique angles.{' '}
                  </p>
                  <p>
                    {' '}
                    My ability to think outside the box allows me to devise innovative solutions. By
                    embracing unconventional thinking, I aim to bring fresh perspectives and drive
                    impactful outcomes in my work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
