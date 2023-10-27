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
    <div className="contenedor-formu">
      <h2>FORMULARIOS</h2>
      <form onSubmit={envio}>
        {/* Type Text y TextArea */}
        <label htmlFor="nom">Nombre</label>
        <input
          type="text"
          id="nom"
          className="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        {/* Type Radio */}
        <p>Jornada a Estudiar</p>
        <label htmlFor="mañana">Mañana</label>
        <input
          type="radio"
          id="mañana"
          className="est"
          name="est"
          value="Mañana"
          onChange={(e) => setEst(e.target.value)}
          defaultChecked
        />

        <label htmlFor="tarde">Tarde</label>
        <input
          type="radio"
          id="tarde"
          className="est"
          name="est"
          value="Tarde"
          onChange={(e) => setEst(e.target.value)}
        />

        <label htmlFor="noche">Noche</label>
        <input
          type="radio"
          id="noche"
          className="est"
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
        <label htmlFor="condi">Acepta los terminos</label>
        <input
          type="checkbox"
          id="condi"
          name="condi"
          className="condi"
          onChange={(e) => setCondi(e.target.checked)}
        />

        <br />

        {/* Submit */}
        <input type="submit" />
      </form>
    </div>
  );
}
