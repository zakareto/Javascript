/*
control de flujo



Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

condicionales

son estructuras o condiciones que nos permiten modificar el orden natural de ejecucion de nuestro programa. son sentencias especificas que nos ayudara a decidir si una condicion se cumple o no (verdadero o falso), a partir de estga respuesta se ejecuta una o varias instrucciones.

Ejemplo

Tengo limpia mi playera de la suerte?  //pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false: Entonces me quedo a mimir //respuesta con su posible instruccion
*/

/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}


*/
//Felipe tiene 17 anios, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no.


//Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

let edadDeFelipe = 17;
let edadPermitida = 18;


if(edadDeFelipe < edadPermitida){
    console.log("no puede ir a la fiesta")

}

/*

Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.



Estructura basica del Else


if (condicion) {
    //Este bloque se ejecuta si la condicion es verdadera
} 

else 

{
    //Este bloque se ejecuta si la condicion es falsa
}


*/

let edadAxel = 17;
let edadParaEntrarALaFiesta = 18;
let dineroAxel = 50;


if (edadAxel<edadParaEntrarALaFiesta){
    console.log("no puedes entrar")
}
else{
    console.log("felicidades puedes entrar")
}



/*

Else If (ademas si / si no entonces)

Esta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.


Estructura basica del else if


if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
}




*/


edadDeDavid=19;
edadPermitidaDelAntro = 18;
dineroDeDavid= 50;
coverDelAntro=150;
if (edadDeDavid>edadPermitidaDelAntro)
    {
            console.log("muy bien, puede ir al antro")
    }   
    
    else if(dineroDeDavid > coverDelAntro){
        console.log("si puede entrar al antro")
    }
    else{
        console.log("no tienes dinero suficiente")
    }




    let hora = prompt("ingrese la hora actual")

    if (hora <12){
        console.log("buenos dias");
    }
    else if (hora<=19){
        console.log("buenas tardes ya, que barbaro como pasa el tiempo")
    }
    else {
        console.log("buenas noches, a dormir")
    }



    /*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
} */

let pisoDestino = prompt("ingrese piso destino del 1 al 5")


switch (pisoDestino){
    //para jugar con los casos, el tipo de dato debe coincidir

    case "1":
        console.log("vamos a piso 1")
        break;

    case "2":
        console.log("vamos a piso 2")
        break;

    case "3":
        console.log("vamos a piso 3")
        break;
    default:
        console.log("piso invalido")


        
    

}



//ejercicios Eevee


var elementoEvolucion = prompt("Ingresa el numero del metodo que quieres usar para evolucionar a eevee: 1- Piedra agua, 2-Piedra Fuego, 3-Piedra trueno, 4-Piedra hoja, 5-Piedra hielo, 6-amistad de Día, 7-amistad de noche, 8-Moviemiento de Hada")

switch (elementoEvolucion)
{
    case "1":
        console.log("Tu Eevee ha evolucionado a flareon")    
    break;
    case "2":
        console.log("Tu Eevee ha evolucionado a Jolteon")    
    break;
    case "3":
        console.log("Tu Eevee ha evolucionado a vaporeon")    
    break;
    case "4":
        console.log("Tu Eevee ha evolucionado a Leafeon")    
    break;
    case "5":
        console.log("Tu Eevee ha evolucionado a Glaceon")    
    break;
    case "6":
        console.log("Tu Eevee ha evolucionado a Espeon")    
    break;
    case "7":
        console.log("Tu Eevee ha evolucionado a Umbreon")    
    break;
    case "8":
        console.log("Tu Eevee ha evolucionado a Sylveon")    
    break;
    default:

    console.log("Tu Eevee no ha podido evolucionar")
        break;


}
