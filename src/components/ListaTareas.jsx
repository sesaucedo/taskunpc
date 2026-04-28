import { useState } from 'react';
import { useTareas } from '../context/TareasContext.jsx';
import TareaCard from './TareaCard';

function ListaTareas() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState('todas');

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'pendientes') return !tarea.completada;
    if (filtro === 'completadas') return tarea.completada;
    return true;
  });

  return (
    <section>
      <div>
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>

      {tareasFiltradas.length === 0 ? (
        <p className="empty">No hay tareas {filtro === 'pendientes' ? 'pendientes' : 'completadas'}.</p>
      ) : (
        tareasFiltradas.map(tarea => (
          <TareaCard key={tarea.id} {...tarea} />
        ))
      )}
    </section>
  );
}

export default ListaTareas;