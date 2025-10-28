import React from "react";
import  { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const workshops = [
  {
    id: "w1",
    title: "Hands-on React Workshop",
    date: "Nov 8, 2025",
    time: "10:00 AM - 4:00 PM",
    price: "₹ 1,999",
    seats: 20,
    description:
      "Learn React fundamentals with a practical project-based approach.",
  },
  {
    id: "w2",
    title: "UI/UX Design Sprint",
    date: "Dec 4, 2025",
    time: "10:00 AM - 3:00 PM",
    price: "₹ 1,499",
    seats: 15,
    description:
      "A day-long sprint on design thinking, wireframes, and prototyping.",
  },
];

export default function Workshop() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader pageName="Workshop" />;


  return (
    <section className="apply-section">
      <h1 className="title">Workshops</h1>
      <p className="subtitle">
        Upcoming hands-on workshops you can register for.
      </p>

      <div className="workshop-container">
        {workshops.map((w) => (
          <div key={w.id} className="course-card">
            <h3>{w.title}</h3>
            <p className="course-info">{w.description}</p>
            <p className="course-info">
              📅 {w.date} | 🕙 {w.time}
            </p>
            <p className="price">{w.price}</p>
            <p className="course-info">Seats: {w.seats}</p>
            <button
              className="btn"
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
