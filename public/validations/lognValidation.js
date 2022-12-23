const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  // e.preventDefault();

  let errores = [];

  let email = document.querySelector(".inputUsuario");
  let contraseña = document.querySelector(".inputPassword");
  let button = document.querySelector(".button-ingresar");
  


  if (email.value == "") {
    errores.push("El campo Email es obligatorio");
  } else if (!email.value.contains == "@") {
    errores.push("Debes ingresar un email válido");
  }

  if (contraseña.value == "") {
    errores.push("El campo Contraseña es obligatorio");
  } else if (contraseña.value.length < 8) {
    errores.push("El campo Contraseña debe tener un mínimo de 8 caracteres");
  }

  if (errores.length > 0) {
    e.preventDefault();
    let msgError = document.querySelector(".errores");
    msgError.innerHTML = "";
    for (let i = 0; i < errores.length; i++) {
      msgError.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});