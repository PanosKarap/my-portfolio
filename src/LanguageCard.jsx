import "./CSS/language-card.css";

export default function LanguageCard({ language, description, icon }) {
  return (
    <div class="language-card-wrapper">
      <div className="language-card">
        <img src={icon} alt={`${language} icon`} className="language-icon" />
        <h3 className="language-name">{language}</h3>
        <p className="language-description">{description}</p>
      </div>
    </div>
  );
}
