import React from "react";

function App() {
  const pageStyle = {
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
    margin: "0",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "15px 0",
    zIndex: 1000,
    fontWeight: "600",
  };

  const navLinkStyle = {
    color: "#0a66c2",
    textDecoration: "none",
    fontSize: "1rem",
  };

  const headerStyle = {
    backgroundColor: "#0a66c2",
    color: "white",
    padding: "100px 20px 60px 20px", // extra top space to offset nav
    textAlign: "center",
  };

  const sectionStyle = {
    padding: "50px 20px",
    maxWidth: "1000px",
    margin: "auto",
    backgroundColor: "white",
    marginTop: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 12px rgba(0,0,0,0.1)",
  };

  const projectCard = {
    backgroundColor: "#fafafa",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    border: "1px solid #e0e0e0",
  };

  const contactLink = {
    color: "#0a66c2",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const footerStyle = {
    textAlign: "center",
    padding: "30px 10px",
    color: "#666",
    fontSize: "0.9rem",
  };

  return (
    <div style={pageStyle}>
      {/* Navigation */}
      <nav style={navStyle}>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#skills" style={navLinkStyle}>Skills</a>
        <a href="#projects" style={navLinkStyle}>Projects</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
      </nav>

      {/* Hero Section */}
      <header style={headerStyle}>
        <h1>Ranjithkumar S</h1>
        <h3>Software Engineer | Spring Boot | Full Stack Enthusiast</h3>
        <p>Building powerful backend applications and clean frontend interfaces</p>
      </header>

      {/* About */}
      <section id="about" style={sectionStyle}>
        <h2>About Me</h2>
        <p>
          I'm a dedicated Java developer with 2+ years of experience building scalable backend systems,
          REST APIs, and enterprise web apps using Spring Boot and Hibernate. I love solving real-world
          problems with clean and maintainable code.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" style={sectionStyle}>
        <h2>Skills</h2>
        <ul>
          <li>Java, Spring Boot, Hibernate</li>
          <li>REST APIs, JPA, MySQL</li>
          <li>HTML, CSS, JavaScript, React</li>
          <li>Git, Maven, Postman</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" style={sectionStyle}>
        <h2>Projects</h2>

        <div style={projectCard}>
          <h3>🏢 Employee Management System</h3>
          <p>
            A web application to manage employee data using Spring Boot, JPA, and MySQL. Includes CRUD,
            pagination, and filtering.
          </p>
          <a href="https://github.com/your-github/employee-management" style={contactLink}>
            GitHub Repo
          </a>
        </div>

        <div style={projectCard}>
          <h3>🛒 Online Shopping App</h3>
          <p>
            A full-featured shopping platform with login, cart, and payment flow. Backend built in Java,
            frontend in React.
          </p>
          <a href="https://github.com/your-github/online-shop" style={contactLink}>
            GitHub Repo
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={sectionStyle}>
        <h2>Contact</h2>
        <p>Email: ranjith@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/your-profile" style={contactLink}>
            linkedin.com/in/your-profile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/your-github" style={contactLink}>
            github.com/your-github
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        © {new Date().getFullYear()} Ranjith S | Built with ❤️ in React
      </footer>
    </div>
  );
}

export default App;
