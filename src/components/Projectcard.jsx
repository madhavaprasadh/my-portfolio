const Projectcard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Projectcard;
