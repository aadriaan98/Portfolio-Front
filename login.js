const form = document.getElementById("formulario");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const inputs = document.querySelectorAll("#formulario input");

form.addEventListener("submit", (e) =>{
    e.preventDefault()
})
function login(){
    if(email == "ejemplo@mail.com" && pass == "ejprueba1"){

        window.location="./editar.html";

    }
}

let regCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let regContraseña = /^[a-zA-Z0-9]/; 

const validar = (e) =>{
    switch(e.target.name){
        case "email":
            if(regCorreo.test(email.value)){
                document.querySelector("#grupo-email .formulario-input_error").classList.remove("formulario-input_error-activo")
            }else{
                document.querySelector("#grupo-email .formulario-input_error").classList.add("formulario-input_error-activo")
            }break
        case "password":
            if(regContraseña.test(pass.value)){
                document.querySelector("#grupo-password .formulario-input_error").classList.remove("formulario-input_error-activo")
            }else{
                document.querySelector("#grupo-password .formulario-input_error").classList.add("formulario-input_error-activo")
            }break
    }
} 
inputs.forEach((input) => {
    input.addEventListener("keyup",validar);
    input.addEventListener("blur", validar);
}) 