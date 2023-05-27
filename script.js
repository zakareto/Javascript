//alert("Estoy vivoooooo!");

console.log("Status de la mama de Bambi " + mamaDeBambiViva);

/*
Variables

Es un elemento del cual su valor puede cambiar o variar dependiendo la circunstancia. Esta varible ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable que tenemos.


Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente

*/


console.log(recipiente);



//Ejemplos de variables
var recipiente = "agua";




//Usamos esta linea de codigo para imprimir o mostrar la informacion de mi recipiente
console.log(recipiente);



//Declarar vs inicializar

// quieresSerMiNovia;
// varible1;
// altura;
// peso;
// genero;


/*

Tipos de datos (primitivos y no primitivos)

Se llaman primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato mas simple o mas basico que existe.


    - String: Sirve para agregar valores en forma de texto. Para que se considere asi, el valor debe estar dentro de comillas simples (''), dobles ("") y backticks (``)


    - Number: Sirve para agregar valores en formato numerico (para poder usarlos en operaciones aritmeticas). Estos valores no usan comillas.


    - Boolean: Sirven para representar valores del tipo true o false (encendido o apagado, 0 y 1, si y no).


    - Undefined: Sirve para representar un tipo de dato que no tiene valor. Cuando declaramos variables sin inicializar, tendremos datos del tipo undefined.


    - Null: Sirve para definir que un valor es nulo. 


    - NaN (Not at Number): Sirve para representar un valor que no es un numero. Lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.


    - Symbol 


    - Object (no es primitivo)


*/

// Ejemplo para la concatenacion

apodoDeFelipe = 'El "amante numero uno" de los chilaquiles verdes';
console.log(apodoDeFelipe);


// Ejemplos de valores numericos

edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);


// Ejempos de valores booleanos
esAdministrador = true;
contraseniaCorrecta = false;
cuentaPremium = false;


// Ejemplos de datos indefinidos
//respuestaDeMiCrush;
//precioBoletoEstacionamiento;




//Ejemplos de valores nulos
respuestaDeMiCrush = "no";

respuestaDeMiCrush = null;

respuestaDeMiCrush = "si";

console.log(respuestaDeMiCrush);



// Ejemplo con valores NaN

operacionMatematica = 0/0;

console.log(operacionMatematica);



/* TypeOf 

Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaluando

typeof(elDatoAvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.



*/
console.log(typeof(esAdministrador)); //boolean
console.log(typeof(edadDeFelipe)); // number
console.log(typeof(operacionMatematica)); //number

console.log(typeof(false)); //boolean



/*Tipos de variables

En JS tenemos 3 tipos principales de variables:


    - var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope (alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa. 


    - let: Lo usamos para limitar el alcance de nuestras variables (scope), y si limita a un bloque de codigo o expresion (meter a la mama de bambi en una cajita), es una variable local.
 


    - const: Se usan para declarar una variable con un valor constante o inmutable (que no cambia). 



*/


//Es este caso, la mama de Bambi esta visible desde cualquier lugar del programa
var mamaDeBambiViva = false;

var cazador = "listo para disparar";

let nombre = "Felipe Maqueda";

const pi = 3.1416;


let descuentoDeMiEcommerce = 10;


/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon

*/


//1- Creamos la funcion con la palabra reservada function y le ponemos un nombre. Despues, abrimos y cerramos parentesis y abrimos y cerraremos llaves {}. Los parentesis son para nuestros parametros o argumentos, y las llaves para delimintar el bloque o la funcion.


//2- Ponemos nuestros parametros (variables) dentro de los parentesis

//3- Poner las instrucciones dentro de las llaves, utilizando los parametros o argumentos.

//4-Invocar la funcion escribiendo su nombre y abrimos y cerramos parentesis.





function prepararAguitaDeLimon(){
    
    let limon = "limon";
    let agua = "agua";
    let hielos = "hielos";
    let azucar = "azucar";
    let vaso = "vaso";
    let cuchara = "cuchara";
    
    console.log("Cortar el limon " + limon);
    console.log("Exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso " + vaso);
    console.log("Agregamos los hielos al vaso " + hielos);
    console.log("Agregamos el agua al vaso " + agua);
    console.log("Endulzamos al gusto " + azucar);
    console.log("Mezclar y disfrutar " + cuchara);
    console.log("Que rica aguita de limon");

    console.log(cuchara);

}



prepararAguitaDeLimon();

console.log(recipiente);



// Ejemplo de las 3 formas de agregar parametros a funciones

//Primera forma: Usando parametros dentro de parentesis e inicializando dentro de la funcion
function suma(a, b){ //valores estan en undefined (declaro)

    //Inicializo
    var a = 5; //cambio el undefined por 5
    var b = 7; //cambio el undefined por el 7

    operacion = a + b; //hago mi suma utilizando los dos valores

    console.log(operacion); //imprimir mi operacion
}

suma(); //invocamos la funcion




//Segunda forma: Usando parametros dentro de parentesis, ya inicializados
function resta (a = 8, b = 5){

    operacion = a - b;

    console.log(operacion);

}

resta();



//Tercera forma: Inicializando valores dentro de la invocacion
function multiplicacion (a, b){
    operacion = a * b;
    console.log(operacion);
}

multiplicacion(3, 9);
multiplicacion(5, 7);
multiplicacion(13, 9);
multiplicacion(36, 97);
multiplicacion(11, 80);
multiplicacion(10, 3);
multiplicacion(13, ); //Se imprime NaN porque nos falta un parametros

// funciones anonimas

let funcionAnonima = function (a,b){
    operacion = a/b;
    console.log(operacion);
}


//console.log(funcionAnonima);
funcionAnonima(10, 5);


//return 
//saludo personalizado

function saludo (){

let nombreSaludo = "felipe"
let apellidoSaludo = "maqueda"
 console.log("hola " + nombreSaludo + ", que bueno que usas nuestra app")

 return nombreSaludo+ " " + apellidoSaludo
}

saludo();

const nombreQueSaqueDeMiFuncion = saludo();
console.log("estas son las personas que han iniciado sesion en mi aplicacion"+nombreQueSaqueDeMiFuncion)



prompt("introduce tu nombre")