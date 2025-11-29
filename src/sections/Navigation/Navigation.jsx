import NavigationLinks from "../../components/navigationLinks/NavigationLinks";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <NavigationLinks></NavigationLinks>
        <Button text="Hire me"></Button>
      </div>
    </>
  );
}
