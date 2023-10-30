import React, { useState } from "react";

export default function Formulario() {
  //forma normal
  const [nom, setNom] = useState("");
  const [est, setEst] = useState("");
  const [docum, setDocum] = useState("");
  const [deport, setCondi] = useState(false);

  //Este codigo se hace despues de hacer el boton enviar
  const envio = (e) => {
    e.preventDefault(); //Hace que la pagina no c recargue cuando se envia
    alert("Enviado");
  };

  return (
    <div classNameName="contenedor-formu">
      <h2>FORMULARIOS</h2>
      <form onSubmit={envio}>
        {/* Type Text y TextArea */}
        <label htmlhtmlFor="nom">Nombre</label>
        <input
          type="text"
          id="nom"
          classNameName="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        {/* Type Radio */}
        <p>Jornada a Estudiar</p>
        <label htmlhtmlFor="mañana">Mañana</label>
        <input
          type="radio"
          id="mañana"
          classNameName="est"
          name="est"
          value="Mañana"
          onChange={(e) => setEst(e.target.value)}
          defaultChecked
        />

        <label htmlhtmlFor="tarde">Tarde</label>
        <input
          type="radio"
          id="tarde"
          classNameName="est"
          name="est"
          value="Tarde"
          onChange={(e) => setEst(e.target.value)}
        />

        <label htmlhtmlFor="noche">Noche</label>
        <input
          type="radio"
          id="noche"
          classNameName="est"
          name="est"
          value="Noche"
          onChange={(e) => setEst(e.target.value)}
        />

        {/* Select */}
        <p>Tipo de Documento</p>
        <select
          name="docum"
          onChange={(e) => setDocum(e.target.value)}
          defaultValue=""
        >
          <option value="rc">RC</option>
          <option value="ti">TI</option>
          <option value="cc">CC</option>
        </select>

        <br />

        {/* Checkbox */}
        <label htmlhtmlFor="condi">Acepta los terminos</label>
        <input
          type="checkbox"
          id="condi"
          name="condi"
          classNameName="condi"
          onChange={(e) => setCondi(e.target.checked)}
        />

        <br />

        {/* Submit */}
        <input type="submit" />
      </form>
    </div>
  );
}
