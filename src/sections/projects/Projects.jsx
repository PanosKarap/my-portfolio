import "./Projects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import projectPlaceholder from "../../assets/BusTourProject.png";

export default function Projects() {
  return (
    <>
      <div id="projects" className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-card-container">
          <ProjectCard
            projectImagePath={projectPlaceholder}
            projectTitle="Bus Tour Project"
            previewLink={"https://bus-tour-project.pages.dev/"}
            githubLink={"https://github.com/PanosKarap/bus-tour-project"}
            techStack={["React", "HTML", "CSS"]}
          />
        </div>
      </div>
    </>
  );
}
