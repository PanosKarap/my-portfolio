import "./App.css";
import "./queries.css";
import Navigation from "./sections/navigation/Navigation";
import Hero from "./sections/hero/Hero";
import Language from "./sections/language/Language";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";
import ArrowUp from "./components/arrowUp/ArrowUp";
import Contact from "./sections/contact/Contact";

export default function App() {
  return (
    <>
      <div className="body-container">
        <Navigation />
        <Hero />
        <Language />
        <Projects />
        <Contact />
        <Footer />
        <ArrowUp />
      </div>
    </>
  );
}
