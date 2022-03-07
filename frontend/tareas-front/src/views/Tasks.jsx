import React, { useEffect } from 'react'
import { useState } from 'react'
import decode from 'jwt-decode'
import { listarTarea } from '../services/tarea.service'
import { Task } from '../components/Task'

export const Tasks = () => {

  // TODO: useContext para traer la informacion del usuario
  const token = localStorage.getItem('token')
  const [user, setUser] = useState()
  const [tareas, setTareas] =useState([])

  useEffect(()=>{
    setUser(decode(token))

    async function traerTareas (){
      try{
        const {data}  = await listarTarea(token)
        console.log(data);
        setTareas(data)
      }catch(e){
        alert('Error al traer la informacion')
      }
    }
    
    traerTareas()
  }, [token])


  return (
    <div>
    <div>
      {
        user && <h1> Hola {user.nombre} {user.apellido} </h1>
      }
      <h1>
        Hola {user?.nombre} {user?.apellido}
      </h1>
    </div>
      <div>
      {/* {...tareas} > le pasamos todos los props de la destructuracion de nuestra tarea */}
        {tareas.map((tarea)=>(<Task key={tarea._id} {...tarea} />))}
      </div>

    </div>
  )
}
