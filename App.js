import React from 'react';
import HolaMundo from './components/HolaMundo';
import Tarjeta from './components/Tarjeta';
import Contador from './components/Contador';
import ListaTareas from './components/ListaTareas';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="app-container">
      <HolaMundo />
      <Tarjeta
        nombre="Joaquín"
        apellido="García"
        profesion="Desarrollador Frontend"
        imagen="/images/61d386e7a666f.jpg"
      />
      <Contador />
      <ListaTareas />
      <Formulario />
    </div>
  );
}

export default App;
