import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/user.service';

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

  const navigate = useNavigate()
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

  const crearPersona = async (e) =>{
    e.preventDefault();

    try{
      const {data, status} = await createUser(form)
      console.log(status);
      console.log(data);
      localStorage.setItem('token', data.token)
      
      alert('Se completo tu registro exitosamente')
      navigate('/tareas')
    }catch(e){
      // Aca ingresar cuando usemos axios y el status sea diferente que 2xx o 1xx
      // Para ingresar a la respuesta del error (mal request) tendremos que ingresar a su atributo response
      // console.log(e.response);

      alert(e.response.data.message)
    }
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
