const nombreApellidosInput = document.getElementById("nombre_apellidos");
const emailInput = document.getElementById("email");
const numeroCelularInput = document.getElementById("numero_celular");
const fechaNacimientoInput = document.getElementById("fecha_nacimiento");
const registrarseBtn = document.getElementById("registrarse-btn");
const registroExito = document.getElementById("registro-exito");

// Función para habilitar o deshabilitar el botón de "Registrarse" según el estado de los campos de entrada
function validarCampos() {
    if (
        nombreApellidosInput.validity.valid &&
        emailInput.validity.valid &&
        numeroCelularInput.validity.valid &&
        fechaNacimientoInput.validity.valid
    ) {
        registrarseBtn.removeAttribute("disabled");
    } else {
        registrarseBtn.setAttribute("disabled", "true");
    }
}

// Agregar eventos de cambio a los campos de entrada para validar
nombreApellidosInput.addEventListener("input", validarCampos);
emailInput.addEventListener("input", validarCampos);
numeroCelularInput.addEventListener("input", validarCampos);
fechaNacimientoInput.addEventListener("input", validarCampos);

// También validamos al cargar la página
validarCampos();

// Manejar el clic en el botón "Registrarse"
registrarseBtn.addEventListener("click", function () {
    // Ocultar el formulario de registro
    document.getElementById("registro-container").style.display = "none";

    // Mostrar el mensaje de éxito
    registroExito.style.display = "block";
});


