
var casaArreglo = [3,2,1,"rojo"];

const casa = {
    numHabitaciones : 3,
    numPisos : 2,
    numBanios : 1,
    color: "Rojo",

}


console.log("el color de mi casa es: ", casa.color)



//clase para generar una plantilla que tiene predefinidas las llaves de nuestras propiedades


class casaPlantilla{
    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";

    encenderLuces(){

        console.log("Click, luces encendidas")
    }

    abrirVentanas(){
        console.log("swiiiiiiift, ventanas abiertas")

    }


    guardarmeDelFresnito(){
            console.log("que agusticidad");
    }

    //2.- definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto

    //3- definir una funcion constructora. esta funcion especial que se dedica unicamente a tomar los datos que definimos como variables, para usarlos como parametros

    constructor(numHabitaciones, numBanios, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;
    }

}


let casaDeFelipe = new casaPlantilla (6, 3, 3, "Azul")


console.log(casaDeFelipe);

console.log(casaDeFelipe.numHabitaciones);


casaDeFelipe.encenderLuces();



//ejemplo de POO con gatitos

class gatitos{
    //1- propiedades

    nombre ="";
    edad = 0;
    tamanio = "";
    caracter = "";
    numeroVidas = 0;
    color="";
    raza="";
    vacunas=false;


    //3-constructor
    constructor (nombre, edad, tamanio, caracter, numeroVidas, color, raza, vacunas){

        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
        this.caracter = caracter
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;


    }

    //2- metodos
    imprimirInfo(){
console.log("El nombre de mi gato es: ", this.nombre)
console.log("la edad de mi gato es: ", this.edad)
console.log("El tamanio de mi gato es: ", this.tamanio)
console.log("El numero de mi gato es: ", this.numeroVidas)
console.log("la raza de mi gato es: ", this.raza)



    };

    maullar(){
        console.log("miauu")

    };

    rasguniar(){
        console.log("el gato ha rasguniado el sillon")
    };

    ronronear(){
        console.log("RRrrrr")
    };

    cuidarGato(){
        if(this.numeroVidas<3)
        {
            console.log("cuida a tu gato porque tiene pocas vidas")
        }
    }

}


instanciar
let JuanchoDelCampo= new gatitos ("Juancho del campo", 5, "Grande", "tranquilo", 7, "naranja", "angora", true)

let nenito= new gatitos ("nenito", 3, "mediano", "tranvieso", 2, "naranja", "desconocida", true)


JuanchoDelCampo.imprimirInfo();
JuanchoDelCampo.cuidarGato();
nenito.imprimirInfo();
nenito.cuidarGato();




/*
JSON (JavaScript Object Notation)

es un formato estandar basado en texto ((string)) para representar datos estructurados(objetos) basado en la sintaxis de objetos en javascript ({, :})

JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.


Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/


objeto = {
    nombre: "Felipe",
    edad: 15,

}

 console.log("objeto normal: ",objeto);


//como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. este proceso se le conoce como serializar

let objetoSerializado = (JSON.stringify(objeto));


console.log("objeto serializado: ",objetoSerializado)



console.log("nombre objeto serializado: ", objetoSerializado.nombre);

//para deserealziar un objeto json vamos a usar un metodo llamada json.parse

let objetoDeserializado =(JSON.parse(objetoSerializado));
console.log(objetoDeserializado);