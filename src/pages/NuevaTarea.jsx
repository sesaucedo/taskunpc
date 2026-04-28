import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext.jsx';

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();

  const [form, setForm] = useState({ titulo: '', materia: '', fecha: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo || !form.materia || !form.fecha) return;
    agregarTarea(form);
    navigate('/');
  }

  return (
    <div className="form-page">
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input type="text" name="titulo" value={form.titulo} onChange={handleChange} placeholder="Ej: Parcial de Cálculo" />
        </div>
        <div className="form-group">
          <label>Materia</label>
          <input type="text" name="materia" value={form.materia} onChange={handleChange} placeholder="Ej: Matemáticas" />
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Agregar Tarea</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default NuevaTarea;