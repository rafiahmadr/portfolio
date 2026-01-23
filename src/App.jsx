import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* NAVBAR MUST STAY OUTSIDE AnimatePresence */}
      <Navbar />

      {/* PAGE TRANSITIONS ONLY */}
      <AnimatePresence mode="wait">
        <Motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </Motion.main>
      </AnimatePresence>
    </>
  );
}
