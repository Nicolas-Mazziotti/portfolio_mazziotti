import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHtml5, faCss3, faJava, faReact, faNode,} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";

import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="skills-container">
      <div className="skills-title-container">
        <h1 data-aos="fade-up" data-aos-duration="1000">SKILLS</h1>
        <div data-aos="fade-up" data-aos-duration="1000"></div>
      </div>
      <div className="skills-icons" data-aos="fade-up">
        <div className="skills-icon-container" data-aos="fade-up" /*data-aos-duration="2000"*/ data-aos-offset="100">
          <FontAwesomeIcon icon={faHtml5} />
          <h3>HTML5</h3>
        </div>
        <div className="skills-icon-container" data-aos="fade-up" /*data-aos-duration="3000"*/ data-aos-offset="150">
          <FontAwesomeIcon icon={faCss3} />
          <h3>CSS3</h3>
        </div>
        <div className="skills-icon-container" data-aos="fade-up" /*data-aos-duration="4000"*/ data-aos-offset="200">
          <FontAwesomeIcon icon={faJava} />
          <h3>Javascript</h3>
        </div>
        <div className="skills-icon-container" data-aos="fade-up" /*data-aos-duration="5000"*/ data-aos-offset="250">
          <FontAwesomeIcon icon={faReact} />
          <h3>React</h3>
        </div>
        <div className="skills-icon-container" data-aos="fade-up" /*data-aos-duration="6000"*/ data-aos-offset="300">
          <FontAwesomeIcon icon={faNode} />
          <h3>Node.js</h3>
        </div>
      </div>      
    </div>
  );
};

export default Skills;
