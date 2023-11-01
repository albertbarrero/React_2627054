import React from "react";
import "../estilos/cuadro.css";

export default function Cuadro(props){
    return(
        <div classNameName="contenedor-cuadro">

            <img classNameName="imagen-cuadro" src={require(`../image/${props.imagen}.jpg`)} alt="img1" />

            <div classNameName="contenedor-texto">
                <p classNameName="nom-cuadro">{props.nom}</p>
                <p classNameName="edad-cuadro">{props.edad}</p>
                <p classNameName="cargo-cuadro">{props.cargo}</p>
                <p classNameName="exp-cuadro">{props.exp}</p>
            </div>
        </div>
    );
}