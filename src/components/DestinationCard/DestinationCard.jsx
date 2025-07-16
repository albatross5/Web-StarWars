import "./DestinationCard.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const DestinationCard = ({ badge, title, image, credits, rating, reviews, price }) => {
  const { t } = useTranslation();

  return (
    <articles className="destination-card">
      <div className="destination-image">
        <img
          src={image}
          alt={title}
        />
        <div className="badge">{badge}</div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <div className="rating">
            <svg className="star" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            <span className="rating-text">{rating}</span>
          </div>
        </div>
        <p className="reviews">{reviews} {t("destinations_reviews")}</p>
        <div className="card-footer">
          <span className="price">{t("destinations_price")} {credits} {price}</span>
          <button className="btn btn-sm">{t("destinations_view_more")}</button>
        </div>
      </div>
    </articles>
  );
};

DestinationCard.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  credits: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  price: PropTypes.string,
};

export default DestinationCard;
