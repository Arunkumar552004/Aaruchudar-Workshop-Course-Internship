import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Workshop from './pages/Workshop'
import Course from './pages/Course'
import Internship from './pages/Internship'
import RegisterForm from './pages/RegisterForm'
import EnrollForm from './pages/EnrollForm'
import ApplyForm from './pages/ApplyForm'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container" style={{ padding: '2rem 0' }}>
        <Routes>
          <Route path="/" element={<Workshop />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/enroll" element={<EnrollForm />} />
          <Route path="/apply" element={<ApplyForm />} />
        </Routes>
      </main>
      <footer>
        © {new Date().getFullYear()} Aaruchudar Consultancy
      </footer>
    </div>
  )
}
