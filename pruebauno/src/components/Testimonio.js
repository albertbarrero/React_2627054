import React from "react";
import "../estilos/Testimonio.css"

export default function Testimonio(props){
  return(
    <div classNameName="contenedor-testi">
      <img 
        classNameName="imagen-testi"
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt="Foto 1" />

      <div classNameName="contenedor-text">
        <p classNameName="nom-testi"><strong>{props.nom}</strong></p>
        <p classNameName="edad-testi"><strong>{props.edad}</strong></p>
        <p classNameName="Cargo-testi">{props.cargo}</p>
        <p classNameName="text-testi">{props.text}</p>
      </div>
    </div>
  );
}

