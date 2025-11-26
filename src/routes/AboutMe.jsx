import { useState } from "react"; 
import { useTranslation } from "react-i18next";
import Card from "../components/common/Card";
import "./AboutMe.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub , FaDocker, FaCode, FaRunning, FaMusic, FaCoffee, FaGlobeEurope } from "react-icons/fa";
import { SiVite, SiDjango, SiPostgresql, SiSqlite, SiFigma, SiGimp } from "react-icons/si";
import { MdPhoneIphone  } from "react-icons/md";

//habilitats frontend
const frontendSkills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <MdPhoneIphone />, name: "Responsive design" }
];
//habilitats backend
const backendSkills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiSqlite />, name: "SQLite" },
];
//eines
const toolsSkills = [
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaDocker />, name: "Docker (bàsic)" },
  { icon: <FaCode />, name: "VS Code" },
  { icon: <FaCode />, name: "Cursor" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiGimp />, name: "GIMP" },
];


function AboutMe() {
  const { t } = useTranslation();
  //estat per text extra
  const [showMore, setShowMore] = useState(false);
  //canviar valor botó
  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="about">
      <div className="about__profile">
        <img
          src="/assets/images/profile.jpg"
          alt="Perfil"
          className="about__image"
        />
        <div>
          <h1>{t("aboutMe.title")}</h1>
          <h2 className="about__subtitle">{t("aboutMe.subtitle")}</h2>
          <p className="about__description">{t("aboutMe.description")}</p>
          <button className="btn-more" onClick={toggleMore}>
            {showMore ? t("aboutMe.moreButtonHide") : t("aboutMe.moreButtonShow")}
          </button>
          {showMore && (
            <p className="about__extra">
              {t("aboutMe.extraText")}
            </p>
          )}
        </div>
      </div>

      <div className="about__skills">
        <h2>{t("aboutMe.skills")}</h2>
        <div className="about__skills-grid">
        <Card title={t("aboutMe.skillsFrontend")}>
          <ul className="skills-list">
            {frontendSkills.map((skill) => (
              <li key={skill.name}>
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </Card>
        
        <Card title={t("aboutMe.skillsBackend")}>
          <ul className="skills-list">
            {backendSkills.map((skill) => (
              <li key={skill.name}>
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </Card>

        <Card title={t("aboutMe.skillsTools")}>
          <ul className="skills-list">
            {toolsSkills.map((skill) => (
              <li key={skill.name}>
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
