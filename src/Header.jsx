import "./CSS/header.css";

function Header() {
  return (
    <header>
      <nav className="header__nav">
        <span className="header__title">
          <a href="#">Panagiotis Karapanagiotis</a>
        </span>
        <ul class="header__menu" id="navLinks">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
