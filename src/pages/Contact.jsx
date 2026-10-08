import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("contactMessage", JSON.stringify(formData));

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="page-section">
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="primary-btn">
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="success-message">Message submitted successfully!</p>
      )}
    </section>
  );
};

export default Contact;

//onchange=(e)=>setmessage(e.target.value)
