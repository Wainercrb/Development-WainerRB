var btn = document.getElementById("button");
var btnVer = document.getElementById("btnVer");

function guardar() {
    var inputNombre = document.getElementById("nombre");
    var inputApellido = document.getElementById("apellido");
    var inputEmail = document.getElementById("email");
    var inputTelefono = document.getElementById("telefono");
    localStorage.setItem("nombre", inputNombre.value);
    localStorage.setItem("apellido", inputApellido.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("telefono", inputTelefono.value);
}


function ver() {
    alert("Los datos guardados son: " + localStorage.getItem("nombre") + " apllido " + localStorage.getItem("apellido") +"\n" +" email " + localStorage.getItem("email") + " teléfono " + localStorage.getItem("telefono"));
}


btn.onclick = function () {
    guardar();
}
btnVer.onclick = function () {
    ver();
}
