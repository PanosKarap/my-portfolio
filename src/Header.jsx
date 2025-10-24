import "./CSS/header.css";

export default function Header() {
  return (
    <header>
      <nav className="header__nav">
        <a
          className="header__title"
          href="https://panoskarap.github.io/my-portfolio/"
        >
          Karapanagiotis
        </a>
        <ul class="header__menu" id="navLinks">
          <li>
            <a class="header__menu__link" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a class="header__menu__link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a class="header__menu__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
