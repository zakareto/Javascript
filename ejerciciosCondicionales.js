var num = prompt("ingrese un numero")

function esPrimo(numero){

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
        return "no es primo";
        }
    }

    return ("es primo")
        
}


if (num <=1 )
{
    console.log("no es primo")
}
else{
    console.log(esPrimo(num))
}