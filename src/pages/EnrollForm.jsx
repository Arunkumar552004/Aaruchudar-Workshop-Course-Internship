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
  const [loading, setLoading] = useState(false);

  // ✅ Safely get backend URL (works both locally & on Render)
  const API_URL =
    (import.meta.env.VITE_API_URL?.replace(/\/+$/, "")) ||
    "https://aaruchudar-workshop-course-internship.onrender.com";

  // ✅ Handle input change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(`${API_URL}/api/enroll`, form);

      if (res.data.success) {
        setMessage("🎉 Enrollment Successful!");
        setForm({
          name: "",
          email: "",
          workshop: "",
          phone: "",
        });
      } else {
        setMessage("⚠️ Enrollment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting enrollment:", error);
      setMessage("❌ Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="apply-section">
      <h1 className="title">Enroll for Courses</h1>
      <p className="subtitle">
        Join Aaruchudar’s specialized learning programs.
      </p>

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
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Submitting..." : "Enroll Now"}
            </button>
          </form>

          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </section>
  );
}
