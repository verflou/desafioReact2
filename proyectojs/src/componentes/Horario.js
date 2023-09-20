import React, { useState, useEffect } from "react";
import './horario.css';
import diaImg from '../img/sol.png';
import nocheImg from '../img/luna-creciente.png';

function Horario() {
  const [hora] = useState(new Date());
  const [imagen, setImagen] = useState(diaImg,nocheImg);

  useEffect(() => {
    const actualizarImagenSegunTiempo = () => {
      const horaActual = hora.getHours();
      if (horaActual >= 7 && horaActual <= 19) {
        setImagen(diaImg);
      } else {
        setImagen(nocheImg);
      }
    };
    const intervalo = setInterval(actualizarImagenSegunTiempo, 60000);
    actualizarImagenSegunTiempo();
    return () => clearInterval(intervalo);
  }, [hora]);
  return (
    <nav className="Horario">
      <div className="img">
        <img src={imagen} alt="Imagen de día" />
      </div>
    </nav>
  );
}

export default Horario;
