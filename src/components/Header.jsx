function Header({ pendientes }) {
  return (
    <header>
      <h1>📚 Mis Tareas</h1>
      <p>{pendientes} tarea{pendientes !== 1 ? 's' : ''} pendiente{pendientes !== 1 ? 's' : ''}</p>
    </header>
  );
}

export default Header;