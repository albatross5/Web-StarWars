import "./Header.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";




const Header = () => {
const { t } = useTranslation();

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="/assets/892851-200.png" alt="Logo" />
        <span>{t("header_title")}</span>
      </a>
      <nav className="nav">
        <a href="#destinos">{t("header_destinations")}</a>
        <a href="#servicios">{t("header_services")}</a>
        <Link to="/Naves#naves">{t("header_naves")}</Link>
      </nav>
      <button className="menu-btn">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
