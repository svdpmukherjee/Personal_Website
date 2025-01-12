import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import TextSection from "./components/TextSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
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
      </div>
    </Router>
  );
}
