import About from "../../components/about/About";
import Logo from "../../components/logo/Logo";
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
