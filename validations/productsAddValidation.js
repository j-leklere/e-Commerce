// Validaciones desde el front
alert('Se renderizo la vista');
let form = document.querySelector("form");
    form.title.focus();

    form.addEventListener("submit", (evento) => {
        let errores = [];
        let name = document.querySelector("#name");
        let description = document.querySelector("#description");
        let file = document.querySelector("#file");
      
        
        if(name.value == ""){
            errores.push("El campo nombre no puede estar vacio");
            name.classList.add("is-invalid");
            name.classList.remove("is-valid");
        }else{
            name.classList.remove("is-invalid");
            name.classList.add("is-valid");
        }
        if(description.value == ""){
            errores.push("El campo descripción no puede estar vacio");
            description.classList.add("is-invalid");
            description.classList.remove("is-valid");
        }else{
            description.classList.remove("is-invalid");
            description.classList.add("is-valid");
        }
        if(description.value < 20){
            alert("El campo descripción debe tener al menos 20 caracteres");
            description.classList.add("is-invalid");
            description.classList.remove("is-valid");
        }else{
            description.classList.remove("is-invalid");
            description.classList.add("is-valid");
        }
        if( /.(gif | jpeg |jpg | png )$/i.test(file.value)){
            errores.push("Debes elegir una imagem con formato JPG, JPEG, PNG o GIF");
            file.classList.add("is-invalid");
            file.classList.remove("is-valid");
        }else{
            file.classList.remove("is-invalid");
            file.classList.add("is-valid");
        }
        if(errores.length > 0){
            evento.preventDefault();
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }}
    })

// window.addEventListener("load", function(){

//     let name = document.querySelector("#name");
//     let fields = document.querySelectorAll(".field");
//     let form = document.querySelector("#form");

//     name.focus()

//     fields.forEach(function(field){
//         field.addEventListener("blur", function(e){
//             console.log(field.value >= 0)
//             if((field.name == "description" ) && (Number(field.value > 20) )){
//                 field.nextElementSibling.innerHTML = "La descripción no puede tener menos de 20 caracteres";
//                 field.classList.remove("is-valid")
//                 field.nextElementSibling.classList.add("is-invalid")
//             }
//             else if((field.name == "name") && field.value.length < 1){
//                 field.nextElementSibling.innerHTML = "Deebes completar este campo!";
//                 field.classList.remove("is-valid")
//                 field.nextElementSibling.classList.add("is-invalid")
//             }else{
//                 field.nextElementSibling.classList.remove("is-invalid")
//                 field.classList.add("is-valid");
//                 field.nextElementSibling.innerHTML = "Ok"
//             }
//         })
//     })

//     form.addEventListener("submit", function(e){
//         e.preventDefault()
//         let error = false;
//         fields.forEach((field, i)=>{
//             if(!field.value){   
//                 error = true;
//                 field.nextElementSibling.classList.add("is-invalid")            
//                 field.nextElementSibling.innerHTML = "completar campo!"
//             }
//         })
//         if(!error){
//             this.submit()
//         }

//     })
// })