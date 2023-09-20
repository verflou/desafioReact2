import React from 'react';
import './App.css';
import Navbar from './componentes/navbar';
import Botonera from './componentes/BotoneraMaster';
import Horario from './componentes/Horario';

function App() {
  return (
    <div className='MyApp'>
      <Navbar/>
      <Botonera/> 
      <Horario/>
    </div>
  );
}

export default App;
