import React, { useState } from "react";

export default function Formulario(){
    /*Forma avanzada*/
    /*Tipo texto, textarea */
    const [form, setForm] = useState({});

    const inputs = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };
    /*Tipo Check */
    const check = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        });
    };    

    const envio=(e) =>{
        e.preventDefault(); //Hace que la pagina no c recargue cuando se envia
        alert ("Enviado");
    }

    return (
        <div classNameName="contenedor-formu">
            <h2>FORMULARIOS</h2>
            <form onSubmit={envio}>

                {/* Type Text y TextArea */}
                <label htmlFor="nom">Nombres</label>
                <input type="text" id="nom" classNameName="nom" value={form.nom} onChange={inputs} />
                

                {/* Type Radio */}
                <p>Jornada a Estudiar</p>
                <label htmlFor="mañana">Mañana</label>
                <input type="radio" id="mañana" className="est" name="est" value="Mañana" onChange={inputs} defaultChecked />
                
                <label htmlFor="tarde">Tarde</label>
                <input type="radio" id="mañana" className="est" name="est" value="Mañana" onChange={inputs} />
                
                <label htmlFor="noche">Noche</label>
                <input type="radio" id="mañana" className="est" name="est" value="Mañana" onChange={inputs} />
                
                {/* Select */}
                <p>Tipo de Documento</p>
                <select name="docum" onChange={inputs} defaultValue="">
                    <option value="rc">RC</option>
                    <option value="ti">TI</option>
                    <option value="cc">CC</option>
                </select>

                <br />


                {/* Checkbox */}
                <label htmlFor="condi">Acepta los terminos</label>
                <input type="checkbox" id="condi" name="condi" className="condi" onChange={check} />
                
                <br />

                {/* Submit */}
                <input type="submit" />
            </form>
        </div>
    );
}