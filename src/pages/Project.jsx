import { useState } from "react";
import Projectcard from "../components/Projectcard";

const Project = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Sentithink",
      category: "MERN",
      description:
        "A speech sentiment analysis platform that analyzes audio and displays sentiment results.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
    },

    {
      title: "Portfolio Website",
      category: "React",
      description:
        "A responsive personal portfolio built using React and plain CSS.",
      technologies: ["React", "CSS", "React Router"],
      github: "#",
    },

    {
      title: "Contact Manager",
      category: "React",
      description: "A contact management application with CRUD operations.",
      technologies: ["React", "JavaScript", "LocalStorage"],
      github: "#",
    },

    {
      title: "AI Startup Mentor",
      category: "AI",
      description:
        "An AI-based platform that helps users develop and validate startup ideas.",
      technologies: ["React", "Node.js", "Python", "LLM"],
      github: "#",
    },
  ];

  const categories = ["All", "React", "MERN", "AI"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="page-section">
      <h1>My Projects</h1>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={filter === category ? "filter active" : "filter"}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <Projectcard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
