import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import TextSection from "./components/TextSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project1Explain from "./components/projects/Project1Explain";
import Project2Explain from "./components/projects/Project2Explain";

// Create a Layout component to hold the main page content
const MainLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <TextSection />
        <Experience />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Main page route */}
          <Route path="/" element={<MainLayout />} />

          {/* Project details route */}
          <Route path="/projects/privacy-video" element={<Project1Explain />} />
          {/* <Route
            path="/projects/textual-interventions"
            element={<Project2Explain />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}
