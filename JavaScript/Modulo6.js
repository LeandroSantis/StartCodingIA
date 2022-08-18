// 1)Simulamos una carrera entre 3 personas, Juan - Mario y Martin.
// El orden de largada sera siempre el mismo :

// console.log("Juan");
// console.log("Mario");
// console.log("Martin");

// setTimeout(() => console.log("Juan"), 0);
// console.log("Mario");
// console.log("Martin");

// console.log("Juan");
// setTimeout(() => console.log("Mario"), 0);
// console.log("Martin");

// setTimeout(() => console.log("Juan"), 0);
// setTimeout(() => console.log("Mario"), 0);
// console.log("Martin");

// setTimeout(() => console.log("Juan"), 0);
// console.log("Mario");
// setTimeout(() => console.log("Martin"), 0);

// 2)Utilizando setTimeout, crear una funcion que actue como un temporizador, haciendo una cuenta
// regresiva desde el numero de segundos que se pase como argumento hasta llegar a 0. para ese ejercicio no se puede
// utilizar ningun tipo de loop.
// Pista: funciones recursivas.

// const temporizador = (segundo) => {
//   setTimeout(() => {
//     if (segundo < 0) return;
//     console.log(segundo);
//     temporizador(segundo - 1);
//   }, 1000);
// };

// temporizador(10);

//Lo hacemos con el Async  Await

// const baseUrl = "https://api.github.com";

// const repositoriosPublicos = async () => {
//   const respuesta = await fetch(`${baseUrl}/repositories`);
//   const jsonrespuesta = await respuesta.json();
//   // console.log(jsonrespuesta);

//   return jsonrespuesta;
// };

// const traerOwnersNombres = async () => {
//   const repositorios = await repositoriosPublicos();

//   const nombresArray = repositorios.map((repo) => repo.owner.login);
//   console.log(nombresArray);
// };
// traerOwnersNombres();

// const traerRepositoriosDeOwner = async () => {
//   const repositorios = await repositoriosPublicos();

//   const primerRepositorio = repositorios[0];
//   const repoEndPoint = primerRepositorio.owner.repos_url;

//   const repoRespuesta = await fetch(repoEndPoint);
//   const jsonRepoRespuesta = await repoRespuesta.json();

//   console.log(jsonRepoRespuesta);
// };

// traerRepositoriosDeOwner();
