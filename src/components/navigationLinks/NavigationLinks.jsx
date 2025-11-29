import "./NavigationLinks.css";

export default function NavigationLinks() {
  return (
    <>
      <ul className="navigation-links-container">
        <li>
          <a id="About" className="navigation-links" href="#">
            About
          </a>
        </li>
        <li>
          <a id="Skills" className="navigation-links" href="#">
            Skills
          </a>
        </li>
        <li>
          <a id="Projects" className="navigation-links" href="#">
            Projects
          </a>
        </li>
        <li>
          <a id="Contact" className="navigation-links" href="#">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
