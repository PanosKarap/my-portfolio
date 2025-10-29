import NavigationLinks from "../../components/NavigationLinks/NavigationLinks";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
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
