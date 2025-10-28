import React from "react";
import  { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const courses = [
  {
    id: "c1",
    title: "Empowering Human Intelligence – 7-Day Online Course",
    duration: "7 days",
    price: "₹ 29,999",
    instructor: "Sanjay Kumar",
    syllabus: [
      "Wake Up the Mind",
      "Think Without Searching",
      "Attention is Power",
      "Intuition and Gut Thinking",
      "Creativity Unplugged",
      "Emotional & Mental Clarity",
      "Build Your Human Intelligence Routine",
    ],
  },
  {
    id: "c2",
    title: "The 7-Day Reset: Clarity, Confidence, and Communication",
    duration: "7 days",
    price: "₹ 14,999",
    instructor: "Priya R",
    syllabus: [
      "Self-Awareness and Values",
      "Purpose Discovery",
      "Emotional Intelligence at Work",
      "Communication Mastery",
      "Personal Branding & Presence",
      "Decision Making & Clarity",
      "Action Blueprint & Reflection",
    ],
  },
  {
    id: "c3",
    title: "30-Day Foundation: Purpose-Driven Professionalism",
    duration: "30 days",
    price: "₹ 14,999",
    instructor: "Priya R",
    syllabus: [
      "Identity and Career Clarity",
      "Value-driven Communication and Soft Skills",
      "LinkedIn, Resume, Interviews (Personal Brand)",
      "Future Visioning and Goal Mapping",
    ],
  },
  {
    id: "c4",
    title: "The 45-Day Career Rewire: Aligning Work with Self",
    duration: "45 days",
    price: "₹ 14,999",
    instructor: "Priya R",
    syllabus: [
      "Module 1: Who Am I Now? – Self-Reflection and Identity",
      "Module 2: Values, Energy & Strengths Mapping",
      "Module 3: Skill Inventory & Passion Crossover",
      "Module 4: Future Roles & the Redesign Canvas",
      "Module 5: Storytelling & Personal Narrative Building",
      "Module 6: Job Strategy / Entrepreneurial Strategy",
    ],
  },
  {
    id: "c5",
    title:
      "Leadership from Within: 21-Day Intensive for Founders & Changemakers",
    duration: "21 days",
    price: "₹ 14,999",
    instructor: "Priya R",
    syllabus: [
      "Module 1: Authentic Leadership and Emotional Intelligence",
      "Module 2: Conscious Culture Building",
      "Module 3: Founder Fatigue & Energy Leadership",
      "Module 4: Vision Alignment & Systems Thinking",
      "Module 5: People Strategy (Hiring & Harmony)",
      "Module 6: Business Values & Ethical Scaling",
    ],
  },
  {
    id: "c6",
    title: "The Aaruchudar Educator Program",
    duration: "30 days",
    price: "₹ 14,999",
    instructor: "Priya R",
    syllabus: [
      "Module 1: Designing Human-Centered Classrooms",
      "Module 2: Inclusive Teaching Practices",
      "Module 3: Feedback Culture & Mentoring Students",
      "Module 4: Future of Education & Institutional Mindsets",
      "Module 5: Innovation & Critical Thinking in Class",
    ],
  },
  {
    id: "c7",
    title: "Institutional Innovation Catalyst",
    duration: "45 days",
    price: "₹ 14,999",
    instructor: "Priya R",
    syllabus: [
      "Module 1: Innovation Mindset and Problem Framing",
      "Module 2: Ideation Labs and Design Thinking",
      "Module 3: Student Startup Journey Design",
      "Module 4: Hackathon Planning & Execution",
      "Module 5: Partnering with Ecosystems (Govt, Incubators)",
      "Module 6: Sustainability & Evaluation",
    ],
  },
  {
    id: "c8",
    title: "Custom Sprint Labs / Retreats",
    duration: "2–5 days",
    price: "₹ 14,999",
    instructor: "Priya R",
    syllabus: [
      "Module 1: Reflective Leadership for Educators",
      "Module 2: Vision Labs for Institutions",
      "Module 3: Founders & Burnout (Well-being)",
      "Module 4: Human Intelligence at Work",
      "Module 5: Clarity Camp for Entrepreneurs",
    ],
  },
];

export default function Course() {

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <Loader pageName="Course" />;

  return (
    <section className="apply-section">
      <h1 className="title">Courses</h1>
      <p className="subtitle">
        Browse our detailed courses and enroll online.
      </p>

      <div className="course-container">
        {courses.map((c) => (
          <div key={c.id} className="course-card">
            <h3>{c.title}</h3>
            <p className="course-info">Instructor: {c.instructor}</p>
            <p className="course-info">Duration: {c.duration}</p>
            <p className="price">{c.price}</p>

            <button
              className="btn"
              onClick={() => (window.location.href = "/enroll")}
            >
              Enroll
            </button>

            <div className="syllabus">
              <h4>Syllabus</h4>
              <ul>
                {c.syllabus.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
