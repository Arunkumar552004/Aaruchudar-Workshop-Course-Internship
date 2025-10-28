import React from "react";
import  { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const internships = [
  {
    id: "i1",
    role: "Frontend Developer Intern",
    duration: "3 months",
    stipend: "₹ 6,000 / month",
    seats: 2,
    responsibilities: [
      "Build UI features",
      "Work with designers",
      "Write tests",
    ],
    eligibility: [
      "Pursuing CS or related",
      "Familiar with React",
      "Good communication",
    ],
  },
  {
    id: "i2",
    role: "Design Intern",
    duration: "2 months",
    stipend: "Unpaid",
    seats: 1,
    responsibilities: ["Create prototypes", "Assist in user research"],
    eligibility: ["Portfolio required", "Basic Figma skills"],
  },
];

export default function Internship() {

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <Loader pageName="Internship" />;

  return (
    <section className="apply-section">
      <h1 className="title">Internships</h1>
      <p className="subtitle">
        Open positions available for students and freshers.
      </p>

      <div className="internship-container">
        {internships.map((i) => (
          <div key={i.id} className="course-card">
            <h3>{i.role}</h3>
            <p className="course-info">
              Duration: {i.duration} | Stipend: {i.stipend}
            </p>
            <p className="course-info">Seats: {i.seats}</p>

            <button
              className="btn"
              onClick={() => (window.location.href = "/apply")}
            >
              Apply
            </button>

            <div className="syllabus">
              <h4>Responsibilities</h4>
              <ul>
                {i.responsibilities.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="syllabus">
              <h4>Eligibility</h4>
              <ul>
                {i.eligibility.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
