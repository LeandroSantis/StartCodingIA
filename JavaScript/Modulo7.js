const baseUrl = "https://api.github.com";

const repositoriosPublicos = async () => {
  const respuesta = await fetch(`${baseUrl}/repositories`);
  const jsonrespuesta = await respuesta.json();

  return jsonrespuesta[0];
};

const traerRepositoriosDeOwner = async (reposEndPoint) => {
  const repoRespuesta = await fetch(reposEndPoint);
  const jsonRepoRespuesta = await repoRespuesta.json();
  const respuestaRepo = jsonRepoRespuesta.slice(0, 5);

  return respuestaRepo;
};

const editarPerfil = async () => {
  const datosDelPerfil = await repositoriosPublicos();
  const avatarURL = datosDelPerfil.owner.avatar_url;
  const nombre = datosDelPerfil.owner.login;
  const userRepos = await traerRepositoriosDeOwner(
    datosDelPerfil.owner.repos_url
  );

  const userAvatar = document.querySelector("#avatar");
  const nombreNode = document.querySelector("h1");

  nombreNode.textContent = nombre;
  userAvatar.src = avatarURL;

  console.log(userRepos);
};

editarPerfil();
