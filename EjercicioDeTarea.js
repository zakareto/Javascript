//Elegir un ejercico del repositorio de Ejercicios practicos y completarlo

//1-Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los numeros impares desde 1 hasta ese numero"

var numero = prompt("ingrese un numero")


for(let i = 1; i <= numero; i++)
{

    if (i % 2 ==0)
    {
        console.log(i)
    }
}