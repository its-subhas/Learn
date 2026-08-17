import DataContext from "./DataContext";
import Logo from "/Logo.png";
import Guddu from "../assets/Guddu.jpeg";
import Portfolio from "../assets/Portfolio.png";
import RPS from "../assets/RPS.png";
import Location from "../assets/Location.png";
import Languages from "../assets/Languages.png";
import Master from "../assets/Master.png";
import Projects from "../assets/Projects.png";
import IAS from "../assets/IAS.png";
import Grade10 from "../assets/10 Grade.png";
import Grade12 from "../assets/12 Grade.png";
import Graduation from "../assets/Graduation.png";
import Todo from "../assets/Todo.png";

const DataContextProvider = ({ children }) => {
  /* NAVBAR DATA */
  const navData = { img: Logo };

  /* MAIN DATA */
  const mainData = { img: Guddu };

  /* PROJECTS DATA */
  const projectsData = [
    //
    {
      img: Portfolio,
      name: "Portfolio",
      desc: "A personal portfolio showcasing my skills, projects and experience as a Full Stack Developer.",
      link: "/",
    },
    {
      img: Todo,
      name: "Todo",
      desc: "A task management web application to add, update and delete tasks.",
      link: "https://todo-cyan-nine-56.vercel.app/",
    },
    {
      img: RPS,
      name: "Rock Paper Scissor",
      desc: "A Rock Paper Scissor game built using JavaScript that allows users to play against the computer.",
      link: "https://its-subhas.github.io/RPS-Game/",
    },
  ];

  /* Skills DATA */
  const skillsData = [
    {
      title: "Frontend",
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
      data: [
        {
          name: "HTML5",
          desc: "Structure web pages using semantic markup",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          desc: "Style and layout web pages",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          desc: "Add interactivity to websites",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          desc: "Build UI using components",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          desc: "Manage global state",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "Bootstrap",
          desc: "Responsive UI framework",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Tailwind CSS",
          desc: "Utility-first CSS framework",
          img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
          name: "Figma",
          desc: "UI/UX design tool",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
      data: [
        {
          name: "Java",
          desc: "Backend development language",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Node.js",
          desc: "Server-side JavaScript runtime",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Spring Boot",
          desc: "Java backend framework",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Express",
          desc: "Backend framework for Node.js",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
    },
    {
      title: "Databases",
      image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      data: [
        {
          name: "MongoDB",
          desc: "NoSQL database",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          desc: "Relational database",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      title: "Version Control",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      data: [
        {
          name: "Git",
          desc: "Version control system",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          desc: "A cloud-based platform for hosting Git repositories and collaborating on code projects",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
    {
      title: "Deployment",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      data: [
        {
          name: "Vercel",
          desc: "Frontend deployment platform (best for React apps)",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        },
        {
          name: "Render",
          desc: "Cloud platform for deploying backend services and full-stack applications",
          img: "https://cdn.simpleicons.org/render",
        },
        {
          name: "AWS",
          desc: "Cloud platform for deploying scalable backend infrastructure",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Docker",
          desc: "Platform for containerizing applications to ensure consistent deployment across environments",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
      ],
    },
    {
      title: "Others",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      data: [
        {
          name: "Remote Sensing",
          desc: "Satellite data analysis",
          img: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
        },
        {
          name: "QGIS",
          desc: "GIS software",
          img: "https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg",
        },
        {
          name: "Google Earth Engine",
          desc: "Cloud-based platform for geospatial analysis",
          img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleearth.svg",
        },
        {
          name: "Python",
          desc: "Geospatial programming",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Android Development",
          desc: "Mobile app development",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        {
          name: "Desktop Development",
          desc: "Desktop applications",
          img: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
        },
      ],
    },
  ];

  /* ABOUT DATA */
  const aboutsData = {
    Me: [
      {
        img: Guddu,
        alt: "Profile",
        text: "I am Subhas Biswas, a Full Stack Developer focused on building end-to-end web applications using modern frontend and backend technologies.",
      },
      {
        img: Location,
        alt: "Location",
        text: "I am from Udham Singh Nagar, Uttarakhand, India, a developing region with agriculture, industry and education.",
      },
      {
        img: Languages,
        alt: "Languages",
        text: "I am proficient in Bangla, Hindi and English enabling effective communication in multilingual environments.",
      },
    ],

    Goals: [
      {
        img: Master,
        alt: "Master",
        text: "Aiming to become a highly skilled Full Stack Developer with a strong focus on building modern, scalable and user-friendly web applications.",
      },
      {
        img: Projects,
        alt: "Projects",
        text: "Focused on building scalable real-world web applications that deliver smooth performance, strong functionality and great user experience.",
      },
      {
        img: IAS,
        alt: "IAS",
        text: "I aspire to become an IAS officer and serve the nation with integrity, responsibility and dedication. My goal is to contribute to society by working in administration, implementing effective policies and bringing positive change at the grassroots level.",
      },
    ],

    Qualification: [
      {
        img: Grade10,
        alt: "Grade10",
        text: (
          <>
            <h6>Board : UBSE</h6>
            <h6>Stream : Science</h6>
            <h6>Percentage : 69.4%</h6>
            <h6>Division : First Division</h6>
          </>
        ),
      },
      {
        img: Grade12,
        alt: "Grade12",
        text: (
          <>
            <h6>Board : UBSE</h6>
            <h6>Stream : PCM</h6>
            <h6>Percentage : 70.2%</h6>
            <h6>Division : First Division</h6>
          </>
        ),
      },
      {
        img: Graduation,
        alt: "Graduation",
        text: (
          <>
            <h6>University : UTU</h6>
            <h6>Course : B.Tech (CSE)</h6>
            <h6>Year : 2023 To 2027</h6>
            <h6>CGPA : 6.5</h6>
          </>
        ),
      },
    ],
  };

  /* CONTACTS DATA */
  const contactsData = {
    socialData: [
      {
        name: "LinkedIn",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        link: "https://www.linkedin.com/in/its-subhas/",
      },
      {
        name: "GitHub",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        link: "https://github.com/its-subhas",
      },
      {
        name: "Twitter (X)",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
        link: "https://x.com/its_subhas",
      },
      {
        name: "Instagram",
        img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
        link: "https://www.instagram.com/its_elite_coder/",
      },
    ],

    emailData: [
      {
        name: "Gmail",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
        link: "mailto:subhasbiswasofficial@gmail.com?subject=Portfolio Contact",
      },
    ],
  };

  return (
    <DataContext.Provider
      value={{
        navData,
        mainData,
        projectsData,
        skillsData,
        aboutsData,
        contactsData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
