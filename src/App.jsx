import "./App.css";
import Navigation from "./sections/navigation/Navigation.jsx";
import Hero from "./sections/hero/Hero.jsx";

export default function App() {
  return (
    <>
      <div className="body-container">
        <Navigation></Navigation>
        <Hero></Hero>
        {/* <Footer/> */}
      </div>
    </>
  );
}
