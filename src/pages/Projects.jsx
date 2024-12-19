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
      gitHubLink: "#",
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
  ];

  return (
    <div className="projects-main">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row gap-3">
          {projectData.length > 0 &&
            projectData.map((project) => (
              <div className="col-md-4">
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
