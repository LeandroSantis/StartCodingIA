alert("Hola Bienvenido");
let seguir = confirm("Desea continuar? ");
let seguirUno;
let usuarioUno;
let passwordUno;
let usuarioDos;
let passwordDos;

if (seguir === true) {
  usuarioUno = prompt("Ingrese el nombre de usuario: ");
  usuarioUno = usuarioUno.toLowerCase();

  if (usuarioUno.length > 3) {
    passwordUno = prompt("ingrese contraseña: ");

    if (passwordUno.length >= 6) {
      alert("se registro correctamente");
      seguirUno = confirm("Desea iniciar sesion?");
      if (seguirUno === true) {
        usuarioDos = prompt("Ingrese el nombre de usuario: ");
        usuarioDos = usuarioDos.toLowerCase();
        passwordDos = prompt("ingrese contraseña: ");
        if (usuarioDos === usuarioUno && passwordDos === passwordUno) {
          alert("Ha iniciado sesion correctamente");
        } else {
          s;
          alert("El usuario no se encuentra registrado");
        }
      }
    } else {
      alert("error al registrarse");
    }
  } else {
    alert("el nombre de usuario es incorrecto");
  }
} else {
  alert("no entro en el programa");
}
