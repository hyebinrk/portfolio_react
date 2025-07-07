import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>SKILLS</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>TOOL</h3>
          <div className="icon-list">
            <div className="icon-item">
              <img src="img/vscode.png" alt="VSCode" />
              <span>VScode</span>
            </div>
            <div className="icon-item">
              <img src="img/docker.png" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="icon-item">
              <img src="img/github.png" alt="GitHub" />
              <span>GitHub</span>
            </div>
            <div className="icon-item">
              <img src="img/DBeaver.png" alt="DBeaver" />
              <span>DBeaver</span>
            </div>
          </div>
        </div>
        <div className="skill-category">
          <h3>LANGUAGE</h3>
          <div className="icon-list">
            <div className="icon-item">
              <img src="img/python.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className="icon-item">
              <img src="img/java.png" alt="Java" />
              <span>Java</span>
            </div>
            <div className="icon-item">
              <img src="img/react.png" alt="React" />
              <span>React</span>
            </div>
            <div className="icon-item">
              <img src="img/css.png" alt="CSS" />
              <span>CSS</span>
            </div>
            <div className="icon-item">
              <img src="img/sql.png" alt="SQL" />
              <span>SQL</span>
            </div>
          </div>
        </div>
        <div className="skill-category">
          <h3>ETC</h3>
          <div className="icon-list">
            <div className="icon-item">
              <img src="img/qt.png" alt="Qt Designer" />
              <span>Qt Designer</span>
            </div>
            <div className="icon-item">
              <img src="img/spring boot.png" alt="Spring Boot" />
              <span>Spring Boot</span>
            </div>
            <div className="icon-item">
              <img src="img/oracle.png" alt="Oracle" />
              <span>Oracle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
