



import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic here

    // Check if the password meets the criteria
    if (!isValidPassword(formData.password)) {
      setErrors({ password: "Password does not meet the criteria" });
      return;
    }

    // Check if the passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    // Registration logic here (send data to API, etc.)
    // If successful, set success to true
    setSuccess(true);
  };

  const isValidPassword = (password) => {
    // Password validation criteria
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <h1>Registration</h1>
      {success ? (
        <p>Registration successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              pattern="^\S+$"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {errors.password && <p>{errors.password}</p>}
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default Register;
