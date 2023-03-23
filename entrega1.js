
let ArticulosEnVenta= []; // Array vacío para almacenar los artículos en venta
let ArticuloVendidos = []; // Array vacío para almacenar los artículos vendidos

// Funciones esenciales
function AgregarItem(item) {
    ArticulosEnVenta.push(item); // Agrega un artículo a la lista de artículos en venta
  alert("El artículo se ha agregado correctamente.");
}

function sellItem(index) {
  const item = ArticulosEnVenta.splice(index, 1)[0]; // Elimina el artículo vendido del array de artículos en venta y lo guarda en una variable
  ArticuloVendidos.push(item); // Agrega el artículo vendido al array de artículos vendidos
  alert(`El artículo '${item.nombre}' se ha vendido por $${item.precio}.`);
}

// Objeto
class Article {
  constructor(nombre, precio, condition) {
    this.nombre = nombre;
    this.precio = precio;
    this.condition = condition;
  }
}

// Array de artículos
const articulos = [
  new Articulos("Camiseta", 1000, "Nueva"),
  new Articulos("Gorra", 500, "Usada"),
  new Articulos("Bufanda", 250, "Nueva"),
  new Articulos("Pantalón", 1500, "Usado")
];

// Funciones de interacción con el usuario
function AgregarItem() {
  const nombre = prompt("Ingrese el nombre del artículo:");
  const precio = parseInt(prompt("Ingrese el precio del artículo:"));
  const condition = prompt("Ingrese la condición del artículo (Nueva/Usada):");

  const articulo = new Articulo(nombre, precio, condition);
  AgregarItem(articulo);
}

function seleccionArticulo() {
  const name = prompt("Ingrese el nombre del artículo que desea vender:");
  const articleIndex = itemsForSale.findIndex(article => article.name === name);

  if (articleIndex !== -1) {
    seleccionItem(articleIndex);
  } else {
    alert("El artículo no se encuentra en venta.");
  }
}

// Ciclo principal de interacción con el usuario
while (true) {
  const choice = parseInt(prompt("¿Qué desea hacer?\n1. Agregar artículo a la venta\n2. Vender artículo\n3. Salir"));

  switch (choice) {
    case 1:
        seleccionArticulo();
      break;
    case 2:
      seleccionArticulo();
      break;
    case 3:
      alert("Gracias por usar nuestro sistema de compra y venta de artículos de San Lorenzo.");
      break;
    default:
      alert("Opción inválida. Por favor, seleccione una opción válida.");
  }

  if (choice === 3) {
    break;
  }
}