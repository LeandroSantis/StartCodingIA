let invitados = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martin",
];

// // 1) Informar por consola el numero de invitados
// 2) Imprimir por consola el nombre del ultimo invitado
// 3) A ultimo momento, se invito a pedro a la fiesta, por lo que hay que agregarlo al
// // de la lista
// 4) Media hora antes de empezar Marcela confirmo que no podia asistir. Generar
// una nueva lista que contenga los invitados que confirmaron su presencia

// 4) Por cada invitado, Asignarle un numero de orden conforme
// su posicion en la lista. Mostrar este numero de orden en un nuevo array de la siguiente
// manera: "Juan. Orden: 1"

// 5) Suponiendo que los invitados consumieron la siguiente cantidad de platos:

// Lucas: 3 platos
// Esteban: 1 platos
// Jose: 1 platos
// Los restantes: 4 platos

// // calcular el numero total de platos
// 6) Acomodar los invitados por orden alfabetico

// 1)Respuesta:
console.log(`El total de invitados es: ${invitados.length}`);

// 2)Respuesta:
let ultimo = invitados[invitados.length - 1];
console.log(`El ultimo invitado es: ${ultimo}`);

// 3)Respuesta:
invitados.push("Pedro");
console.log(invitados);

// 4) Respuesta:
invitados.forEach((elemento, index) =>
  console.log(`${elemento} Orden: ${index + 1}`)
);

// 5)Respuesta:
let contador = 0;
invitados.forEach((elemento, index) => {
  if (elemento === "Lucas") {
    contador = contador + 3;
  } else if (elemento === "Esteban" || elemento === "Jose") {
    contador = contador + 1;
  } else {
    contador = contador + 4;
  }
});

console.log(`El total de platos es de ${contador} platos`);

// 6) Respuesta:

invitados.sort();
console.log(invitados);
