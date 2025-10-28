import React, { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 👇 Automatically uses environment variable or Render URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://aaruchudar-workshop-course-internship.onrender.com";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("✅ Registration Successful!");
        setForm({ name: "", email: "", course: "", phone: "" });
      } else {
        setMessage("❌ Registration Failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Server error. Please try later.");
    }

    setLoading(false);
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
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="AI & Data Science">AI & Data Science</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>

            <label>Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Submitting..." : "Register"}
            </button>

            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
