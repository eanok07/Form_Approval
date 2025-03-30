import { useState } from "react";
import "../styles/form.css"; 

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
    <div className="form-container">
      <h2>Design Approval Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group name-group">
          <div>
            <label>Customer Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <br></br>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Customer's Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Customer's Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="### ### ####"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Project</label>
          <input
            type="text"
            name="project"
            placeholder="Project Name"
            value={formData.project}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Project Description</label>
          <textarea
            name="description"
            placeholder="Describe the project..."
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Approval;
