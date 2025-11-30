import "./LanguageCard.css";

export default function LanguageCard({ languageIcon, languageName }) {
  return (
    <>
      <div className="language-card">
        <div className="language-icon">{languageIcon}</div>
        <p className="language-name">{languageName}</p>
      </div>
    </>
  );
}
