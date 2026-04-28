import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import ListaTareas from './components/ListaTareas.jsx';
import NuevaTarea from './pages/NuevaTarea.jsx';
import DetalleTarea from './pages/DetalleTarea.jsx';
import { useTareas } from './context/TareasContext.jsx';

function App() {
  const { tareas } = useTareas();
  const pendientes = tareas.filter(t => !t.completada).length;

  return (
    <BrowserRouter>
      <Header pendientes={pendientes} />
      <Routes>
        <Route path="/" element={<ListaTareas />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;