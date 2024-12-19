import React from "react";
import "./Skills.css"; // Custom CSS file for additional styling (optional)

const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      percentage: 90,
    },
    {
      name: "CSS",
      percentage: 75,
    },
    {
      name: "JavaScript",
      percentage: 80,
    },
    {
      name: "React",
      percentage: 70,
    },
    {
      name: "Bootstrap",
      percentage: 80,
    },
    {
      name: "Git & GitHub",
      percentage: 75,
    },
  ];

  return (
    <div className="skills-main">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">My Skills</h2>
        <div className="row">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card skill-card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">{skill.name}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.percentage}%` }}
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.percentage}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
