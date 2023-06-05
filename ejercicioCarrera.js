var Posiciones = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"]

function adelantar(corredorQueAdelanta, corredorAdelantado) {

    //Buscamos el corredor en el Array y lo guardamos en una variable (podemos reusar la variable enviada en la funcion)


    corredorQueAdelanta = Posiciones.splice(Posiciones.indexOf(corredorQueAdelanta), 1)

    //NOTA: al guardar lo que devuelve el splice, se guarda como un array, asi que al usar la variable se tiene que indicar la posicion [0] al usarla mas tarde



    //se coloca el corredor en donde está el corredor al que adelantó
    Posiciones.splice(Posiciones.indexOf(corredorAdelantado), 0, corredorQueAdelanta[0])
    console.log(Posiciones)

}

function bajar(corredorQueBaja, posicionesBajadas) {

    //buscamos donde estaba posicionado al inicio el corredor
    posicionInicial = Posiciones.indexOf(corredorQueBaja)


    //Buscamos el corredor en el Array y lo guardamos en una variable (podemos reusar la variable enviada en la funcion)
    corredorQueBaja = Posiciones.splice
        (posicionInicial, 1)
    //NOTA: al guardar lo que devuelve el splice, se guarda como un array, asi que al usar la variable se tiene que indicar la posicion [0] al usarla mas tarde


    //se coloca el corredor en la posicion que bajo (la posicion inicial + la cantidad de posiciones que bajó)


    Posiciones.splice(posicionInicial + posicionesBajadas, 0, corredorQueBaja[0])
    console.log(Posiciones)





}

//jorge adelanta a roberto

adelantar("Jorge", "Roberto")


//Ramiro adelanta a jorge
adelantar("Ramiro", "Jorge")





//roberto se lesiona y sale de la carrera

Posiciones.splice(Posiciones.indexOf("Roberto"), 1)

console.log(Posiciones)

//andrea baja una posicion
//PosicionAndrea = Posiciones.indexOf("Andrea")

//console.log(PosicionAndrea)
//corredorAMover = Posiciones.splice(PosicionAndrea, 2, Posiciones[PosicionAndrea + 1], "Andrea")

bajar("Andrea", 1)

//console.log(Posiciones)

//ramiro mantiene su lugar
//el quinto es remplazado por José


Posiciones.push("Jose")

console.log(Posiciones)



