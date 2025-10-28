import React, { useState } from "react";
import "./ApplyForm.css";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    internship: "",
    resume: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Use environment variable if available, otherwise fallback to localhost
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://aaruchudar-workshop-course-internship.onrender.com";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Application submitted successfully!");
        setForm({
          name: "",
          email: "",
          internship: "",
          resume: "",
        });
      } else {
        setMessage("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setMessage("⚠️ Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="apply-section">
      <h1 className="title">Apply for Internships</h1>
      <p className="subtitle">Be a part of Aaruchudar’s internship programs.</p>

      <div className="form-wrapper">
        <div className="form-box show">
          <h2>Internship Application</h2>

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

            <label>Choose Internship</label>
            <select
              name="internship"
              value={form.internship}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Internship --</option>
              <option value="Frontend Developer Intern">
                Frontend Developer Intern
              </option>
              <option value="Design Intern">Design Intern</option>
              <option value="Marketing Intern">Marketing Intern</option>
              <option value="Data Analytics Intern">
                Data Analytics Intern
              </option>
            </select>

            <label>Resume Link (Google Drive / PDF)</label>
            <input
              name="resume"
              value={form.resume}
              onChange={handleChange}
              placeholder="https://drive.google.com/your-resume"
              required
            />

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Submitting..." : "Apply Now"}
            </button>
          </form>

          {message && <p className="response-message">{message}</p>}
        </div>
      </div>
    </section>
  );
}
