import "./Skills.css";
import { useContext } from "react";
import DataContext from "../Store/DataContext";

const Skills = () => {
  const { skillsData } = useContext(DataContext);

  /* DATA */
  const skillData = skillsData;

  return (
    /* SECTION */
    <section className="sectionSkills">
      {/* SECTION H1 */}
      <h1 className="text-center sectionH1Skills">My Skills</h1>

      {/* SECTION P */}
      <p className="text-center subtitle sectionPSkills">
        Technologies I Use To Build Projects
      </p>

      {/* TITLE CONTAINER */}
      {skillData.map((section, i) => (
        <div key={i}>
          {/* TITLE CONTAINER H2 */}
          <h2 className="titleContainerH2Skills">
            {/* TITLE CONTAINER H2 IMAGE */}
            <img
              className="titleContainerH2ImageSkills"
              src={section.image}
              alt={section.title}
            />
            {/* TITLE CONTAINER H2 TITLE */}
            {section.title}
          </h2>

          {/* TITLE CONTAINER HR */}
          <hr className="titleContainerHrSkills" />

          {/* CARD CONTAINER */}
          <div className="cardContainerSkills">
            {/* CARD CONTAINER DIV BOOT STRAP */}
            <div className="row rowSkills">
              {section.data.map((skill, index) => (
                /* CARD CONTAINER DIV BOOT STRAP */
                <div className="col-md-4 col-lg-3 mb-4" key={index}>
                  {/* CARD CONTAINER SKILLS CARD */}
                  <div className="cardContainerSkillsCardSkills">
                    {/* CARD CONTAINER SKILLS CARD IMAGE */}
                    <img src={skill.img} alt={skill.name} />

                    {/* CARD CONTAINER SKILLS CARD H5 */}
                    <h5>{skill.name}</h5>

                    {/* CARD CONTAINER SKILLS CARD P */}
                    <p>{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
