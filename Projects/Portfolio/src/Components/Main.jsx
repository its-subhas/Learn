import { ImGithub } from "react-icons/im";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../Store/DataContext";

const Main = () => {
  const { mainData } = useContext(DataContext);
  return (
    <div className="content" id="home">
      <div className="right-left-div">
        {/* LEFT */}
        <div className="leftDiv">
          <h1>Hi, I'm Subhas</h1>
          <h4>Full Stack Web Developer</h4>
          <p>
            I build modern, responsive web applications using React.js,
            Express.js, Spring-Boot, Java, Node.js and modern tools.
          </p>

          <a href="/Resume.pdf" download className="resumeBtn">
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="rightDiv">
          <img src={mainData.img} alt="Profile" />

          <div className="socialMedia">
            <a
              href="https://www.linkedin.com/in/its-subhas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/its-subhas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub /> <span>GitHub</span>
            </a>

            <a
              href="https://x.com/its_subhas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter /> <span>Twitter (X)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
