import "./App.css";
import Navigation from "./sections/Navigation/Navigation.jsx";
import Hero from "./sections/Hero/Hero.jsx";

export default function App() {
  return (
    <>
      <div className="app-container">
        <Navigation></Navigation>
        <div className="body-container">
          <Hero></Hero>
        </div>
      </div>
    </>
  );
}
