import uparrow from "./assets/uparrow.png";
import "./CSS/up.css";

export default function Up() {
  return (
    <a href="#top">
      <img src={uparrow} alt="Go to top" className="up-arrow" />
    </a>
  );
}
