import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        <i className="fas fa-home"></i> Welcome to the Student Data Management System
      </h1>
      <p style={styles.description}>
        Manage student data effortlessly with our modern web application.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subheader}>
          <i className="fas fa-info-circle"></i> Overview
        </h2>
        <p>
          This system is built to perform Create, Read, Update, and Delete (CRUD) operations on student data. It ensures a smooth, secure, and efficient workflow, leveraging state-of-the-art technologies.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>
          <i className="fas fa-tools"></i> Technologies Used
        </h2>
        <ul style={styles.list}>
          <li>
            <i className="fab fa-react"></i> <strong>React:</strong> For creating a dynamic and interactive user interface.
          </li>
          <li>
            <i className="fab fa-java"></i> <strong>Spring Boot:</strong> To build a secure and efficient backend REST API.
          </li>
          <li>
            <i className="fas fa-database"></i> <strong>MySQL:</strong> For robust data storage and management.
          </li>
          <li>
            <i className="fas fa-database"></i> <strong>MySQL Workbench:</strong> To visualize and manage database schemas.
          </li>
          <li>
            <i className="fas fa-tools"></i> <strong>Postman:</strong> To test and debug REST APIs efficiently.
          </li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>
          <i className="fas fa-copyright"></i> 2024 Student Data Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#f4f4f4",
    color: "#333",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    color: "#007bff",
  },
  description: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  subheader: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "1rem",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
    borderRadius: "8px",
    marginTop: "20px",
  },
};

export default Home;
