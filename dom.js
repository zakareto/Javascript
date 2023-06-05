/*DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.

Elememntos del dom

todos los elementos del dom se consideran nodos.

- document (es el nodo raiz)
-element (todas las etiquetas de html)
- texto dentro de la etiqueta
-atributo (los que pueden tener las etiquetas)


comunicacion entre html y js


metodos de seleccion de elementos

son elementos que nos van a permitir seleccionar uno o varios elementos o grupos de ellos del dom. estos metodos se utilizan en el documento, por eso se agrega un document.getElement


tradicionales

//getElementByID
//getElementByClassName
//getElementsByTagName

modernos



*/
let parrafo = document.getElementById("parrafo1")

parrafo.style.color="blue";
parrafo.innerHTML="hola Felipe, bienvenido. puedes comprar"

console.log(parrafo);

var parrafitos = document.getElementsByClassName("parrafos");

var parrafosEtiqueta = document.getElementsByTagName("p");
console.log(parrafosEtiqueta);


//metodos mas actuales
var parrafoQuerySelector = document.querySelector("#parrafo1");


var parrafoQuerySelectorAll = document.querySelectorAll(".parrafos");

console.log(parrafoQuerySelectorAll);


/*eventos (accion y reaccion)

los eventos son formas de modificar o altear el contenido de un elemento. los eventos son acciones que se pueden realizar sobre un elemento u objeto y se usan para modificar atributos, estilos, textos o para invocar funciones de js


*/


//funcion llamada cambiaColor donde se manda un color como parametro
function cambiaColor(color){
    parrafitos.style.color = color
}



const botonCambiarColor = document.querySelector("#botonCambiarColor");


botonCambiarColor.addEventListener("click", function(){
    alert("hola, has presionado el boton")
})