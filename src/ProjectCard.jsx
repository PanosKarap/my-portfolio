import "./CSS/project-card.css";
import placeholderImage from "./assets/placeholder.png";

export default function ProjectCard() {
  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        <img
          src={placeholderImage}
          alt="Project Card"
          className="project-card-image"
        />
        <div className="project-card-text">Project Name</div>
      </div>
    </div>
  );
}
