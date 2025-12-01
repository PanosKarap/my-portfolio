import "./App.css";
import Navigation from "./sections/navigation/Navigation";
import Hero from "./sections/hero/Hero";
import Language from "./sections/language/Language";
import Footer from "./sections/footer/Footer";
import Contact from "./sections/contact/Contact";

export default function App() {
  return (
    <>
      <div className="body-container">
        <Navigation />
        <Hero />
        <Language />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
