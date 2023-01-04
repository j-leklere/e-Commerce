 
let form = document.querySelector(".register-form");

form.nombre.focus();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let errores = [];

  let nombre = document.querySelector(".inputNombre");
  let apellido = document.querySelector(".inputApellido");
  let email = document.querySelector(".inputEmail");
  let contraseña = document.querySelector(".inputPassword");
  // let imagen = document.querySelector(".inputFile");

  if (nombre.value == "") {
    errores.push("El campo Nombre es obligatorio");
  } else if (nombre.value.length < 2) {
    errores.push("El campo Nombre debe tener un mínimo de 2 caracteres.");
  }

  if (apellido.value == "") {
    errores.push("El campo Apellido es obligatorio");
  } else if (apellido.value.length < 2) {
    errores.push("El campo Apellido debe tener un mínimo de 2 caracteres.");
  }

  if (email.value == "") {
    errores.push("El campo Email es obligatorio");
  } else if (!email.value.contains == "@") {
    errores.push("El campo Email debe contener el caracter: @");
  }

  if (contraseña.value == "") {
    errores.push("El campo Contraseña es obligatorio");
  } else if (contraseña.value.length < 8) {
    errores.push("El campo Contraseña debe tener un mínimo de 8 caracteres");
  }

  if (errores.length > 0) {
    // e.preventDefault();
    let ulError = document.querySelector(".errores");
    ulError.innerHTML = "";
    for (let i = 0; i < errores.length; i++) {
      ulError.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});

