import React from 'react'
import { useState } from 'react';

export const Register = () => {
  const paises = ["BRAZIL",
  "COLOMBIA",
  "PERU",
  "CHILE",
  "URUGUAY",
  "ARGENTINA",
  "PARAGUAY",
  "BOLIVIA",
  "ECUADOR",
  "GUYANA FRANCESA",
  "VENEZUELA",
  "SURINAM"]

  const [form, setForm] = useState({
    nombre:'',
    apellido:'',
    correo:'',
    password:'',
    pais:''
  })

  const editarValor = (e)=> {
    setForm((preValue) => ({...preValue, [e.target.id]: e.target.value}))
    
  }

  const crearPersona = (e) =>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <form action="POST" onSubmit={crearPersona}>
        <div>
          <label htmlFor="nombre">Ingresa tu nombre</label>
          <input type="text" id='nombre' onChange={editarValor}/>
        </div>
        <div>
          <label htmlFor="apellido">Ingresa tu apellido</label>
          <input type="text" id='apellido' onChange={editarValor} />
        </div>
        <div>
          <label htmlFor="correo">Ingresa tu correo</label>
          <input type="text" id='correo' onChange={editarValor}/>
        </div>
        <div>
          <label htmlFor="password">Ingresa tu password</label>
          <input type="text" id='password' onChange={editarValor}/>
        </div>
        <div>
          <label htmlFor="pais">Ingresa tu pais</label>
          <select onChange={editarValor} id='pais'>
            {
              paises.map(pais=> <option key={pais}> {pais} </option>)
            }
          </select>
        </div>
        <div>
          <button>Crear cuenta</button>
        </div>
      </form>
    </div>
  )
}
