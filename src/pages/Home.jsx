import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <p className="greeting">{greeting}</p>

        <h1>
          I'm <span>Madhav</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build modern, responsive and user-friendly web applications using
          React, Node.js, Express and MongoDB.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="primary-btn">
            View My Work
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
