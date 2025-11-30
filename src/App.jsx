import "./App.css";
import Navigation from "./sections/navigation/Navigation";
import Hero from "./sections/hero/Hero";
import Language from "./sections/language/Language";

export default function App() {
  return (
    <>
      <div className="body-container">
        <Navigation />
        <Hero />
        <Language />
        {/* <Footer/> */}
      </div>
    </>
  );
}
