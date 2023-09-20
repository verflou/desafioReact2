import React, { useState } from 'react';
import './BotoneraMaster.css';

function Botonera() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [fecha, setFecha] = useState(new Date()); // Estado para almacenar la fecha

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function incrementar2() {
    setContador2(contador2 + contador);
    const nuevaFecha = new Date();
    nuevaFecha.setDate(nuevaFecha.getDate() + contador2);
    setFecha(nuevaFecha);
  }

  function decrementar2() {
    setContador2(contador2 - contador);
    const nuevaFecha = new Date();
    nuevaFecha.setDate(nuevaFecha.getDate() + contador2);
    setFecha(nuevaFecha);
  }

  return (
    <div className="container">
      <h1 className="fechaText" style={{ textAlign: 'center' }}>Fecha original: <br /> {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</h1>
      <div className="button-container">
        <button onClick={incrementar}>Incrementar</button>
        <p className="c1">Contador: {contador}</p>
        <button onClick={decrementar}>Decrementar</button>
      </div>
      
      <div className="button-container">
        <button onClick={incrementar2}>Sumar</button>
        <p className="c">Contador: {contador2}</p>
        <button onClick={decrementar2}>Restar</button>
      </div>
  
      <h1 className="fechaText1">
        Es {fecha.getDate()} de {fecha.toLocaleDateString('es-ES', { month: 'long' })} del {fecha.getFullYear()}
      </h1>
    </div>
  );
  
}

export default Botonera;
