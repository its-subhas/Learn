import "./About.css";
import { useContext } from "react";
import DataContext from "../Store/DataContext";

const About = () => {
  const { aboutsData } = useContext(DataContext);

  return (
    /* SECTION */
    <section className="about">
      {/* SECTION H1 HEADING */}
      <h1 className="text-center main-about">About</h1>
      {/* SECTION P PARAGRAPH */}
      <p className="text-center subtitle para">Information Related To Me</p>

      {/* SECTION H2 HEADING */}
      <h2 className="me">Me</h2>
      {/* SECTION HR */}
      <hr />
      {/* SECTION ME COINTAINER */}
      <div className="about-container">
        {aboutsData.Me.map((item) => (
          <div className="card" key={item.alt}>
            {/* CARD IMAGE */}
            <img src={item.img} className="card-img-top" alt={item.alt} />
            {/* CARD BODY DIV BOOT STRAP */}
            <div className="card-body">
              {/* CARD PARAGRAPH */}
              <div className="card-text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION H2 HEADING GOALS */}
      <h2 className="goals">Goals</h2>
      {/* SECTION HR */}
      <hr />
      {/* SECTION GOALS CONTAINER */}
      <div className="about-container">
        {aboutsData.Goals.map((item) => (
          <div className="card" key={item.alt}>
            {/* CARD IMAGE */}
            <img src={item.img} className="card-img-top" alt={item.alt} />
            {/* CARD BODY DIV BOOT STRAP */}
            <div className="card-body">
              {/* CARD PARAGRAPH */}
              <div className="card-text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION H2 HEADING QULIIFICATION */}
      <h2 className="qualification">Qualification</h2>
      {/* SECTION HR */}
      <hr />
      {/* SECTION QULIIFICATION CONTAINER */}
      <div className="about-container">
        {aboutsData.Qualification.map((item) => (
          <div className="card" key={item.alt}>
            {/* CARD IMAGE */}
            <img src={item.img} className="card-img-top" alt={item.alt} />
            {/* CARD BODY DIV BOOT STRAP */}
            <div className="card-body">
              {/* CARD PARAGRAPH */}
              <div className="card-text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
