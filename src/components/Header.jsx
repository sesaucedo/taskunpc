import { Link } from 'react-router-dom'; 

function Header({ pendientes }) {
  return (
    <header>
      <h1>📚 Mis Tareas</h1>
      <p>{pendientes} tarea{pendientes !== 1 ? 's' : ''} pendiente{pendientes !== 1 ? 's' : ''}</p>
      <Link to="/nueva">+ Nueva Tarea</Link>
    </header>
  );
}

export default Header;