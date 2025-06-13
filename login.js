function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario === "admin" && contrasena === "1234") {
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
