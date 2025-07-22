import "./Footer.scss";
import { useTranslation } from "react-i18next";


const currentYear = new Date().getFullYear();

const Footer = () => {
const { t } = useTranslation();
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div>
                    <div className="footer-brand">
                        <span>{t("footer_brand")}</span>
                    </div>
                    <p className="footer-description">{t("footer_description")}
                        <br />
                        {t("footer_description_long")}
                    </p>
                </div>
                <div>
                    <h3 className="footer-title">{t("footer_destinations")}</h3>
                    <ul className="footer-links">
                        <li><a href="#">{t("footer_tatooine")}</a></li>
                        <li><a href="#">{t("footer_coruscant")}</a></li>
                        <li><a href="#">{t("footer_naboo")}</a></li>
                        <li><a href="#">{t("footer_alderaan")}</a></li>
                        <li><a href="#">{t("footer_hoth")}</a></li>
                        <li><a href="#">{t("footer_estrella")}</a></li>
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



