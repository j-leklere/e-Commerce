// Validaciones desde el front
const nombre = document.querySelector("#name");
const description = document.querySelector("#description");
const form = document.querySelector("#form");
const error = document.querySelector(".erores");


// form.addEventListener("submit", e => {
//   e.preventDefault();
//   let warnings = "";
//   let entrar = false;
//   error.innerHTML = "";
//   if (nombre.value.length == 0) {
//     warnings += `Debes completar el campo nombre <br>`;
//     entrar = true;
//   }
//   if (description.value.length < 20) {
//     warnings += `La descripcion debe contener al menos 20 caracteres <br>`;
//     entrar = true;
//   }
//   if (entrar) {
//     error.innerHTML = warnings;
//   }
// });

form.addEventListener("submit", e => {
    e.preventDefault();
    let mensajeError = [];

    if (nombre.value === null || nombre.value === ""){
        mensajeError.push('Debes completar el campo nombre')
    }

    if (description.value === null || description.value === ""){
        mensajeError.push('La descripcion debe contener al menos 20 caracteres');
        
    }

    error.innerHTML = mensajeError.join(', ');
})
