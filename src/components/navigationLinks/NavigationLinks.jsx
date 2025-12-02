import "./NavigationLinks.css";

export default function NavigationLinks() {
  return (
    <>
      <ul className="navigation-links-container">
        <li>
          <a className="navigation-links" href="#skills">
            Skills
          </a>
        </li>
        {/* <li>
          <a className="navigation-links" href="#projects">
            Projects
          </a>
        </li> */}
        <li>
          <a className="navigation-links" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
