import "./SocialIcon.css";

export default function SocialIcon({ icon, url }) {
  return (
    <div className="social-icon-container">
      <a
        className="social-icon-url"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icon" src={icon}></img>
      </a>
    </div>
  );
}
