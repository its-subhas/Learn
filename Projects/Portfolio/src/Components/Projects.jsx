import "./Projects.css";
import { useContext } from "react";
import DataContext from "../Store/DataContext";

const Projects = () => {
  const { projectsData } = useContext(DataContext);

  {
    /* PROJECTS DATA */
  }
  const projectData = projectsData;

  {
    /* PROJECTS RENDER FUNCTION */
  }
  const renderProjects = (item, index) => (
    /* CARD DIV */
    <div className="card" key={index}>
      {/* CARD IMAGE */}
      <img src={item.img} alt={item.name} />
      {/* CARD BODY DIV */}
      <div className="card-body">
        {/* CARD H2 PROJECT NAME */}
        <h2 className="card-text projectName">{item.name}</h2>
        {/* CARD P PROJECT DESCRIPTION */}
        <p className="card-text projectDescription">{item.desc}</p>
        {/* CARD A PROJECT LINK */}
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* PROJECT SECTION */}
      <section className="projects">
        {/* PROJECT H1 HEADING BOOT STRAP */}
        <h1 className="text-center main-about">Projects</h1>
        {/* PROJECT P PARAGRAPH BOOT STRAP */}
        <p className="text-center subtitle">Projects I Build</p>
        {/* PROJECT H2 HEADING */}
        <h2 className="projectHeading">Projects</h2>
        {/* PROJECT HR */}
        <hr />
        {/* PROJECTS ITEMS CONTAINER */}
        <div className="projects-container">
          {projectData.map((item, index) => renderProjects(item, index))}
        </div>
      </section>
    </>
  );
};
export default Projects;
