import { useState } from "react"; // ✅ NO CSS import

const Approval = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    project: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div style={styles.formContainer}>
      {/* <h2 style={styles.heading}>Design Approval Form</h2> */}
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroupRow}>
          <div style={styles.inputGroup}>
            {/* <label>First Name</label> */}
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            {/* <label>Last Name</label> */}
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          {/* <label>Email</label> */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          {/* <label>Phone</label> */}
          <input
            type="tel"
            name="phone"
            placeholder="### ### ####"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          {/* <label>Project Name</label> */}
          <input
            type="text"
            name="project"
            placeholder="Project Name"
            value={formData.project}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          {/* <label>Project Description</label> */}
          <textarea
            name="description"
            placeholder="Describe the project..."
            value={formData.description}
            onChange={handleChange}
            required
            style={{ ...styles.input, height: "100px", resize: "vertical" }}
          ></textarea>
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Inline CSS styles
const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    height: "100vh", // Fullscreen height
    width: "100vw", // Fullscreen width
    background: "#f0f2f5", // Background color
    padding: "30px", // Padding around the form
  },
  heading: {
   
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  formGroupRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "15px",
  },
  inputGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginTop: "5px",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default Approval;
