//1. Creamos un arreglo de objetos para nuestras tareas, estas tareas tendran atributos como id, titulo, estatus completada o no completada

//Esto donde se ejecuta? Del lado del cliente 

let tareas = [
    {
        id : 1,
        titulo : "Baniar al perro",
        estatus : true,
    },
    {
        id : 2,
        titulo : "Preparar la comida",
        estatus : false,
    }
]


//Enviar ese arreglo al servidor 
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);



//Ejemplo del carrito de compras

//Declaramos un arreglo de objetos vacio
let carritoDeCompras = [];

//Producto de mi catalogo
let producto = {
    id : 1,
    nombre : "Camisa de Pokemon",
    precio: 299.99,
    cantidad: 1
};

//Mostrar informacion del carrito de compras
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //undefined

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);

//Muestro la nueva informacion de mi carrito
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1


//Actualizar la cantidad de productos en el carrito
let productoAModificar = 1; //producto a actualizar
let nuevaCantidad = 3; //cantidad nueva de productos que voy a comprar

//Verifico si mi producto existe dentro del carrito de compras para poder modificarlo, si exsite, actualizo la cantidad, si no, no hago nada. Todo esto se evalua con base en el id que estoy buscando y este debe coincidir con el id del producto que deberia tener dentro de mi carrito de compras.
let productoExiste = carritoDeCompras.find(function(producto){
    return producto.id === productoAModificar; //true or false
})
if (productoExiste) {
    productoExiste.cantidad = nuevaCantidad;
}

console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1

console.log(producto);



//eliminar producto de carrito

let productoAEliminar = 1;


//reviso el id del producto en cada uno de los indices del arreglo, si encuentro un indice igual al que quiero borrar, lo elimino
let indiceProductoAEliminar = carritoDeCompras.findIndex(function (producto){
    return producto.id === productoAEliminar; //true o false
});

if (indiceProductoAEliminar !== -1){
    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}

/*
//Con funcion flecha 
carritoDeCompras.find(producto => producto.id === productoId);


//Sin funcion flecha

carritoDeCompras.find(function(producto){
    return producto.id === productoID; //true or false
})

*/


let total = 0;

carritoDeCompras.push(producto);

carritoDeCompras.forEach(function(producto){
    total+= producto.precio * producto.cantidad;
})