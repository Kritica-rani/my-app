import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState); // setting up the initial state
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
    } else {
      alert("Your form has been submitted succesfully");
      setFormData(initialState);
    }
  };
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target; // geeting the value from event.target
    setFormData({
      ...formData, // spread operator
      [name]: value,
    });
    setError("");
  };

  return (
    <div>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="Password">Password:</label>
            <input
              type="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
