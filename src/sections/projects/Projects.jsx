import "./Projects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import projectPlaceholder from "../../assets/project-placeholder.png";

export default function Projects() {
  return (
    <>
      <div id="projects" className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-card-container">
          <ProjectCard
            projectImagePath={projectPlaceholder}
            projectTitle="Placeholder 1"
          />
          <ProjectCard
            projectImagePath={projectPlaceholder}
            projectTitle="Placeholder 2"
          />
          <ProjectCard
            projectImagePath={projectPlaceholder}
            projectTitle="Placeholder 3"
          />
        </div>
      </div>
    </>
  );
}
