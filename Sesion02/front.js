console.log("Hola desde el navegador");

fetch("http://127.0.0.1:5000/productos", { method: "GET" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

fetch("http://127.0.0.1:5000/productos", {
  method: "POST",
  body: JSON.stringify({
    nombre: "Paneton con arto bromato",
    precio: 17.5,
    disponible: true,
    fecha_vencimiento: "2022-01-14",
  }),
  // los headers sirven para indicar al backend varias opciones para la transferencia de informacion como el Content-Type que servira para indicar que tipo de contenido estamos enviando mediante el body
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// usando ASYNC-AWAIT
const URL = "http://127.0.0.1:5000/productos";
const getData = async () => {
  try {
    const response = await fetch(URL, { method: "GET" });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
};
getData();
const postData = async () => {
  try {
    const enviar = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        nombre: "Paneton con arto bromato",
        precio: 17.5,
        disponiblre: true,
        fecha_vencimiento: "2022-01-14",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await enviar.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
};
postData();

// AHORA CON AXIOS
axios
  .get("http://127.0.0.1:5000/productos")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

axios
  .post("http://127.0.0.1:5000/productos", {
    nombre: "Paneton con arto bromato",
    precio: 17.5,
    disponiblre: true,
    fecha_vencimiento: "2022-01-14",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
