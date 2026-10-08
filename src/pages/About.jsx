const About = () => {
  return (
    <section className="page-section">
      <h1>About Me</h1>

      <div className="about-container">
        <div className="about-text">
          <h2>Who am I?</h2>

          <p>
            I am a passionate IT student interested in Full Stack Web
            Development and Machine Learning.
          </p>

          <p>
            I enjoy building real-world applications and solving programming
            problems.
          </p>

          <p>
            My current focus is improving my skills in React, Node.js, Express,
            MongoDB and cloud technologies.
          </p>
        </div>

        <div className="about-info">
          <div>
            <strong>Education</strong>
            <p>B.Tech Information Technology</p>
          </div>

          <div>
            <strong>Experience</strong>
            <p>Software Development Intern</p>
          </div>

          <div>
            <strong>Specialization</strong>
            <p>Full Stack Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
