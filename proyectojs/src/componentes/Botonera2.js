import React, { useState } from 'react';

function Button1() {
  // Inicializamos el estado para almacenar el contador
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Función para incrementar el contador en 1
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Función para decrementar el contador en 1
  const decrementar = () => {
    setContador(contador - 1);
  };
  const incrementar2 = () => {
    setContador2(contador + contador2);
  };

  // Función para decrementar el contador en 1
  const decrementar2 = () => {
    setContador2(contador - contador2);
  };


  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar +1</button>
      <button onClick={decrementar}>Decrementar -1</button>
      <p>Contador: {contador2}</p>
      <button onClick={incrementar2}>Incrementar +1</button>
      <button onClick={decrementar2}>Decrementar -1</button>
    </div>
  );
}

export default Button1;
