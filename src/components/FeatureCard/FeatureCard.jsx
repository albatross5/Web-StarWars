import "./FeatureCard.scss";
import PropTypes from "prop-types";

// Pasos para crear un componente de tarjeta de destino:
// 1. Importar las dependencias necesarias, en este caso "./FeatureCard.scss" para estilos y PropTypes para la validación de propiedades.
//    Asegúrate de que el archivo de estilos y las dependencias estén correctamente instaladas en tu proyecto.

// 2. Definir el componente FeatureCard.
//    Primero tenemos que irnos abajo del todo y en las propTypes del FeatureCard, tenemos que agregar los que queremos.
//    Lo siguiente sería llamar a las propiedades en la const de FeatureCard en la parte superior.
//    Luego solo tenemos que llamarlas en el codigo y en la posicion deseada.

// 3. Ahora solo faltaria irnos a Home.jsx y y en las primeras lineas importar la dependencia de FeatureCard, crear el array (en el caso que
//    queramos crearla, y lo siguiente seria llamarla por su nombre. EJEMPLO EN EL HOME.JSX)

// 4. Exportar el componente FeatureCard para que pueda ser utilizado en otras partes de la aplicación.

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