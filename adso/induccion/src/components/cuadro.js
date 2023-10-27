import React from "react";
import "../estilos/cuadro.css";

export default function Cuadro(props){
    return(
        <div className="contenedor-cuadro">

            <img className="imagen-cuadro" src={require(`../image/${props.imagen}.jpg`)} alt="img1" />

            <div className="contenedor-texto">
                <p className="nom-cuadro">{props.nom}</p>
                <p className="edad-cuadro">{props.edad}</p>
                <p className="cargo-cuadro">{props.cargo}</p>
                <p className="exp-cuadro">{props.exp}</p>
            </div>
        </div>
    );
}