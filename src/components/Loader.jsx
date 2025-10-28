// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'; // 👈 Replace with your actual logo path

export default function Loader({ pageName }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* --- Logo Section --- */}
          <motion.img
            src={logo}
            alt="Aaruchudar Logo"
            className="loader-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* --- Welcome Text --- */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Welcome to <span>Aaruchudar’s {pageName}</span>
          </motion.h1>

          {/* --- Loader bar --- */}
          <div className="loader-bar"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
