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
