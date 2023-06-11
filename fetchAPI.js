//JavaScript sincrono

console.log("Inicia Sincrono");
function dosSync () {
    console.log("Se ejecuta la funcion dos");
}

function unoSync() {
    console.log("Se ejecuta la funcion uno");
    dosSync();
    console.log("Se ejecuta el codigo tres");
}

unoSync();
console.log("Fin de Sincorono");


/*
Ejemplos de tareas sincronas

 -Ciclos
 -Invocaciones a funciones
 -EventListener (especificamente cuando necesito el click)
 -Condicionales y todo lo que tenga que ver con toma de decisiones
 -Prompts y alerts

*/

// Javascript asincrono
console.log("Inicio de Asincrono");

function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000); //tiempo en milisegundo
}


function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Fin de Asincrono");

/*
Ejemplos de tareas asincronas

 -Funcion setTimeout
 -Notificaciones de cierre de sesion en apps bancarias
 -Spotify con su cola de reproduccion
 -Conexiones a servidor
 -Cargas de APIs

*/


/*

Ya que entendemos que la asincronia nos servira para conectarnos a un servidor, y que sin importar la respuestaa que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos) es necesario saber que hay varios mecanismos para manejar operaciones asincronas en JS.


    -Callbacks (llamadas de vuelta): La forma mas clasica de gestionar la asincronia

    -Promises (promesas): forma moderna

    -Async/Await: forma moderna con una sintaxis mas ligera
*/

/*

Que es un callback (llamada de vuelta)

Un callback es una funcion que se pasa como argumento a otra funcion. Esta funcion se ejecutara despues de que la otra lo haga. Este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro termine.

Para que las necesitamos?
Sabemos que JS trabaja de forma descendente, entonces habra casos que queramos hacer que un codigo se ejecute despues de que ocurra otra cosa, y tambien de forma no secuencial.

*/

// function hazClick(){
//     console.log("Le hiciste click al boton");
// }

// const boton = document.getElementById("boton");
// boton.addEventListener("click", hazClick)

//Ejemplo de Callback

//Defino una funcion que toma un numero y un callback(funcion) como parametros

//creamos una funcion llamada doblenumero que toma un numero y un callback como argumento(el calball es una funcion)
function dobleNumero (num, callback){
    
    
    
    const resultado = num *2; //operacion comun y corriente
    callback(resultado); //invocacion de ese callback con el resultado como parametro
}

//Definir una funcion para mostrar el resultado
function mostrarResultado(resultado){
    console.log("El resultado es: ", resultado);
}

dobleNumero (5, mostrarResultado);


/*
promies(promesas)

son otro mecanismo para manejar la asincronia. utilizar promesas hace que el codigo sea mas legible y practico que al usar callbacks, y como su nombre lo indica una promesa es algo que en un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. la gran ventaja de utilizar promesas es que evitamos anidar muchas funciones y usamos una sola funcion

nota: las promesas son objetos

promise.then
promise.catch



las promesas tienen estados:

- pendiente (pending): es el estado inicial de nuestra promesa, aqui aun no tenemos resultados.

-fullfilled: cuando la operacion asincrona se completa con exito(resolve)

-rejected (rechazo): cuando la operacion fallla(reject)



tambien las promesas al ser objetos, tienen metodos


-then(function resolve): ejecuta un callback llamado resolve cuando la promesa se cumple.

- catch(function reject): ejecuta un callback llamado reject cuando la promesa se rechaza.

- then (resolve, reject): puedo ejecutar las dos funciones en el mismo metodo then.
*/

//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos(){
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function(resolve, reject){ //el objeto maneja dos funciones (resuelto, rechazo)
        fetch ('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
        .then(function(response){ //espero respuestas...
            if (response.ok){ //propiedad booleana (si o no hay respuesta)
                return response.json();//metodo para convertir la respuesta a un objeto .json
            }else{ //si no...
                throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un nuevo error (404)
            }
        })
        .then(function(data){ //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
            resolve(data);
        })
        .catch(function(error){ //Si no hay una respuesta, resulvo con un rechazo.
            reject(error);
        });
    });
};


