import "./NaveCard.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const NaveCard = ({title, image, description, passenger, km, speed, comfort }) => {
  const { t } = useTranslation();

  return (

    <article class="aircraft-card">
        <img className="aircraft-img" src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul class="aircraft-specs">
            <li><span class="spec-label">{t("label_capacity")}</span> <span class="spec-value">{passenger}</span></li>
            <li><span class="spec-label">{t("label_range")}</span> <span class="spec-value">{km}</span></li>
            <li><span class="spec-label">{t("label_speed")}</span> <span class="spec-value">{speed}</span></li>
            <li><span class="spec-label">{t("label_comfort")}</span> <span class="spec-value">{comfort}</span></li>
        </ul>
    </article>
  );
};

NaveCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  passenger: PropTypes.string,
  km: PropTypes.string,
  speed: PropTypes.string,
  comfort: PropTypes.string,
};

export default NaveCard;