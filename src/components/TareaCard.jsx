import { useTareas } from '../context/TareasContext.jsx';
import { Link } from 'react-router-dom'; 

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();

  return (
    <article style={{ opacity: completada ? 0.5 : 1 }}>
      <div className="card-info">
        <h3 style={{ textDecoration: completada ? 'line-through' : 'none' }}>
          {titulo}
        </h3>
        <p>{materia} · {fecha}</p>
      </div>
      <button onClick={() => toggleTarea(id)}>
      {completada ? '✅ Hecho' : '⏳ Pendiente'}
      </button>
      <Link to={`/tarea/${id}`}>Ver detalle →</Link>
    </article>
  );
}

export default TareaCard;