/*

operadores

los operadores nos permiten realizar una operacion en una o varios operandos (variables o datos)


operadores de:
-asignacion
-cadena
-logicos
-comparacion
-aritmeticos


*/

//ejemplo de asignacion


let edadFelipe = 31;
var recipiente = "cafe";

/*

operadores de comparacion (<, >, >=, <=, ==, ===, !=, !==)
*/ 

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";

//menor que

console.log("el valor 13 es menor que el valor 25 " + (numero1 < numero2))

//mayor que

console.log("el valor 13 es menor que el valor 25 " + (numero1 > numero2))

//mayor o igual que

console.log("el valor 25 es mayor o igual que el valor 25 " + (numero2 >= numero3))

// igualdad
console.log("el valor 25 es igual que el valor 25 " + (numero2 == numero3))

//igualdad estricta

console.log("el valor 25 es igual que el valor 25 " + (numero2 === numero3))



//operador de desigualdad 

console.log("el valor 25 es distinto que el valor 13 " ,(numero2 != numero1))

//desigualdad estricta
console.log("el valor 25 es distinto que el valor 25 " + (numero2 !== numero3))



/*
operadores logicos (&&, ||, !)

los operadores logicos nos devuelve un resultado a partir de que se cumpla o no, una condicion. el resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y los podemos poner en un orden especifico)


AND (&&)

sirve para determinar si dos expresiones son verdaderas
-si ambas son verdaderas, el resultado es verdadero,
-si una es falsa, todo el resultado es falso


OR (||)

sirve para determinar si dos expresiones son falsas

-si una es verdadera, el resultado es verdadero
- si son falsas ambas, el resultado es falso

NOT (!)
sirve para mostrar lo contrario a lo que estamos devolviendo


*/


//ejemplo AND

var num1=12;
var num2=24;

afirmacion1 =(num1 < num2);
afirmacion2 = (num1 !=num2);

console.log(afirmacion1 && afirmacion2);


//OR

afirmacion3 =(num1 < num2);
afirmacion4 = (num1 !==num2);

console.log(afirmacion3 || afirmacion4);

//Ejemplo con Not (!)

console.log(!afirmacion3);
console.log(!afirmacion4);



//Ejercicio de combinacion de operaciones



num1= 12;
num2= 24;
num3= 25;
num4= 92;
num5= 91;


op=((num1 < num2 || num2 <num3) && !(num1 !=num2) && (num5!=num3) )


console.log(op);


//Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);


console.log(op)

/*
operadores aritmeticos(+, -, *, /, %) 


*/

let valor1=55;
let valor2=17;
console.log("suma:" , valor1 + valor2);
console.log("resta:" , valor1 - valor2);
console.log("multiplicacion:" , valor1 * 17);
console.log("division:" , valor1 / valor2);
console.log("residuo:" , valor1 % valor2);




/*
El IMC resulta a de la división de la masa del individuo (en kg) entre el cuadrado de la estatura (en metros). El índice de masa corporal es un indicador del peso de una persona en relación con su altura. 
Clasificación del IMC de acuerdo con la OMS de la ONU:
・Menor a 16: Criterio de ingreso.
・16 a 16.9: infrapeso.
・17 a 18.4: bajopeso
・18.5 a 24.9: peso normal.
・25 a 29.9: sobrepeso
・30 a 34.9: obesidad premórbida
・50 a 45: obesidad mórbida
・Mayor a 45: obesidad hipérmorbida

Escriba un programa que dado el peso de una persona en libras (1 libra = 0.453592 kg) y su estatura en centímetros, calcule su IMC e indique como salida el peso en kilogramos, el valor de IMC de la person a y la categoría en la cual fue clasificado.
*/

let pesoLibras = prompt("Ingrese su peso en libras");
let estaturaCM = prompt("Ingrese su estatura en centímetros");
     
function calculoIMC() {
    pesoKG = pesoLibras * 0.453592;
    estaturaMetros = estaturaCM / 100;
    indiceMasa = pesoKG / (estaturaMetros ** 2);
    console.log("Su peso en kilogramos es:", pesoKG);
    console.log("Su estatura en metros es:", estaturaMetros);
    console.log("Su IMC es", indiceMasa);
    if (indiceMasa < 16) {
        console.log("Criterio de ingreso");
    } else if (indiceMasa >= 16 && indiceMasa <= 16.9) {
        console.log("Infrapeso");
    } else if (indiceMasa >= 17 && indiceMasa <= 18.4) {
        console.log("Bajopeso");
    } else if (indiceMasa >= 18.5 && indiceMasa <= 24.9) {
        console.log("Peso normal");
    } else if (indiceMasa >= 25 && indiceMasa <= 29.9) {
        console.log("Sobrepeso");
    } else if (indiceMasa >= 30 && indiceMasa <= 34.9) {
        console.log("Obesidad premórbida");
    } else if (indiceMasa >= 35 && indiceMasa <= 45) {
        console.log("Obesidad mórbida");
    } else if (indiceMasa > 45) {
        console.log("Obesidad hipérmorbida");
    }
}

calculoIMC();