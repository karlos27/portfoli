import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} - {t("footer.rights")}
      </p>
    </footer>
  );
}

export default Footer;
