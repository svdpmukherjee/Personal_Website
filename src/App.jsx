import Nav from "./components/Nav";
import SideRail from "./components/SideRail";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import DeliveryCycle from "./components/DeliveryCycle";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Teaching from "./components/Teaching";
import TechStack from "./components/TechStack";
import GitHubActivity from "./components/GitHubActivity";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import { GapBand } from "./components/Layout";

export default function App() {
  return (
    <>
      <Nav />
      <SideRail />
      <main id="top">
        <Hero />
        <About />
        <GapBand />
        <Skills />
        <GapBand />
        <DeliveryCycle />
        <GapBand />
        <Projects />
        <GapBand />
        <Experience />
        <GapBand />
        <Teaching />
        <GapBand />
        <TechStack />
        <GapBand />
        <GitHubActivity />
        <GapBand />
        <Contact />
        <GapBand />
        <Languages />
      </main>
      <Footer />
    </>
  );
}
