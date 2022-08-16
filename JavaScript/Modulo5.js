// 1) Crear una clase Deportes, que reciba  el atributo nombre y un metodo que
// permita mostrar por consola ese nombre.
// Ademas, crear un metodo que permita mostrar si el deporte es individual o por
// quipos.

// Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre,
// el numero de integrantes que deben formar parte de ese equipo.
// Crear un metodo para mostrar el siguiente mensaje:
// "Para jugar al futbol necesitas 11 jugadores por equipo".tener en cuenta que futbol
// y 11 son valores que pueden variar dependiendo del deporte.

// class Deporte {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   mostrarNombre() {
//     console.log(this.nombre);
//   }

//   juego() {
//     let juego = prompt("El juego es individual o por equipos?");
//     console.log(`El juego es: ${juego}`);
//   }
// }

// class DeportesDeEquipo extends Deporte {
//   constructor(nombre, numeroDeJugadores) {
//     super(nombre);
//     this.numeroDeJugadores = numeroDeJugadores;
//   }

//   datos() {
//     console.log(
//       `Para jugar al ${this.nombre} necesitas ${this.numeroDeJugadores} jugadores por equipo`
//     );
//   }
// }

// let futbol = new DeportesDeEquipo("Futbol", 11);
// const basket = new DeportesDeEquipo("Basket", 5);

// futbol.mostrarNombre();
// futbol.juego();
// futbol.datos();

// basket.mostrarNombre();
// basket.juego();
// basket.datos();

const bolsa1 = { cerveza: 2, sandwiche: 2, papasFritas: 1 };
const bolsa2 = { torta: 1, gaseosa: 1, galletitas: 1 };

const Andreabolsa = Object.keys(bolsa1);
const Martinbolsa = Object.keys(bolsa2);

// console.log(Andreabolsa, Martinbolsa);

Object.assign(bolsa2, bolsa1);

const productos = Object.keys(bolsa2);

console.log(productos);
