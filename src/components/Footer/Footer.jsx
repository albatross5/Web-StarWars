import "./Footer.scss";
import { useTranslation } from "react-i18next";

const { t } = useTranslation();
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div>
                    <div className="footer-brand">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                        </svg>
                        <span>{t("footer_brand")}</span>
                    </div>
                    <p className="footer-description">{t("footer_description")}</p>
                </div>
                <div>
                    <h3 className="footer-title">{t("footer_destinations")}</h3>
                    <ul className="footer-links">
                        <li><a href="#">{t("footer_europe")}</a></li>
                        <li><a href="#">{t("footer_asia")}</a></li>
                        <li><a href="#">{t("footer_america")}</a></li>
                        <li><a href="#">{t("footer_africa")}</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-title">{t("footer_services")}</h3>
                    <ul className="footer-links">
                        <li><a href="#">{t("footer_flights")}</a></li>
                        <li><a href="#">{t("footer_hotels")}</a></li>
                        <li><a href="#">{t("footer_packages")}</a></li>
                        <li><a href="#">{t("footer_insurance")}</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-title">{t("footer_contact")}</h3>
                    <ul className="footer-contact">
                        <li>📧 {t("footer_email")}</li>
                        <li>📞 {t("footer_phone")}</li>
                        <li>📍 {t("footer_address")}</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{currentYear} {t("footer_brand")} {t("footer_rights")}</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;



