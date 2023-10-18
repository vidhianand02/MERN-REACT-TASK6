// Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Online Furniture Store</h3>
        <p>
          Developed a full-stack e-commerce website for a furniture store using MERN (MongoDB, Express, React, Node.js) stack. Implemented user authentication, product listings, shopping cart, and payment processing. <a href="link-to-project">View Project</a>
        </p>
      </div>

      <div className="project">
        <h3>Social Media Platform</h3>
        <p>
          Created a social media platform from scratch using MEAN (MongoDB, Express, Angular, Node.js) stack. Implemented features like user profiles, posts, comments, and real-time messaging. <a href="link-to-project">View Project</a>
        </p>
      </div>

      <div className="project">
        <h3>Task Management Application</h3>
        <p>
          Designed and built a task management web application with a responsive front-end using React and a back-end API with Node.js and Express. Users can create, assign, and track tasks. <a href="link-to-project">View Project</a>
        </p>
      </div>

    </section>
  );
}

export default Projects;
