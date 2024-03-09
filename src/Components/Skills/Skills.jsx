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
        <h1 data-aos="fade-up" data-aos-duration="1000">Skills</h1>
        <div data-aos="fade-up" data-aos-duration="1000"></div>
      </div>
      <div className="skills-icons" data-aos="fade-up">
        <div className="skills-icon-container">
          <FontAwesomeIcon icon={faHtml5} />
          <h3>HTML5</h3>
        </div>
        <div className="skills-icon-container">
          <FontAwesomeIcon icon={faCss3} />
          <h3>CSS3</h3>
        </div>
        <div className="skills-icon-container">
          <FontAwesomeIcon icon={faJava} />
          <h3>Javascript</h3>
        </div>
        <div className="skills-icon-container">
          <FontAwesomeIcon icon={faReact} />
          <h3>React</h3>
        </div>
        <div className="skills-icon-container">
          <FontAwesomeIcon icon={faNode} />
          <h3>Node.js</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
