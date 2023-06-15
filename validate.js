const validatePromo = (e) => {
    e.preventDefault();
    const code = document.querySelector("[data-code]").value;
    if(!code) {
        const message = document.querySelector("[data-promo-error]");
        e.target.classList.remove("btn-secondary");
        e.target.classList.add("btn-danger");
        message.textContent = "No debe dejar vacío este campo.";
        message.classList.add("text-danger");
        return false;
    }

    if (code.length > 2 && code === '123') {
        const message = document.querySelector("[data-promo-error]");
        e.target.classList.toggle("btn-danger");
        e.target.classList.toggle("btn-secondary");
        e.target.classList.add("btn-success");
        message.textContent = "Código válido. Aplicado 10% de descuento.";
        message.classList.toggle("text-danger");
        message.classList.add("text-success");
        return true;
    }
}
// Obtenemos los elementos de input del formulario
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

// Agregamos un event listener al formulario para capturar el evento de envío
document.querySelector('form.needs-validation').addEventListener('submit', function(event) {
  if (firstNameInput.value.trim() === '') {
    // Mostramos el mensaje de error para el campo "First Name"
    firstNameInput.classList.add('is-invalid');
    event.preventDefault(); // Evitamos que se envíe el formulario
  }

  if (lastNameInput.value.trim() === '') {
    // Mostramos el mensaje de error para el campo "Last Name"
    lastNameInput.classList.add('is-invalid');
    event.preventDefault(); // Evitamos que se envíe el formulario
  }
});

// Agregamos event listeners a los campos de input para eliminar el mensaje de error al ingresar información
firstNameInput.addEventListener('input', function() {
  firstNameInput.classList.remove('is-invalid');
});

lastNameInput.addEventListener('input', function() {
  lastNameInput.classList.remove('is-invalid');
});

export default validatePromo;