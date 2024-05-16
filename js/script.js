
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    var nombre = document.getElementById("inputNombre").value;
    var apellido = document.getElementById("inputApellido").value;
    var email = document.getElementById("inputEmail2").value;
    var password = document.getElementById("inputPassword2").value;
    var confirmPassword = document.getElementById("inputPassword3").value;

    if (nombre === "" || apellido === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 8 || password.length > 20) {
      alert("La contraseña debe tener entre 8 y 20 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    document.getElementById("inputNombre").value = "";
    document.getElementById("inputApellido").value= "";
    document.getElementById("inputEmail2").value = "";
    document.getElementById("inputPassword2").value= "";
    document.getElementById("inputPassword3").value= "";
    
  });

