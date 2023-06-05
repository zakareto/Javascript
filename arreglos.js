/*

Arreglos (arrays, matrices, colecciones de datos)


En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.




*/
//formas de declararlo

//1. usando corchetes[]

var miArray = [1,2,3,4,5,6]



//variable sin inicializar
var miArray2;

//variable sin asignar

["azul", "rojo", "naranja", "verde"]

//variable colores decladarada e inicializada
var colores = ["azul", "rojo", "naranja", "verde", ["verde pastel", "amariillo pastel", "rosa pastel"]]

//diferentes tipos en un mismo array

var datosDeFelipe = ["Felipe", 31, "guadalajara", "nikky", true, undefined, null]

//cada asignatura esta asociada a una variable individual
var asignatura1 = "matematicas";
var asignatura2 = "literatura";
var asignatura3 = "fisica";

//array
var asignaturas = ["matematicas", "literatura", "fisica"]

//acceso a los elementos

console.log("El elemento de la posicion 2 es:" + asignaturas[2]);

//si accedemos a una posicion que no existe muestra undefined

console.log("El elemento de la posicion 2 es:" + asignaturas[10]);


//longitud del arreglo
console.log(asignaturas.length)


//ejemplos de arrays

//array de carrito de compra

var carrito = [ "pantalon", "camisa", "corbata"];

var publicacion = ["Felipe", 137, "29-mayo-2023"]

console.log(publicacion)


//modificar los elementos del array

//reasignamos el valor a un elemento del arreglo usando el index

publicacion[1]=138;

console.log(publicacion);

//no teniamos un elemento en la posicion(index) 4 (indefinido = 150;)
publicacion[4] = 150;

//metodo para agregar elementos al final de un arreglo
asignaturas.push("biologia")

console.log(asignaturas)
asignaturas.push("ingles")
console.log(asignaturas)


//metodo para eliminar el ultimo elemento de un arreglo

asignaturas.pop();
console.log(asignaturas);

//metodo para agregar elementos al principio del array

asignaturas.unshift("quimica", "educacion fisica", "artes");
console.log(asignaturas);

//metodo para eliminar elementos del principio

asignaturas.shift()
console.log(asignaturas);


//metodo para saber si mi arreglo incluye un elemento especifico

let carritoDeWalmart = ["gansitos", "cocacola","galletas maria", "mazapan"]
regalo = carritoDeWalmart.includes("Coquita");

if (regalo ===true){
    console.log("te regalo una sarten");
}

var amigos =["felipe","mariana","fernanda", "maara","gaby"]

var mejoresAmigos;

var publico;
if(!amigos){
    console.log("Mi Meme de bob esponja");

}

//metodo para concatenar arreglos

var listaDeGolosinas = ["gansitos", "cocacola","galletas maria", "mazapan"]

var listaDeFrutasYVerduras= ["manzanas","mangos", "Toronjas", "platanos", "fresas"];


var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutasYVerduras);

console.log(listaDeComprasDeLaQuincena);


//metodo para buscar un elemento en el array y devolver el indice de la primera coincidencia. si no encuentra retorna -1



console.log(listaDeComprasDeLaQuincena.indexOf("toronjas"))


//metodo para unir elementos de un arreglo en una cadena de texto

console.log(listaDeComprasDeLaQuincena.join(' *** '))


// Modificacion del arreglo (push, pop, shift, unshift, splice)

// Acceso y busqueda de elementos (indexOf, lastIndexOf, includes)

// Transformacion de elementos (sort, reverse, map, forEach)

// Operaciones logicas (every, some)

// Creacion de nuevos arreglos (slice, concat, join, reverse)



/*splice (agregar, eliminar o reemplazar elementos en posiciones especificas)


sintaxis del splice

array.splice(iniciamos, numeroElementosABorrar, ElementoAInertar, ElementoAinsertar)
*/


//splice para borrar

var abecedario = ["a", "b", "c", "d", "e"]


abecedario.splice(2,2)

console.log(abecedario)

//splice para insertar elementos
abecedario.splice(2,0,"c","d")

console.log(abecedario)

//splice para reemplazar
var vocales = ["a", "e", "i", "o", "u"]
vocales.splice(1,2,"comer", "comer", "comer")

console.log(vocales);