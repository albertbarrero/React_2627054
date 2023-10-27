import React from "react";
import "../estilos/Testimonio.css"

export default function Testimonio(props){
  return(
    <div className="contenedor-testi">
      <img 
        className="imagen-testi"
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt="Foto 1" />

      <div className="contenedor-text">
        <p className="nom-testi"><strong>{props.nom}</strong></p>
        <p className="edad-testi"><strong>{props.edad}</strong></p>
        <p className="Cargo-testi">{props.cargo}</p>
        <p className="text-testi">{props.text}</p>
      </div>
    </div>
  );
}

