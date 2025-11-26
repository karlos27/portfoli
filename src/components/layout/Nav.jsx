import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import "./Nav.css";

function Nav() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="nav">
      <div className="nav__logo">
        <Link to="/">Carlos.dev</Link>
      </div>

      <nav className="nav__links">
        <Link to="/">{t("nav.aboutMe")}</Link>
        <Link to="/experience">{t("nav.experience")}</Link>
      </nav>

      <div className="nav__lang">
        <button onClick={() => changeLanguage("ca")}>CA</button>
        <button onClick={() => changeLanguage("es")}>ES</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
    </header>
  );
}

export default Nav;
