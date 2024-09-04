import React, { useState } from 'react';
import './FormularioUsuario.css'; // Importamos el archivo de CSS para los estilos

const FormularioUsuario = () => {
    // Estado para almacenar el nombre del usuario
    const [nombre, setNombre] = useState('');
    // Estado para manejar la visibilidad del mensaje de bienvenida
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    // Función para manejar el cambio en el input
    const manejarCambio = (e) => {
        setNombre(e.target.value);
    };

    // Función para manejar el envío del formulario
    const manejarEnvio = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        setMostrarMensaje(true); // Muestra el mensaje de bienvenida
    };

    return (
        <div className="formulario-usuario">
            <form onSubmit={manejarEnvio}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={manejarCambio}
                        placeholder="Ingresa tu nombre"
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
            {mostrarMensaje && <p>¡Bienvenido, {nombre}!</p>}
        </div>
    );
};

export default FormularioUsuario;