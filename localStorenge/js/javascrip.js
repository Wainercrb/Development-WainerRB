var btn = document.getElementById("button");
var btnVer = document.getElementById("btnVer");

function guardar() {
    var inputNombre = document.getElementById("nombre");
    var inputApellido = document.getElementById("apellido");
    localStorage.setItem("nombre", inputNombre.value);
    localStorage.setItem("apellido", inputApellido.value);
}


function mensaje() {

    alert("mensaje");
}

function ver(){
alert("Los datos guardados son: "+localStorage.getItem("nombre") + " apllido " + localStorage.getItem("apellido"));
}


btn.onclick = function () {
   guardar();
}
btnVer.onclick = function (){
    ver();
}

