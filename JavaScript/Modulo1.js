// EJERCICIOS

// 1)Pedir al usuario que ingrese su nombre. Guardar
//  ese nombre en una variable y utilizarlo para saludar al
//  usuario

let nombre = prompt("Introduce tu nombre");
alert("Hola " + nombre);

// 2)Pedirle a un usuario  que ingrese dos numeros y devolverle
//la suma de dichos numeros

let numero1 = prompt("Introduce el primer numero");
let numero2 = prompt("Introduce el segundo numero");

Resultado = +numero1 + +numero2;

alert("Resultado " + Resultado);

// 3)Pedirle a un usuario que ingrese dos numeros y devolverle
// el doble de la suma de los numeros

let numero1 = prompt("Introduce el primer numero");
let numero2 = prompt("Introduce el segundo numero");

Resultado = +numero1 + +numero2;

Resultado = Resultado * 2;
alert("Resultado " + Resultado);

// 4)Pedirle al usuario que ingrese el ancho y el alto de una
// habitacion y calcular la superficie

let ancho = prompt("Introduce el Alto ");
let alto = prompt("Introduce el Ancho");

Superficie = ancho * alto;

alert("La superficie es " + Superficie);

// 5) Pedirle al usuario que ingrese su nombre y devolverle
// el nombre todo en minuscula

let nombre = prompt("Introduce el nombre ");

alert("nombre en minuscula " + nombre.toLowerCase());

// 6)Pedirle al usuario que ingrese su apellido y devolverle el apellido en mayuscula.

let nombre = prompt("Introduce tu apellido ");

alert("nombre en minuscula " + nombre.toUpperCase());

// 7) Pedirle al usuario el nombre, el apellido y la edad. Mostrar el siguiente mensaje;

// // nombre: Juan
// // Apellido: perez
// // edad: 18

let nombre = prompt("Introduce tu nombre :");
let apellido = prompt("Introduce tu apellido :");
let edad = prompt("Introduce tu edad :");

alert(`nombre: ${nombre}
       apellido: ${apellido}
       edad: ${edad}`);
