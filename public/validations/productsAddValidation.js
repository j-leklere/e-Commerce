let form = document.getElementById("form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.getElementById("name");
  let description = document.getElementById("description");
  let year = document.getElementById("year");
  let price = document.getElementById("price");
  let size = document.getElementById("size");
  let brand = document.getElementById("brand");
  let image = document.getElementById("image");
  let imageValue = document.getElementById("image").value;
  let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
  let errores = [];

  if (nombre.value == "") {
    errores.push("Debes completar el campo nombre");
    nombre.classList.remove("is-valid");
    nombre.classList.add("is-invalid");
  } else {
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
  }
  if (brand.value == "") {
    errores.push("Debes completar el campo marca");
    brand.classList.remove("is-valid");
    brand.classList.add("is-invalid");
  } else {
    brand.classList.remove("is-invalid");
    brand.classList.add("is-valid");
  }
  if (year.value == "") {
    errores.push("Debes completar el campo año");
    year.classList.remove("is-valid");
    year.classList.add("is-invalid");
  } else {
    year.classList.remove("is-invalid");
    year.classList.add("is-valid");
  }
  if (size.value == "") {
    errores.push("Debes completar el campo talla");
    size.classList.remove("is-valid");
    size.classList.add("is-invalid");
  } else {
    size.classList.remove("is-invalid");
    size.classList.add("is-valid");
  }
  if (price.value == "") {
    errores.push("Debes completar el campo precio");
    price.classList.add("is-invalid");
    price.classList.remove("is-valid");
  } else {
    price.classList.remove("is-invalid");
    price.classList.add("is-valid");
  }
  if (!allowedExtensions.exec(image)) {
    errores.push("La imagen debe tener formato PNG, JPG, JPEG o GIF ");
    console.log(imageValue);
  }
  if (description.value.length < 12) {
    errores.push("La descripción debe tener al menos 12 caracteres");
    description.classList.add("is-invalid");
    description.classList.remove("is-valid");
  } else {
    description.classList.remove("is-invalid");
    description.classList.add("is-valid");
  }
  if (errores.length > 0) {
    // evento.preventDefault();
    let ulError = document.querySelector(".warnings");
    ulError.innerHTML = "";
    for (let i = 0; i < errores.length; i++) {
      ulError.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});
