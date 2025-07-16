import "./FeatureCard.scss";
import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div class="feature-card">
    <img src={icon} alt={title}></img>
      <h3 class="feature-title">{title}</h3>
      <p class="feature-description">
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