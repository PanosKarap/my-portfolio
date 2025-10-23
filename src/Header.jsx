import "./CSS/header.css";

export default function Header() {
  return (
    <header>
      <nav className="header__nav">
        <a className="header__title" href="#">
          Karapanagiotis
        </a>
        <ul class="header__menu" id="navLinks">
          <li>
            <a class="header__menu__link" href="#">
              About
            </a>
          </li>
          <li>
            <a class="header__menu__link" href="#">
              Skills
            </a>
          </li>
          <li>
            <a class="header__menu__link" href="#">
              Projects
            </a>
          </li>
          <li>
            <a class="header__menu__link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
