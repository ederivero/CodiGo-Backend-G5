import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

export const Index = () => {
    const navigate = useNavigate()
    
    const login = (e)=>{
        navigate('/login')
    }

  return (
    <div>
    <p>
        Bienvenido al front de las tareas 😝
    </p>
    <p>
        Tienes cuenta: entonces 
            <button onClick={login}>Inicia sesion</button> 
        caso contrario <Link to='/register'>crea una nueva cuenta</Link> </p>
    </div>
  )
}
