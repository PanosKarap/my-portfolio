import "./SocialIcon.css";

export default function SocialIcon({ icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social profile"
    >
      <div className="social-icon">{icon}</div>
    </a>
  );
}
