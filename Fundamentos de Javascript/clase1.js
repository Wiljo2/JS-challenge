var nombre;

nombre = 'hola';
//  Stringg
//toUpperCase()  hacer mayuscula 
//tolowercase()  mínuscula 
//charAt(0) primera letra
//length() cantidad 
//substr


//INT ANd  FLOAT
//toFixed(2)  2 decimales (3) 3 decimales
//parseFloat()}

//FUNCIONES


/* 
VAR HOLA = "JUAN"

FUNCTION ImprimiNombreEn Mayusculas


*/
function suma({ n1, n2 }) {
	var operacion = n1 + n2
	console.log(operacion)
}

var miSuma = {
	n1: 5,
	n2: 10
}

suma(miSuma) // Salida ->15
suma({ n1: 100, n2: 100 + 50 }) // Salida -> 250
suma({ n1: 100 - 1, n2: (200 * 2) + 1 }) // Salida -> 500

const permitirAcceso = ({ edad }) => {
	if (!esMayorDeEdad({ edad })) {
		console.log('Acceso denegado')
	}
	else {
		console.log('Adelante')
	}

}

var sacha = {
	nombre: 'Sacha',
	apellido: 'Lifszyc',
	altura: 1.72,
	cantidadDeLibros: 111
}

var alan = {
	nombre: 'Alan',
	apellido: 'Perez',
	altura: 1.86,
	cantidadDeLibros: 78
}

var martin = {
	nombre: 'Martin',
	apellido: 'Gomez',
	altura: 1.85,
	cantidadDeLibros: 132
}

var dario = {
	nombre: 'Dario',
	apellido: 'Juarez',
	altura: 1.71,
	cantidadDeLibros: 90
}

var vicky = {
	nombre: 'Vicky',
	apellido: 'Zapata',
	altura: 1.56,
	cantidadDeLibros: 91
}

var paula = {
	nombre: 'Paula',
	apellido: 'Barros',
	altura: 1.76,
	cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
	...persona,
	altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

var acum = 0

var reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var cantidaddelibros = personas.reduce( reducer, 0)
console.log(personasCms)
function persona (){
	var alan = 0
	var lido = 0
}


function persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}
persona.prototype.soyAlto = (function (){
	this.altura > 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
} )

var cesar = new persona('Cesar', 'Lopez', 1.77)
var juan = new persona ('Juan', 'Obando', 1.81)
cesar.soyAlto()


