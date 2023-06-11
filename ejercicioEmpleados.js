// mini sistema contable
/*mini sistema contable
calcular el sueldo e imprimir info de empleado

requerimientos
-tiempo 30 minutos
-5 instancias (#empleados)}
-sueldo x dia $156.78
-calcular sueldo x 15, x30 (brutos y netos)
-ISR (descuento) 31%
- 7 dias 8 horas por dia
-parametros(nombre, edad, RFC, #dias trabajados, sueldo x dia)

-metodos {mes bruto y neto, quincena bruto y neto}
*/



class Empleado{
    //1- propiedades

    nombre ="";
    edad = 0;
    RFC = "";
    diasTrabajados = 0;
    sueldoDiario = 156.78;
    ISR= 0.31;


    //3-constructor
    constructor (nombre, edad, RFC, diasTrabajados){

        this.nombre = nombre;
        this.edad = edad;
        this.RFC = RFC;
        this.diasTrabajados = diasTrabajados
       


    }

    //2- metodos
    imprimirInfo(){
console.log("El nombre del empleado es: ", this.nombre)
console.log("la edad del empleado es: ", this.edad)
console.log("El RFC del empleado es: ", this.RFC)
console.log("El numero de dias trabajados del empleado es: ", this.diasTrabajados)




    };

    quincenaEnBruto(){

        let total=this.sueldoDiario * 15 ;

        console.log("el sueldo quincenal bruto seria de $", total)
        

    };


    mensualEnBruto(){
        let total=this.sueldoDiario * 30 ;

        console.log("el sueldo mensual bruto seria de $", total)

    };

    quincenaEnNeto(){

        let total=this.sueldoDiario * 15 ;

        total = total - (this.ISR * total);

        console.log("el sueldo quincenal neto seria de $", total)
        

    };

    mensualEnNeto(){
        let total=this.sueldoDiario * 30 ;

        total = total - (this.ISR * total);

        console.log("el sueldo mensual neto seria de $", total)
        

    };
   

}



let Juan = new Empleado("Juan", 20, "12AFD13V", 20)
let Simon = new Empleado("Simon", 22, "34DBC19B5", 15)
let Ricardo = new Empleado("Ricardo", 30, "97FB26AS", 32)
let Eduardo = new Empleado("Eduardo", 26, "57ABN15E", 50)
let Bob = new Empleado("Bob", 35, "68DCZ33S", 117)


Juan.imprimirInfo();
Juan.quincenaEnBruto();

Simon.imprimirInfo();
Simon.mensualEnBruto();

Ricardo.imprimirInfo();
Ricardo.mensualEnNeto();

Eduardo.imprimirInfo();
Eduardo.quincenaEnNeto();