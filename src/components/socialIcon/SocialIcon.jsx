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
        <div className="social-icon">{icon}</div>
      </a>
    </div>
  );
}
