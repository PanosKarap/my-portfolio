import "./SocialIcon.css";

export default function SocialIcon({ icon, url }) {
  return (
    <div className="social-icon-container">
      <a
        className="social-icon-url"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Social profile"
      >
        <div className="social-icon">{icon}</div>
      </a>
    </div>
  );
}