// Uso de la promesa

obtenerProductos()
    .then(function(resultado){
    console.log(resultado);
})

    .catch(function(error){
    console.log(error);
});









//Otro ejemplo de promesa para validar un nombre. Si el nombre que estoy evaluando coincide con un valor ya guardado previamente, entonces la promesa se resuelve correctamente. Si no, la promesa se rechaza y me muestra mensaje de error.

let nombre = "Felipe";

//que el objeto promesa tiene dos posibles soluciones
const promesaNombre = new Promise (function(resolve, reject){
    if (nombre !== "Felipe"){
        reject ("Error!!, el nombre no es Felipe");
    }else{
        resolve("el nombre es correcto:" +nombre);
    }
})

console.log(promesaNombre);

/*
ejemplo de la pokeApi

Necesito 

- URL
- promesa (con dos posibles caminos rechazo y resolucion)
    - si se resuelve me traigo los datos de la api
    - si no, muestro un error

*/

//Primer bloque para la conexion del servidor
const obtenerPokemon = new Promise((resolve, reject) =>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') //me conecto y busco

    .then(respuesta =>{ //cuando se conecte...
        if (respuesta.ok){ //si la conexion es ok
            return respuesta.json(); //guardo el dato en .json
        } else { //si no me conecto...
            throw new Error ("Error 404"); //muestro un error
        }
    })

    //segundo bloque (cuando ya me conecte al servidor y encontro la info)
    .then(datos =>{ //entonces esos datos...
        resolve(datos); //se usan como parametro de mi resolucion
    })

    //tercer bloque (solo en caso de que no se encuentra informacion)
    .catch(error =>{
        reject("Mensaje de error, no encontramos tu pokemon" + error);
    });

});


//Ya que le di el mensaje a mi mesero (creacion de la promesa), ahora voy a poder mostrar la informacion si la promesa se resuelve (encuentra la info), o si se rechaza (no encuentra la info)

obtenerPokemon

.then(pokemon =>{ //el valor pokemon = datos obtenidos del servidor en .json
    console.log("Pokemon obtenido" , pokemon.name);
})
.catch(error => {
    console.log(error);
});



function pokemon(datos, callback){
    datos = respuesta.json;
    callback(datos)
}


function error(error,callback){
    error= "error, no encontramos al pokemon";
    callback(error)
}


/*

Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decirnos que la conexiion es ok, "pega" la informacion de lo que estamos consultado).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/


//realizamos peticion

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokeRespuesta =>{
        return pokeRespuesta.json();
    })

    .then(pokeInfo =>{
        console.log("El pokemon es: ", pokeInfo.name)
    })
    .catch(pokeError =>{
        console.log("no encontramos informacion "+ pokeError)
    })



    const input =document.getElementById("inputPokemon")
    const button =document.getElementById("botonPokemon")
    const pokemonContainer = document.querySelector("#pokemonContainer");

//Manipulacion del DOM + Fetch API
function traerPokemon(nombrePokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

    //guardo la respuesta en .json
    .then(respuesta => respuesta.json()) //Se resuelve la promesa

    //ese .json lo asigno a una variable llamda datos, que usare para alimentar una funcion llamada crearPokemon
    .then((datos) =>{
        crearPokemon(datos);
    });
}

function crearPokemon(nombrePokemon){
    const pokeImg = document.createElement("img"); //creo una etiqueta img
    pokeImg.src = nombrePokemon.sprites.front_default; //front_default es el nombre de la propiedad donde esta la imagen de mi pokemon
    const h2 = document.createElement("h2"); //creo una etiqueta h2
    h2.innerHTML = nombrePokemon.name; //le pongo el nombre del pokemon a ese h2
    const pokeDiv = document.createElement("div"); //crearmos un div para poner mi pokemon
    //Inserto los elementos imagen y h2 a un div particular de cada pokemon
    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);
    //inserto ese div particular en un div general que estan en el html
    pokemonContainer.appendChild(pokeDiv);

}

button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
}
);


