import "./SocialIcon.css";

export default function SocialIcon({ icon, url }) {
  return (
    <div className="logo-container">
      <a
        className="icon-url"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon" src={icon}></img>
      </a>
    </div>
  );
}
