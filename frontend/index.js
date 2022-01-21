console.log("yo soy el front");
const btnProductos = document.getElementById("btnProductos");

async function traerProductos() {
  const result = await fetch("http://localhost:3000/productos");
  const data = await result.json();
  console.log(data);
}

btnProductos.addEventListener("click", (e) => {
  e.preventDefault();
  traerProductos();
});
