import "./FeatureCard.scss";
import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <img className="feature-icon" src={icon} alt={title} />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">
        {description}
      </p>
    </div>
  );
};

FeatureCard.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default FeatureCard;