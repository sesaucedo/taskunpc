import TareaCard from './TareaCard';
import { tareasIniciales } from '../data/tareas';

function ListaTareas() {
  return (
    <section>
      <h2>Mis Tareas</h2>
      {tareasIniciales.map(tarea => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </section>
  );
}

export default ListaTareas;