import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom'

import { motion } from "framer-motion";

import Home from "./components/Home/Home"
import React, { Suspense, lazy } from "react";
const About = lazy(() => import("./components/About/About"));
const FAQ = lazy(() => import("./components/FAQ/FAQ"));
const Gallery = lazy(() => import("./components/Gallery/Galley"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App(){
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Router>
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </motion.div>
  )
}
export default App;