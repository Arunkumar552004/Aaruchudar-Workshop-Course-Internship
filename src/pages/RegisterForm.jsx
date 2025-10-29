import React, { useState } from "react";
import "./RegisterForm.css"; // Make sure CSS exists

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Use Render backend or fallback to localhost for local testing
  const API_URL =
    import.meta.env.VITE_API_URL?.trim() ||
    "https://aaruchudar-workshop-course-internship.onrender.com";

  // ✅ Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // ✅ fixed variable name
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Registration Successful!");
        setForm({ name: "", email: "", course: "", phone: "" });
      } else {
        setMessage("❌ Registration Failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      setMessage("⚠️ Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-section">
      <h1 className="title">Register for a Course</h1>
      <p className="subtitle">
        Be part of Aaruchudar’s premium learning experience.
      </p>

      <div className="form-wrapper">
        <div className="form-box show">
          <h2>Course Registration</h2>

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

            <label>Choose Course</label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Course --</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="AI & Data Science">AI & Data Science</option>
              <option value="Cloud Computing">Cloud Computing</option>
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
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>

          {message && <p className="form-message">{message}</p>}
        </div>
      </div>
    </section>
  );
}
