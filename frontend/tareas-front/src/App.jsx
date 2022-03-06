import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom'
import { PrivateRoute } from "./PrivateRoute";
import { getServerInfo } from "./services/user.service";
import { Index } from "./views/Index";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Tasks } from "./views/Tasks";

function App() {
  // componentDidMount() > se mandara a llamar cuando el componente es cargado por primera vez (eso solo funciona en class components)
  useEffect(()=>{
    async function miFuncion(){
      const {data} = await getServerInfo()
      console.log(data);
    }
    miFuncion()
  }, [/* Cuando en array esta vacio indicara que solamente se mandara a llamar al callback del useEffect la primera vez que se renderice el componente */])


  return (<Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login /> } />
      <Route 
        path="/tareas"
        element={
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>);
}

export default App;
