import { useEffect, useState } from "react";

const Dashboard = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const savedMessage = localStorage.getItem("contactMessage");

    if (savedMessage) {
      setMessage(JSON.parse(savedMessage));
    }
  }, []);

  return (
    <section className="page-section">
      <h1>Dashboard</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Projects</h2>

          <p>4</p>
        </div>

        <div className="dashboard-card">
          <h2>Skills</h2>

          <p>8+</p>
        </div>

        <div className="dashboard-card">
          <h2>Experience</h2>

          <p>1+</p>
        </div>
      </div>

      <div className="message-box">
        <h2>Latest Contact Message</h2>

        {message ? (
          <>
            <p>
              <strong>Name:</strong> {message.name}
            </p>

            <p>
              <strong>Email:</strong> {message.email}
            </p>

            <p>
              <strong>Message:</strong> {message.message}
            </p>
          </>
        ) : (
          <p>No messages submitted yet.</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
