import React, { useState, useEffect } from 'react';
import './ListaTareas.css';

const ListaTareas = () => {
    // Estado para almacenar las tareas en un arreglo
    const [tareas, setTareas] = useState([]);

    // Estado para la nueva tarea
    const [nuevaTarea, setNuevaTarea] = useState('');

    // Cargar las tareas desde localStorage cuando el componente se monte
    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
        if (tareasGuardadas) {
            setTareas(tareasGuardadas);
        }
    }, []);

    // Guardar las tareas en localStorage cuando cambien
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    // Función para manejar el cambio en el input
    const manejarCambio = (e) => {
        setNuevaTarea(e.target.value);
    };

    // Función para agregar una nueva tarea al arreglo de tareas
    const agregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
            setNuevaTarea('');
        }
    };

    // Función para marcar una tarea como completada en el arreglo de tareas
    const completarTarea = (indice) => {
        const nuevasTareas = tareas.map((tarea, i) => {
            if (i === indice) {
                return { ...tarea, completada: !tarea.completada };
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };

    return (
        <div className="lista-tareas">
            <h2>Lista de Tareas</h2>
            <div className="input-tarea">
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={manejarCambio}
                    placeholder="Agregar nueva tarea"
                />
                <button onClick={agregarTarea}>Agregar</button>
            </div>
            <ul>
                {tareas.map((tarea, indice) => (
                    <li
                        key={indice}
                        className={tarea.completada ? 'completada' : ''}
                        onClick={() => completarTarea(indice)}
                    >
                        {tarea.texto}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTareas;