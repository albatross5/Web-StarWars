import "./Header.scss";
import { useTranslation } from "react-i18next";



const Header = () => {
const { t } = useTranslation();

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="/assets/892851-200.png" alt="Logo" />
        <span>{t("header_title")}</span>
      </a>
      <nav className="nav">
        <a href="#">{t("header_destinations")}</a>
        <a href="#">{t("header_services")}</a>
        <a href="#">{t("header_offers")}</a>
        <a href="#">{t("header_contact")}</a>
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
