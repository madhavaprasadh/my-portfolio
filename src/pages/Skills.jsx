import { useState } from "react";

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    {
      name: "HTML",
      level: "Advanced",
    },
    {
      name: "CSS",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      level: "Advanced",
    },
    {
      name: "React",
      level: "Intermediate",
    },
    {
      name: "Node.js",
      level: "Intermediate",
    },
    {
      name: "Express",
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
    },
    {
      name: "Git & GitHub",
      level: "Intermediate",
    },
  ];

  const visibleSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <section className="page-section">
      <h1>My Skills</h1>

      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h2>{skill.name}</h2>

            <p>{skill.level}</p>
          </div>
        ))}
      </div>

      <button className="primary-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default Skills;
