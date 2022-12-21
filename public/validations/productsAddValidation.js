alert('Kati')
let form = document.getElementById('form');


form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let nombre = document.querySelector('#name');
    let description = document.getElementById('description');
    let year = document.getElementById('year');
    let price = document.getElementById('price');
    let size = document.getElementById('size');
    let brand = document.getElementById('brand');
    let image = document.getElementById('image');
    let imageValue = document.getElementById('image').value;
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let errores = [];

    if(nombre.value == "" ){
        errores.push("Debes completar el campo nombre");
        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid");
    } else {
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid")
        }
    if(brand.value == "" ){
        errores.push("Debes completar el campo marca");
        brand.classList.add("is-invalid");
     brand.classList.remove("is-valid");
}else{
    brand.classList.add("is-valid");
    brand.classList.remove("is-invalid")
}
    if(year.value == "" ){
        errores.push("Debes completar el campo año");
        year.classList.add("is-invalid");
        year.classList.remove("is-valid");
    }else{
        year.classList.add("is-valid");
        year.classList.remove("is-invalid")
    }
    if(size.value == "" ){
        errores.push("Debes completar el campo talla");
        size.classList.add("is-invalid");
        size.classList.remove("is-valid");
    }else{
        size.classList.add("is-valid");
        size.classList.remove("is-invalid")
    }
    if(price.value == "" ){
        errores.push("Debes completar el campo precio");
        price.classList.add("is-invalid");
        price.classList.remove("is-valid");
    }else{
        price.classList.add("is-valid");
        price.classList.remove("is-invalid")
    }
    if(description.value.length < 12){
        errores.push("La descripción debe tener al menos 12 caracteres");
        description.classList.add("is-invalid");
        description.classList.remove("is-valid");
    }else{
        description.classList.add("is-valid");
        description.classList.remove("is-invalid")
    }
    if(!allowedExtensions.exec(imageValue)){
        errores.push("La imagen debe tener formato PNG, JPG, JPGE o GIF "); 
        image.focus();
    }
    if(errores.length > 0){
        let ulError = document.querySelector(".warnings");
        ulError.innerHTML = "";
        for (let i = 0; i < errores.length; i++) {
            ulError.innerHTML += "<li>" + errores[i] + "</li>"   
        }
    }
})
