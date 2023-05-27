//ejercicio 9


var distancia;
var tiempo;


distancia = 10
tiempo = 5
medidaDeDistancia = "m";
medidaDeTiempo= "s";
function calcularVelocidad(){

 let velocidad = distancia/tiempo

 return velocidad
}


let velocidad = (calcularVelocidad()) + " " + medidaDeDistancia + "/" + medidaDeTiempo;

console.log(velocidad)