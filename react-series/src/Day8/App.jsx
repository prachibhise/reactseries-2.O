import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    about: "",
  });

  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");

  const skillList = ["HTML", "CSS", "JavaScript", "React"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSkillChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.position === ""
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");

    alert("Application Submitted Successfully!");

  
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      about: "",
    });

    setSkills([]);
  };

  return (
    <div className="container">


      <div className="form-box">

        <h1>Job Portal</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">Select Position</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
          </select>

          <textarea
            name="about"
            rows="4"
            placeholder="About Yourself"
            value={formData.about}
            onChange={handleChange}
          ></textarea>

          <h3>Select Skills</h3>

          {skillList.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={skills.includes(skill)}
                onChange={handleSkillChange}
              />
              {skill}
            </label>
          ))}

          {error && <p className="error">{error}</p>}

          <button type="submit">
            Apply Now
          </button>

        </form>

      </div>


      <div className="preview">

        <h2>Live Preview</h2>

        <p>
          <strong>Name:</strong> {formData.name}
        </p>

        <p>
          <strong>Email:</strong> {formData.email}
        </p>

        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>

        <p>
          <strong>Position:</strong> {formData.position}
        </p>

        <p>
          <strong>Skills:</strong> {skills.join(", ")}
        </p>

        <p>
          <strong>About:</strong> {formData.about}
        </p>

      </div>

    </div>
  );
}

export default App;