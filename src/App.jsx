import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; 
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <Navbar />
   <AnimatePresence mode="wait">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/projects/:id" element={<ProjectDetail />} />
     </Routes>
   </AnimatePresence>
</BrowserRouter>
  );
}
