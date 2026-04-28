import { useParams, useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext.jsx';

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea, toggleTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find(t => t.id === Number(id));

  if (!tarea) {
    return (
      <div>
        <p>Tarea no encontrada.</p>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>
    );
  }

  function handleEliminar() {
    eliminarTarea(tarea.id);
    navigate('/');
  }

  return (
    <div className="detalle-page">
      <h2>{tarea.titulo}</h2>
      <p><strong>Materia:</strong> {tarea.materia}</p>
      <p><strong>Fecha:</strong> {tarea.fecha}</p>
      <p><strong>Estado:</strong> {tarea.completada ? '✅ Completada' : '⏳ Pendiente'}</p>
      <div className="detalle-actions">
        <button className="btn-primary" onClick={() => toggleTarea(tarea.id)}>
          {tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada'}
        </button>
        <button className="btn-danger" onClick={handleEliminar}>🗑 Eliminar</button>
        <button className="btn-secondary" onClick={() => navigate('/')}>← Volver</button>
      </div>
    </div>
  );
}

export default DetalleTarea;