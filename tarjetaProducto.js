const container = document.getElementById("product-container");

// 
// const botonAgregarProductos = document.getElementById("agregarProducto")


const botonAgregarProductos = document.getElementById("agregarProducto");

let nombreProducto = document.getElementById("product-container");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");







function agregarProductos(){

   


    let valorInputProducto = nombreProducto.value;
    let valorInputDescripcion = descripcionProducto.value;
    let valorInputImagen = imagenProducto.value;

    const productCard = document.createElement("div");

    console.log(valorInputDescripcion);
    console.log(valorInputDescripcion);
    console.log(valorInputDescripcion);

    productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> Descripcion: ${valirInputProducto}</p>
    <p> Precio: $9.99 </p>
    <button class="btn"> Agregar al carrito </button>
`;

container.appendChild(productCard);
}


botonAgregarProductos.addEventListener("click", agregarProductos)
