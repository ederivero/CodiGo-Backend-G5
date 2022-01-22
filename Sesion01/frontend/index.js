console.log("yo soy el front");
const btnAddProducto = document.getElementById("btnAddProducto");
const btnProductos = document.getElementById("btnProductos");
const tabla = document.getElementById("tabla");
const BASE_URL = "http://localhost:3000";

// agrego el evento a mi boton de agregar producto
btnProductos.addEventListener("click", (e) => {
  e.preventDefault();
  traerProductos();
});

// agrego el evento a mi boton de agregar producto
btnAddProducto.addEventListener("click", (e) => {
  e.preventDefault();
  agregarProducto();
});

// traerProductos();

// defino la funcionabilidad del agregar producto
async function agregarProducto() {
  // emito un modal con Sweet alert con un formulario para el nuevo producto https://sweetalert2.github.io/#input-types
  const result = await Swal.fire({
    title: "Agregar Producto",
    html: `
    <div>
    <label for="swal-input1">Nombre</label>
    <input id="swal-input1" class="swal2-input">
    </div>
    <div>
    <label for="swal-input2">Precio</label>
    <input type="number" id="swal-input2" class="swal2-input">
    </div>
    <div>
    <label for="swal-input3">Estado</label>
    <input type="checkbox" name="" id="swal-input3"/>
    </div>`,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
        document.getElementById("swal-input3").checked,
      ];
    },
  });
  // si se presiono el boton OK entonces se creara un nodo value en el objeto de result
  if (result.value) {
    // extraigo la informacion ingresada
    const [nombre, precio, estado] = result.value;
    // emito el metodo post para la creacion de un nuevo producto indicando sus headers y su body en forma de un string
    const resultado = await fetch(`${BASE_URL}/producto`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio, estado }),
    });
    // valido si el resultado es 201 (CREATED) entonces indicare que la creacion fue exitosa
    if (resultado.status === 201) {
      await traerProductos();
      Swal.fire("Producto agregado exitosamente", "", "success");
    } else {
      Swal.fire("Error al crear el producto", "", "error");
    }
  }
}

// defino la logica para traer los productos
async function traerProductos() {
  // hare una consulta con un metodo GET (no es necesario definirlo ya que si no lo ponemos fetch lo tomara como un GET)
  const result = await fetch(`${BASE_URL}/productos`);

  // extraemos el nodo content del json proveniente del back
  const { content } = await result.json();

  // limpiamos la tabla antes de insertar los valores para evitar duplicidad
  tabla.innerHTML = "";

  // creamos la cabecera de la tabla
  const header = document.createElement("tr");
  header.innerHTML = `
  <th>ID</th>
  <th>NOMBRE</th>
  <th>PRECIO</th>
  <th>ESTADO</th>
  <th>ACCIONES</th>`;

  // agregamos la cabecera
  tabla.appendChild(header);

  // iteramos el contenido al ser un arreglo y en cada vuelta tendremos lo que vendria a ser el producto y su indice (id)
  content.forEach((producto, id) => {
    // definimos cada fila de la tabla con la creacion de sus respectivas columnas
    const fila = document.createElement("tr");
    const cellId = document.createElement("td");
    const cellNombre = document.createElement("td");
    const cellPrecio = document.createElement("td");
    const cellEstado = document.createElement("td");
    const cellAcciones = document.createElement("td");
    cellId.innerText = id + 1;
    cellNombre.innerText = producto.nombre;
    cellPrecio.innerText = producto.precio;
    // validamos el estado
    cellEstado.innerText = producto.estado ? "✅ " : "❌";
    // agregamos las acciones para editar y eliminar
    cellAcciones.innerHTML = `<button onclick='editar(${JSON.stringify(
      producto
    )},${id + 1})'>Editar</button><button onclick='eliminar(${
      id + 1
    })'>Eliminar</button>`;

    fila.appendChild(cellId);
    fila.appendChild(cellNombre);
    fila.appendChild(cellPrecio);
    fila.appendChild(cellEstado);
    fila.appendChild(cellAcciones);

    // agregamos la fila a la tabla
    tabla.appendChild(fila);
  });
}

// definimos la logica para eliminar
function eliminar(id) {
  // emitimos un mensaje de advertencia
  Swal.fire({
    title: "Estas seguro que quieres eliminar este producto?",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "No",
  }).then(async (result) => {
    // si el resultado es confirmado procedemos a hacer un metodo DELETE con el id a eliminar, en este caso no necesitamos un body
    if (result.isConfirmed) {
      const result = await fetch(`${BASE_URL}/producto/${id}`, {
        method: "DELETE",
      });

      // validamos la respuesta
      if (result.status === 200) {
        await traerProductos();
        Swal.fire("Eliminado exitosamente", "", "success");
      } else {
        Swal.fire("Error al eliminar el producto", "", "error");
      }
    }
  });
}

// definimos la logica para editar
async function editar(producto, id) {
  // creamos un modal con un formulario con la informacion del producto para llenar los campos dados como el nombre, precio y estado
  const result = await Swal.fire({
    title: "Editar Producto",
    html: `
    <div>
    <label for="swal-input1">Nombre</label>
    <input id="swal-input1" class="swal2-input" value="${producto.nombre}">
    </div>
    <div>
    <label for="swal-input2">Precio</label>
    <input id="swal-input2" class="swal2-input" value=${producto.precio}>
    </div>
    <div>
    <label for="swal-input3">Estado</label>
    <input type="checkbox" name="" id="swal-input3" ${
      producto.estado ? "checked" : ""
    }/>
    </div>`,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
        document.getElementById("swal-input3").checked,
      ];
    },
  });
  // si se presiono el boton OK entonces se creara un nodo value en el objeto de result
  if (result.value) {
    const [nombre, precio, estado] = result.value;
    // hacemos un put a la API para modificar el producto con relacion a su id y su nueva informacion
    const resultado = await fetch(`${BASE_URL}/producto/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio, estado }),
    });

    // validamos el resultado
    if (resultado.status === 200) {
      await traerProductos();
      Swal.fire("Producto actualizado exitosamente", "", "success");
    } else {
      Swal.fire("Error al actualiar el producto", "", "error");
    }
  }
}
