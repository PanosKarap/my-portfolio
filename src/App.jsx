import "./App.css";
import "./queries.css";
import Navigation from "./sections/navigation/Navigation";
import Hero from "./sections/hero/Hero";
import Language from "./sections/language/Language";
import Footer from "./sections/footer/Footer";
import Contact from "./sections/contact/Contact";
// import Projects from "./sections/projects/Projects";

export default function App() {
  return (
    <>
      <div className="body-container">
        <Navigation />
        <Hero />
        <Language />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}
