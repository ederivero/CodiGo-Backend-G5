import React, { useEffect } from "react";
import { getServerInfo } from "./services/user.service";

function App() {
  // componentDidMount() > se mandara a llamar cuando el componente es cargado por primera vez (eso solo funciona en class components)
  useEffect(()=>{
    async function miFuncion(){
      const {data} = await getServerInfo()
      console.log(data);
    }
    miFuncion()
  }, [/* Cuando en array esta vacio indicara que solamente se mandara a llamar al callback del useEffect la primera vez que se renderice el componente */])


  return <div className="App">hola</div>;
}

export default App;
