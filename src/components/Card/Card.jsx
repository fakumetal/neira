import './card.scss';

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-background"></div> {/* Fondo rojo como un div */}
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
