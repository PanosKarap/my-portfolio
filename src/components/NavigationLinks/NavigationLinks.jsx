import "./NavigationLinks.css";

export default function NavigationLinks() {
  return (
    <>
      <ul>
        <li>
          <a id="About" className="links" href="#">
            About
          </a>
        </li>
        <li>
          <a id="Skills" className="links" href="#">
            Skills
          </a>
        </li>
        <li>
          <a id="Projects" className="links" href="#">
            Projects
          </a>
        </li>
        <li>
          <a id="Contact" className="links" href="#">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
