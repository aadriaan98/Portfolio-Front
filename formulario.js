const formulario = document.getElementById("formulario");
const inpust = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("grupo-nombre").classList.remove("grupo-formulario-incorrecto");
                document.getElementById("grupo-nombre").classList.add("grupo-formulario-correcto");
                document.querySelector("#grupo-nombre .formulario-input_error").classList.remove("formulario-input_error-activo")

            }
            else{
                document.getElementById("grupo-nombre").classList.add("grupo-formulario-incorrecto");
                document.getElementById("grupo-nombre").classList.remove("grupo-formulario-correcto");
                document.querySelector("#grupo-nombre .formulario-input_error").classList.add("formulario-input_error-activo")
            }
        break

        case "email":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById("grupo-correo").classList.remove("grupo-formulario-incorrecto");
                document.getElementById("grupo-correo").classList.add("grupo-formulario-correcto");
                document.querySelector("#grupo-correo .formulario-input_error").classList.remove("formulario-input_error-activo")
            }
            else{
                document.getElementById("grupo-correo").classList.add("grupo-formulario-incorrecto");
                document.getElementById("grupo-correo").classList.remove("grupo-formulario-correcto");
                document.querySelector("#grupo-correo .formulario-input_error").classList.add("formulario-input_error-activo")
            }
        break

        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById("grupo-telefono").classList.remove("grupo-formulario-incorrecto");
                document.getElementById("grupo-telefono").classList.add("grupo-formulario-correcto");
                document.querySelector("#grupo-telefono .formulario-input_error").classList.remove("formulario-input_error-activo")
            }
            else{
                document.getElementById("grupo-telefono").classList.add("grupo-formulario-incorrecto");
                document.getElementById("grupo-telefono").classList.remove("grupo-formulario-correcto");
                document.querySelector("#grupo-telefono .formulario-input_error").classList.add("formulario-input_error-activo")
            }
        break

        case "asunto":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("grupo-asunto").classList.remove("grupo-formulario-incorrecto");
                document.getElementById("grupo-asunto").classList.add("grupo-formulario-correcto");
                document.querySelector("#grupo-asunto .formulario-input_error").classList.remove("formulario-input_error-activo")
            }
            else{
                document.getElementById("grupo-asunto").classList.add("grupo-formulario-incorrecto");
                document.getElementById("grupo-asunto").classList.remove("grupo-formulario-correcto");
                document.querySelector("#grupo-asunto .formulario-input_error").classList.add("formulario-input_error-activo")
            }
        break
    }
}

inpust.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario)
    input.addEventListener("blur", validarFormulario)
})

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
})
