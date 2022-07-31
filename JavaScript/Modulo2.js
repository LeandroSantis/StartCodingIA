// 1) Triangulo de #. Para este ejercicio, construir un programa que
// formado con #, de la siguiente manera.
let f = "#";
const h = "#";
console.log(f);

for (i = 1; i < 5; i++) {
  f = f + h;
  console.log(f);
}

// 2) Numeros pares e impares. Hacer un programa que itere por los numeros y nos diga
// si es par o impar

for (i = 1; i < 5; i++) {
  if (i % 2 == 0) {
    console.log(`El numero ${i} es par`);
  } else {
    console.log(`El numero ${i} es impar`);
  }
}

// 3)FizzBuzz. Generar un programa que itere del 1 al 15.

// 1- si el numero es multiplo de 3, mostrar la palabra "Fizz"
// 2- si el numero es multiplo de 5, mostrar la palabra "Buzz"
// 3- si el numero es multiplo de 3 y 5, mostrar la palabra "Fizz Buzz"
// 4- En los demas casos, mostrar el numero

for (i = 0; i <= 15; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
