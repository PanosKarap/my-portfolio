import "./ProjectCard.css";

export default function ProjectCard({ projectImagePath, projectTitle }) {
  return (
    <>
      <div className="project-card">
        <img
          className="project-image"
          src={projectImagePath}
          alt={projectTitle}
        />
        <h2 className="project-title">{projectTitle}</h2>
      </div>
    </>
  );
}
