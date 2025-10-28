import React, { useState } from "react";
import axios from "axios";
import "./EnrollForm.css";

export default function EnrollForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    workshop: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  // 👇 Automatically switch between local & deployed backend
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://aaruchudar-workshop-course-internship.onrender.com";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post(`${API_URL}/api/enroll`, form);
      if (res.data.success) {
        setMessage("🎉 Enrollment Successful!");
        setForm({ name: "", email: "", workshop: "", phone: "" });
      } else {
        setMessage("⚠️ Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server Error. Please try again.");
    }
  };

  return (
    <section className="apply-section">
      <h1 className="title">Enroll for Courses</h1>
      <p className="subtitle">Join Aaruchudar’s specialized learning programs.</p>

      <div className="form-wrapper">
        <div className="form-box show">
          <h2>Enrollment Form</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Workshop Name</label>
            <select
              name="workshop"
              value={form.workshop}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Workshop --</option>
              <option value="Empowering Human Intelligence">
                Empowering Human Intelligence
              </option>
              <option value="7-Day Reset: Clarity, Confidence, and Communication">
                7-Day Reset: Clarity, Confidence, and Communication
              </option>
            </select>

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />

            <button type="submit" className="btn">
              Enroll Now
            </button>
          </form>

          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </section>
  );
}
