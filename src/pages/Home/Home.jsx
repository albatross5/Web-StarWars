import "./Home.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

const Home = () => {
  const { t } = useTranslation();

  const destinations = [
    // Array que contiene los destinos destacados. Viene del fichero DestinationCard.jsx. En esta array se definen los destinos con sus propiedades.
    // Cada objeto representa un destino con sus propiedades: badge, title, image, rating, reviews y price.
    {
      badge: t("destinations_popular"),
      title: t("destinations_tatooine"),
      image:
        "https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1620575206208-Z6LODN9KBU1SBRX3B0S7/tatooine.jpg",
      rating: 4.8,
      reviews: 234,
      price: "899",
    },
    {
      badge: t("destinations_new"),
      title: t("destinations_coruscant"),
      image:
        "https://images.theconversation.com/files/516919/original/file-20230322-984-capxez.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip",
      rating: 4.9,
      reviews: 123,
      price: "1,299",
    },
    {
      badge: t("destinations_featured"),
      title: t("destinations_naboo"),
      image:
        "https://imgix.ranker.com/list_img_v2/13203/3153203/original/3153203",
      rating: 4.7,
      reviews: 456,
      price: "799",
    },
    {
      badge: t("destinations_featured"),
      title: t("destinations_alderaan"),
      image:
        "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
      rating: 4.7,
      reviews: 456,
      price: "799",
    },
    {
      badge: t("destinations_featured"),
      title: t("destinations_hoth"),
      image:
        "https://pm1.aminoapps.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg",
      rating: 4.7,
      reviews: 456,
      price: "399",
    },
    {
      badge: t("destinations_new"),
      title: t("destinations_estrella"),
      image: "https://i.blogs.es/5382dc/death-star/1366_521.jpg",
      rating: 4.7,
      reviews: 456,
      price: "1",
    },
  ];

  const features = [
    // Array que contiene las características destacadas. Viene del fichero FeatureCard.jsx. En esta array se definen las características con sus propiedades.
    // Cada objeto representa una característica con sus propiedades: icon, title y description.
    {
      icon: "/assets/shield.svg",
      title: t("features_secure_travel"),
      description: t("features_secure_travel_description"),
    },
    {
      icon: "/assets/clock.svg",
      title: t("features_personalized"),
      description: t("features_personalized_description"),
    },
    {
      icon: "/assets/heart.svg",
      title: t("features_24_7_support"),
      description: t("features_24_7_support_description"),
    },
    {
      icon: "/assets/users.svg",
      title: t("features_best_prices"),
      description: t("features_best_prices_description"),
    },
  ];

  return (
    // Componente principal de la página de inicio
    <>
      <Header></Header>{" "}
      {/* ________________________________Encabezado de la página IMPORTADA DE HEADER.JSX________________________________ */}
      <main>
        <section className="hero">
          {" "}
          {/* ________________________________Seccion principal ________________________________*/}
          <div className="hero-content">
            <h1>
              {t("hero_title")}
              <span>{t("hero_span")}</span>
            </h1>
            <p>{t("hero_description")}</p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-primary">
                {t("hero_link")}
              </a>
              <a href="#" className="btn btn-outline">
                {t("hero_show")}
              </a>
            </div>
          </div>
        </section>
        <Search></Search>{" "}
        {/* ________________________________Seccion de busqueda de destinos IMPORTADA DE SEARCH.JSX________________________________*/}
        <section id="destinos" className="destinations">
          {" "}
          {/* ______________Seccion de destinos, importada desde un array en la parte superior______________*/}
          <div className="container">
            <div className="section-header">
              <h2>{t("destinations_title")}</h2>
              <p>{t("destinations_description")}</p>
            </div>
            <div className="destinations-grid">
              {destinations.map((i, index) => (
                <DestinationCard
                  key={"destination-" + index}
                  badge={i.badge}
                  title={i.title}
                  image={i.image}
                  rating={i.rating}
                  reviews={i.reviews}
                  price={i.price}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="servicios" className="features">
          {" "}
          {/* ______________Seccion de servicios y ¿Porque? importada desde un array en la parte superior______________*/}
          <div className="container">
            <div className="section-header">
              <h2>{t("features_title")}</h2>
            </div>
            <div className="features-grid">
              {features.map((i, index) => (
                <FeatureCard
                  key={"feature-" + index}
                  icon={i.icon}
                  title={i.title}
                  description={i.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>{" "}
      {/* ________________________________Seccion de pie de pagina IMPORTADA DE FOOTER.JSX________________________________*/}
    </>
  );
};

export default Home;
