import "./DestinationCard.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// Pasos para crear un componente de tarjeta de destino:
// 1. Importar las dependencias necesarias, en este caso "./DestinationCard.scss" para estilos y PropTypes para la validación de propiedades.
//    También se importa useTranslation de "react-i18next" para manejar la traducción de textos.
//    Asegúrate de que el archivo de estilos y las dependencias estén correctamente instaladas en tu proyecto.
//    Este componente se encargará de mostrar información sobre un destino turístico, incluyendo una imagen,
//    un título, una calificación, el número de reseñas y el precio del destino.

// 2. Definir el componente DestinationCard.
//    Primero tenemos que irnos abajo del todo y en las propTypes del DestinationCard, tenemos que agregar los que queremos.
//    Lo siguiente sería llamar a las propiedades en la const de DestinationCard en la parte superior.
//    Luego solo tenemos que llamarlas en el codigo y en la posicion deseada.

// 3. Ahora solo faltaria irnos a Home.jsx y y en las primeras lineas importar la dependencia de DestinationCard, crear el array (en el caso que
//    queramos crearla, y lo siguiente seria llamarla por su nombre. EJEMPLO EN EL HOME.JSX)

// 4. Exportar el componente DestinationCard para que pueda ser utilizado en otras partes de la aplicación.

const DestinationCard = ({ badge, title, image, rating, reviews, price }) => {
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
          <span className="price">{t("destinations_price")} <img className="creditoGalactico" src="/assets/credito_galactico.png" alt="Créditos Galácticos" /> {price}</span>
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
  rating: PropTypes.number,
  reviews: PropTypes.number,
  price: PropTypes.string,
};

export default DestinationCard;
