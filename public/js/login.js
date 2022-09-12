const login = document.getElementById("email");
const pass = document.getElementById("password");
const u = "admin@sportswear.com"
const c = "12345"

function ir (){
    
    if (login.value == u && pass.value == c){
        window.location = "crearEditar";
}
else{
    alert("Por favor ingrese Usuario y contraseña correctos");
}
}
