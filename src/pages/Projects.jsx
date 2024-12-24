import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website developed using React and Bootstrap. It showcases my skills, projects, and provides a brief introduction about myself as a Frontend Developer.",
      keyFeatures:
        "Clean, user-friendly design, responsive layout, easy navigation",
      technologiesUsed: "React, Bootstrap, CSS, JavaScript.",
      liveDemoLink: "https://portfoliowebsite-app.netlify.app/",
      gitHubLink: "https://github.com/Ashwin-Satasiya/portfolio-website",
    },
    {
      title: "To-Do List App",
      description:
        "A task management app built with React JS, allowing users to add, edit, delete, and mark tasks as complete. It uses local storage for data persistence and is styled with Bootstrap for a responsive design.",
      keyFeatures:
        "Task management (add, edit, delete, complete), local storage integration, and responsive design.",
      technologiesUsed: "React JS, Bootstrap, Local Storage, JavaScript, CSS.",
      liveDemoLink: "https://to-do-crud-app.netlify.app/",
      gitHubLink: "https://github.com/Ashwin-Satasiya/todo-app",
    },
    {
      title: "Weather Information App",
      description:
        "A beginner-friendly weather app that provides real-time weather updates for any city.It fetches data using the OpenWeather API and displays temperature, humidity, wind speed, and weather descriptions with an intuitive user interface.",
      keyFeatures:
        "Real-Time Data, Responsive Design, Reset Functionality, Loading Indicator",
      technologiesUsed:
        "React JS, Context API, Bootstrap, CSS, Axios, OpenWeather API",
      liveDemoLink: "https://weather-web-app111.netlify.app/",
      gitHubLink: "https://github.com/Ashwin-Satasiya/weather-app.git",
    },
    {
      title: "Contact Management",
      description:
        "Contact Management application where user can manage contacts (Add, Edit, & Delete).",
      keyFeatures: "Pending",
      technologiesUsed: "Pending",
      liveDemoLink: "https://contact-management-123.netlify.app/",
      gitHubLink: "https://github.com/Ashwin-Satasiya/contact-management.git",
    },
  ];

  return (
    <div className="projects-main">
      <div className="container px-0">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row project-main-row justify-content-center">
          {projectData.length > 0 &&
            projectData.map((project) => (
              <div className="col-md-5 col-lg-4 d-flex justify-content-center px-0">
                <div className="card card-main-projects">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <p>
                      <strong>Key Features:</strong> {project.keyFeatures}
                    </p>
                    <p>
                      <strong>Technologies Used:</strong>{" "}
                      {project.technologiesUsed}
                    </p>
                    <div className="d-flex gap-3">
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        className="btn btn-secondary"
                      >
                        GitHub
                      </a>
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

export default Projects;
