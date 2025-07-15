import "./Home.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header></Header>

      <main>
        <section className="hero">
            <div className="hero-content">
                <h1>
                    {t("hero_title")}
                    <span>{t("hero_span")}</span>
                </h1>
                <p>{t("hero_description")}</p>
                <div className="hero-buttons">
                    <a href="#" className="btn btn-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                        </svg>
                        {t("hero_link")}
                    </a>
                    <a href="#" className="btn btn-outline">{t("hero_show")}</a>
                </div>
            </div>
        </section>

      </main>

      <Footer></Footer>
    </>
  );
};

export default Home;
