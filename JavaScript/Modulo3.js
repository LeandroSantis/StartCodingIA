// 1) Crear un programa que pida un numero al usuario y devuelva
// un mensaje diciendo si el numero es positivo, negativo o si es 0;

let num = prompt("Ingresar un numero: ");

console.log(positivo(num));

function positivo(num1) {
  if (num1 == 0) {
    return "El numero es 0";
  } else if (num1 % 2 == 0) {
    return "Numero positivo";
  } else {
    return "Numero negativo";
  }
}

// 2)Crear un programa que pida un numero al usuario y le devuelva un mensaje
// diciendo si el numero es primo o no

function primo() {
  let num = prompt("Ingresar el numero: ");
  let cont = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      cont++;
    }
  }
  return cont;
}

if (primo() === 2) {
  alert("El numero es primo");
} else {
  alert("El numero no es primo");
}

// 3) Crear un programa que convierta la temperatura de grados celsius
// farenheit y viceversa. El usuario deverìa ingresar la temperatura
// y a que unidadla quiere convertir.

let num = prompt(`Que desea convertir?
    1- de Grados a Farenheit
    2- de Farenheit a Grados`);

if (num == 1) {
  let num = prompt("Ingrese la cantidad de Grados");
  alert(farenheit(num));
} else {
  let num = prompt("Ingrese la cantidad de Farenheit");
  alert(grados(num));
}

function farenheit(num) {
  let farenheit = (num * 9) / 5 + 32;
  return farenheit;
}

function grados(num) {
  let grados = (num - 32) * (5 / 9);
  return grados;
}

// 4) Crear un programa para calcular el total de una compra. Para ello, se le tiene
// que pedir al usuario que ingrese el precio de cada producto y cuando ingrese la palabra total.
// CrearDevolverle el total de la compra.

Compra();

function Compra() {
  let producto;
  let total = 0;

  do {
    producto = 0;
    producto = prompt("Ingrese el precio del producto: ");
    if (Number(producto)) {
      total = +producto + total;
    }
  } while (Number(producto));

  alert(`El monto total es: $${total}`);
}
