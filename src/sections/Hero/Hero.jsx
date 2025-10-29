import About from "../../components/About/About";
import Logo from "../../components/Logo/Logo";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <About></About>
        <Logo></Logo>
      </div>
    </>
  );
}
