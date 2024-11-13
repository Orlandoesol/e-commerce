
 //Carrito de compras
// Carrito de compras: una lista de productos con su nombre, precio y cantidad
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio, cantidad: 1});
  actualizarCarrito();
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  const carritoItems = document.getElementById('carrito-items');
  // Limpiamos el contenido del carrito
  carritoItems.innerHTML = '';

  let total = 0;

  // Si el carrito está vacío, mostramos un mensaje
  if (carrito.length === 0) {
    carritoItems.innerHTML = '<p>Aún no has agregado productos al carrito.</p>';
  } else {

  // Si el carrito tiene productos, los mostramos
    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;
        carritoItems.innerHTML += `
            <div class="cart-item d-flex justify-content-between align-items-center">
                <span>${producto.nombre}</span>
                <span>$${producto.precio}</span>
                <span>
                <button class="btn btn-secondary btn-sm" onclick="modificarCantidad(${index}, -1)">-</button>
                ${producto.cantidad}
                <button class="btn btn-secondary btn-sm" onclick="modificarCantidad(${index}, 1)">+</button>
                </span>
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
            </div>
            `;
        });
    }
    document.getElementById('total').textContent = total.toFixed(2);
}

// Función para modificar la cantidad de un producto
function modificarCantidad(index, cantidad) {
  const producto = carrito[index];

  // Si la cantidad es negativa, solo decrementamos si es mayor que 1
  if (cantidad < 0 && producto.cantidad > 1) {
    producto.cantidad += cantidad;
  } else if (cantidad > 0) {
    producto.cantidad += cantidad;
  }

  actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
  carrito.splice(index, 1); // Eliminamos el producto del carrito
  actualizarCarrito();
}


// Función para alternar el menú de navegación en dispositivos móviles
$(document).ready(function() {
  // Detectamos el clic en el botón hamburguesa
  $('.navbar-toggler').click(function() {
    // Alternamos la visibilidad del menú
    $('#navbarSupportedContent').toggleClass('collapse');
  });
});
