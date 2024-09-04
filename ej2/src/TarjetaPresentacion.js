import React from 'react';
import './TarjetaPresentacion.css'; // Importa el archivo de CSS para los estilos

const TarjetaPresentacion = ({ nombre, apellido, profesion, imagen }) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={`${nombre} ${apellido}`} className="tarjeta-imagen" />
      <div className="tarjeta-info">
        <h2>{nombre} {apellido}</h2>
        <p>{profesion}</p>
      </div>
    </div>
  );
};

export default TarjetaPresentacion;

