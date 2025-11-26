import { useTranslation } from "react-i18next";
import Card from "../components/common/Card";
import "./Experience.css";

//dades formació
const educationItems = [
  { id: "degree" },
  { id: "master" }
];
//dades projectes
const projectItems = [
  {
    id: "dataambitus",
    tags: ["Django", "PostgreSQL", "OpenLayers"]
  },
  {
    id: "lafarra",
    tags: ["Django", "Bootstrap"],
    link: "https://lafarra.town"
  },
  {
    id: "portfolio",
    tags: ["React", "Vite", "i18next"],
    link: "https://github.com/karlos27/portfoli"
  }
];

function Experience() {
  const { t } = useTranslation();

  return (
    <section className="exp">
      <h1>{t("experience.title")}</h1>
      <section className="exp__section">
        <h2>{t("experience.education")}</h2>
        <div className="exp__timeline">
          {educationItems.map((education) => (
            <div className="exp__item" key={education.id}>
              <div className="exp__dot" />
              <div className="exp__content">
                <span className="exp__date">{t(`experience.educationItems.${education.id}.dates`)}</span>
                <h3>{t(`experience.educationItems.${education.id}.title`)}</h3>
                <p>{t(`experience.educationItems.${education.id}.place`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="exp__section">
        <h2>{t("experience.projects")}</h2>
        <div className="exp__projects-grid">
          {projectItems.map((project) => (
            <Card key={project.id} title={t(`experience.projectsItems.${project.id}.title`)} tags={project.tags}>
              <p>{t(`experience.projectsItems.${project.id}.description`)}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card__link"
                >
                  {t(`experience.projectsItems.${project.id}.linkLabel`)}
                </a>
              )}
            </Card>
          ))}
        </div>
      </section>
      
    </section>
  );
}

export default Experience;
