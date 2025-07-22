import "./Naves.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NaveCard from "../../components/NaveCard/NaveCard";

const Naves = () => {
const { t } = useTranslation();
const naves = [
    {
      title: t("ncard_title_xwing"),
      image: "https://png.pngtree.com/png-vector/20250605/ourmid/pngtree-x-wing-fighter-star-wars-spaceship-3d-render-png-image_16468301.png",
      description: t("ncard_description_xwing"),
      passenger: t("ncard_passenger_xwing"),
      km: t("ncard_km_xwing"),
      speed: t("ncard_speed_xwing"),
      comfort: t("ncard_comfort_xwing"),
    },
    {
      title: t("ncard_title_tiefighter"),
      image: "https://www.pngarts.com/files/11/Pewter-Tie-Fighter-PNG-Image.png",
      description: t("ncard_description_tiefighter"),
      passenger: t("ncard_passenger_tiefighter"),
      km: t("ncard_km_tiefighter"),
      speed: t("ncard_speed_tiefighter"),
      comfort: t("ncard_comfort_tiefighter"),
    },
    {
      title: t("ncard_title_n1naboo"),
      image: "https://fbi.cults3d.com/uploaders/15832553/illustration-file/88c2a510-3362-485f-b938-5403abd6b431/N1NabooFighter.png",
      description: t("ncard_description_n1naboo"),
      passenger: t("ncard_passenger_n1naboo"),
      km: t("ncard_km_n1naboo"),
      speed: t("ncard_speed_n1naboo"),
      comfort: t("ncard_comfort_n1naboo"),
    },
    {
      title: t("ncard_title_jedi"),
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a7b01d7-c325-4ebc-bf0f-448ad3d831ec/ddgh8sd-8ffb1f68-b18a-4c75-a459-0b7183441532.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVhN2IwMWQ3LWMzMjUtNGViYy1iZjBmLTQ0OGFkM2Q4MzFlY1wvZGRnaDhzZC04ZmZiMWY2OC1iMThhLTRjNzUtYTQ1OS0wYjcxODM0NDE1MzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eqS-6v3WBfSmUKz7egye2RHSfdVqSyuaRkMvIJEwatc",
      description: t("ncard_description_jedi"),
      passenger: t("ncard_passenger_jedi"),
      km: t("ncard_km_jedi"),
      speed: t("ncard_speed_jedi"),
      comfort: t("ncard_comfort_jedi"),
    },
    // {
    //   title: t(""),
    //   image: "",
    //   description: t(""),
    //   passenger: t(""),
    //   km: t(""),
    //   speed: t(""),
    //   comfort: t(""),
    // },
    // {
    //   title: t(""),
    //   image: "",
    //   description: t(""),
    //   passenger: t(""),
    //   km: t(""),
    //   speed: t(""),
    //   comfort: t(""),
    // },
];

return ( // Componente principal de la página de Naves
    <>
      <Header></Header> {/* ________________________________Encabezado de la página IMPORTADA DE HEADER.JSX________________________________ */}
        <main>
            <section class="aircraft-types" id="naves">
                <div class="container">
                    <h2 class="section-title">{t("naves_title")}</h2>
                    <div class="aircraft-grid">
                        {naves.map((i, index) => (
                            <NaveCard
                                key={"nave-" + index}
                                title={i.title}
                                image={i.image}
                                description={i.description}
                                passenger={i.passenger}
                                km={i.km}
                                speed={i.speed}
                                comfort={i.comfort}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>

      <Footer></Footer> {/* ________________________________Seccion de pie de pagina IMPORTADA DE FOOTER.JSX________________________________*/}
    </>
  );
};


export default Naves;