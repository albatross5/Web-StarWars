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
    {
      badge: t("destinations_popular"),
      title: t("destinations_bali"),
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 234,
      price: "$899",
    },
    {
      badge: t("destinations_new"),
      title: t("destinations_paris"),
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 123,
      price: "$1,299",
    },
    {
      badge: t("destinations_featured"),
      title: t("destinations_tokyo"),
      image:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 456,
      price: "$799",
    },
    {
      badge: t("destinations_featured"),
      title: t("destinations_tokyo"),
      image:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 456,
      price: "$799",
    },
    {
      badge: t("destinations_featured"),
      title: t("destinations_tokyo"),
      image:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 456,
      price: "$799",
    },
    {
      badge: t("destinations_featured"),
      title: t("destinations_tokyo"),
      image:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 456,
      price: "$799",
    },
  ];

  const features = [
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                {t("hero_link")}
              </a>
              <a href="#" className="btn btn-outline">
                {t("hero_show")}
              </a>
            </div>
          </div>
        </section>

        <Search></Search>

        <section id="destinos" className="destinations">
          <div className="container">
            <div className="section-header">
              <h2>{t("destinations_title")}</h2>
              <p>
                {t("destinations_description")}
              </p>
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

        <section id="servicios" class="features">
          <div class="container">
            <div class="section-header">
              <h2>{t("features_title")}</h2>
              <p>
                {t("features_description")}
              </p>
            </div>
            <div class="features-grid">

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
      <Footer></Footer>
    </>
  );
};

export default Home;
