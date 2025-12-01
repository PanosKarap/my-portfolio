import NavigationLinks from "../../components/navigationLinks/NavigationLinks";
import Button from "../../components/button/Button";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <NavigationLinks></NavigationLinks>
        <Button text="Download CV"></Button>
      </div>
    </>
  );
}
