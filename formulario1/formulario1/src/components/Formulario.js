import React, { useState } from 'react'

export default function Formulario() {

    const [form, setForm] = useState({});

    const inputs = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const check = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        })
    }

    return (
        <div>

            <form>
                <div className="mb-3">
                    <label htmlhtmlFor="nom" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nom"
                        aria-describedby="emailHelp"
                        onChange={inputs}
                        value={form.nom}
                    />

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="est"
                            id="mañana"
                            value="mañana"
                            onChange={inputs}

                        />
                        <label className="form-check-label" htmlFor="mañana">
                            Mañana
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="est"
                            id="tarde"
                            value="tarde"
                            onChange={inputs}

                        />
                        <label className="form-check-label" htmlFor="tarde">
                            Tarde
                        </label>
                    </div>

                    <div className="mb-3 form-check">
                        <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="condi" 
                        name='condi'
                        onChange={check}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Acepto las condiciones</label>

                    </div>

                </div>



                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>
    )
}