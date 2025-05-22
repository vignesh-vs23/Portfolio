import React, { useState } from 'react';
import './Skills.css';

const skillsData = {
  Frontend: [
    { name: 'React', level: 90, icon: '⚛️', tooltip: 'React JS' },
    { name: 'JavaScript', level: 85, icon: '🟨', tooltip: 'JavaScript ES6+' },
    { name: 'CSS3', level: 80, icon: '🎨', tooltip: 'Cascading Style Sheets' },
    { name: 'HTML5', level: 95, icon: '📄', tooltip: 'HyperText Markup Language' },
    { name: 'Bootstrap', level: 85, icon: '🅱️', tooltip: 'Bootstrap CSS Framework' },
  ],
  Backend: [
    { name: 'Python', level: 80, icon: '🌲', tooltip: 'Python Programming Language' },
    { name: 'Django', level: 75, icon: '🚂', tooltip: 'Django framework' },
    { name: 'MySQL', level: 70, icon: '🍃', tooltip: 'MySQL DataBase' },
    { name: 'RESTful API', level: 85, icon: '🔗', tooltip: 'REST APIs' },
    // { name: 'Firebase', level: 65, icon: '🔥', tooltip: 'Firebase backend' },
    // { name: 'Authentication', level: 75, icon: '🔒', tooltip: 'JWT/Auth' }
  ],
  Tools: [
    { name: 'Git & GitHub', level: 90, icon: '🐙', tooltip: 'Version control' },
    { name: 'Command Line', level: 85, icon: '💻', tooltip: 'CLI Tools' },
    // { name: 'CI/CD', level: 65, icon: '🔁', tooltip: 'Deployment pipelines' },
    // { name: 'Agile/Scrum', level: 80, icon: '📋', tooltip: 'Project Management' },
    { name: 'VS Code', level: 95, icon: '📝', tooltip: 'Code Editor' },
    { name: 'Responsive Design', level: 85, icon: '📱', tooltip: 'Media Queries' }
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <section className="skills-section container py-5" id="skills">
      <h2 className="text-center mb-4">My Skills</h2>
      <ul className="nav nav-tabs justify-content-center mb-4">
        {Object.keys(skillsData).map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div className="row">
        {skillsData[activeTab].map((skill, index) => (
          <div
            key={index}
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card skill-card text-center" title={skill.tooltip}>
              <div className="card-body">
                <div className="icon mb-2 fs-2">{skill.icon}</div>
                <h5 className="card-title">{skill.name}</h5>
                <div className="progress mt-3">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                  ></div>
                </div>
                <small className="text-muted">{skill.level}%</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-5">
        <a
          href="/path-to-resume.pdf"
          download
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </div> */}
    </section>
  );
};

export default Skills;
