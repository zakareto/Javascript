/*

Bucles e iteracion

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones. Gracias a esto vamos a poder automatizar tareas repetitivas.


    - While (mientras)
    - Do While (hacer mientras)
    - For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.

*/


/* Estructura basica de un while

while (tenerSueño && tenerUnaCamita) {
    //hacer la dormicion
}





Ejemplo de un ciclo o bucle infinito

while (true){
    //bloque de codigo a ejecutar
}

*/

/*
let rolDeUsuario = "registrado"; //esto ya esta definido


while (!"registrado") { //la evaluacion es sobre el rol
    
    function registrarUsuario(){
        console.log("Usuario Registrado");
    }

}


dejaloComprar();


Casos de uso del ciclo While

 -Para verificar si un usuario esta registrado o no
 -Verificamos la disponibilidad de un producto (stock)
 -Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizar informacoin, etc.)
 -Recorrer publicaciones de un usuario
 -Contador de likes
 -Seguimiento de seguidores

*/


//Codigo de mi sopita de verduritas con pollito



//Declaro e inicializo un array con mis ingredientes
var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"]; //6 elementos


//Declaramos una variable llamada contador inicializada en 0, para usarla como un contador
var ingredientesAgregadosALaOlla = 0;


//Mientras los ingredientes agregados a la olla sean menos que los ingredientes que me queden disponibles...
while (ingredientesAgregadosALaOlla < ingredientes.length){

    //... ire agregando ingredientes a la olla...
    console.log("Agregando " + ingredientes[ingredientesAgregadosALaOlla] + " a la olla");

    //... y voy aumentando el contador para saber cuando parar
    contador ++;
}

console.log("La sopita ya esta lista, yumi");


/*

Do - While (hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa


do {
    //bloque de codigo que vamos a ejecutar
}

*/

console.log("Ejemplo de Galletitas con Do-While")

//variable tiempo de coccion que servira como contador
var tiempoTranscurridoDeCoccion = 0;


//usamos el ciclo do-while
do {
    console.log("Horneando las galletas...");
    tiempoTranscurridoDeCoccion +=5;

//Todo el bloque de codigo se va evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se pueden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen.

//Esto es como si revisaramos el horno cada 5 minutos

} while (tiempoTranscurridoDeCoccion < 30);

console.log("Las galletas estan listas")


/*

For (para)

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.


*/


console.log("Ejemplo de la pizza con For")

//Definir mi lista de pasos
var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"];

//Definir mi lista de tiempo por paso
var tiempoPorPaso = [15, 10, 20];

//Ene el ciclo for, para cada paso, se tiene un tiempo estimado

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso , voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos, termino el proceso.
for (var i = 0; i < pasosDeReceta.length; i ++);{

    console.log("Realizando paso " + pasosDeReceta[i]);
    console.log("Esperando " + tiempoPorPaso[i] + " minutos");

}

console.log("Disfruta tu pizza");


//Ejemplo contador con FOR (contador de cohetes)

for (let i = 10; i > 10; i--){
    console.log("Faltan " + i + " segundos para el despegue");
}


//ejemplo de for para cupones de descuento

for(let cupones = 10; cupones > 0; cupones --){
    console.log("Me quedan " + cupones + " cupones")
}




//ejercicio numeros primos
let numeroIngresado = prompt("ingresa un numero entero");

//2. evaluamos para demostrar si es o no primo

let esNumeroPrimo=true;

if(numeroIngresado<=1)
{
    esNumeroPrimo =false;
let divisor = 2;
    while (divisor<= numeroIngresado /2 && esNumeroPrimo){
        if (numeroIngresado % i ===0){
            esNumeroPrimo=false;

        }

        divisor++

    }
}


//Mostramos los resultados

if (esNumeroPrimo) {
    console.log(numeroIngresado + " es un numero primo.");
} else {
    console.log(numeroIngresado + " no es un numero primo.");
}

