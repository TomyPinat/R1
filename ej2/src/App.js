import React from 'react';
import TarjetaPresentacion from './TarjetaPresentacion';

const App = () => {
  return (
    <div>
      <TarjetaPresentacion 
        nombre="Juan" 
        apellido="Pérez" 
        profesion="Desarrollador Web" 
        imagen="https://via.placeholder.com/80" 
      />
      <TarjetaPresentacion 
        nombre="Ana" 
        apellido="López" 
        profesion="Diseñadora Gráfica" 
        imagen="https://via.placeholder.com/80" 
      />
    </div>
  );
};

export default App;
