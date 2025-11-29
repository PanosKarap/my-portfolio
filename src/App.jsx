import "./App.css";
import Navigation from "./sections/navigation/Navigation";
import Hero from "./sections/hero/Hero";

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
