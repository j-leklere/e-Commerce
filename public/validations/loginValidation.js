const form = document.querySelector(".login-form");

form.email.focus();

form.addEventListener("submit", (evento) => {
    let errores = [];

    let email = document.querySelector(".inputUsuario");
    let contraseña = document.querySelector(".inputPassword");
    
    if (email.value == "") {
      errores.push("El campo Email es obligatorio");
    } else if (!email.value.contains == "@") {
      errores.push("Debes ingresar un email válido");
    }

    if (contraseña.value == "") {
      errores.push("El campo Contraseña es obligatorio");
    } else if (contraseña.value.length < 7) {
      errores.push("El campo Contraseña debe tener un mínimo de 7 caracteres");
    }

    if (errores.length > 0) {
      console.log(errores)
      evento.preventDefault();
      let msgError = document.querySelector(".errores");
      msgError.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        msgError.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }else{

    }
});

