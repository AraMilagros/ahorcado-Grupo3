import React from "react";
import PropTypes from "prop-types";

import "../../src/assets/css/cards.css";

function Card({imageSource, title, edad, interes, presentation, url}) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="wallpaper" className="card-img-top"/>
      </div>
      <div className="card-body text-ligth">
        <h4 className="titulo">{title}</h4>
        <div className="Datos">
          <p className="diseño">Edad:⠀</p>
          <p className="edad">{edad}</p>
        </div>
        <div className="Datos">
          <p className="diseño">Intereses:⠀</p>
          <p className="interes">{interes}</p>
        </div>
        <p className="presentacion">{presentation}</p>
        <div className="btn-git">
        <a href={url ? url : "#!"} target="_blank" className="btn btn-outline-secondary border-0" rel="noreferrer">Ir a GitHub</a>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  presentation: PropTypes.string,
  edad: PropTypes.string,
  interes: PropTypes.string
};

export default Card;
