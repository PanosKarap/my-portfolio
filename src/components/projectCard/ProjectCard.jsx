import "./ProjectCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  projectImagePath,
  projectTitle,
  previewLink,
  githubLink,
  techStack,
}) {
  return (
    <>
      <div className="project-card">
        <img
          className="project-image"
          src={projectImagePath}
          alt={projectTitle}
        />

        <h2 className="project-title">{projectTitle}</h2>

        <div className="project-buttons">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <FaExternalLinkAlt /> Preview
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="btn transparent"
          >
            <FaGithub /> Code
          </a>
        </div>

        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
