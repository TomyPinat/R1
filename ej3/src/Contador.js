import React, { useState } from 'react';
import './Contador.css'; // Importamos el archivo de CSS para los estilos

const Contador = () => {
    // Estado para el valor del contador
    const [contador, setContador] = useState(0);

    // Función para incrementar el contador
    const incrementar = () => {
        setContador(contador + 1);
    };

    // Función para decrementar el contador
    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div className="contador">
            <h2>Contador: {contador}</h2>
            <div className="botones">
                <button onClick={incrementar} className="boton">Incrementar</button>
                <button onClick={decrementar} className="boton">Decrementar</button>
            </div>
        </div>
    );
};

export default Contador;
