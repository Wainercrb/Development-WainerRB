var listPeople = [];
document.querySelector('#button').addEventListener('click', capturar);

document.querySelector('#btnVer').addEventListener('click', verLocalStorange);
document.querySelector('#btnDelete').addEventListener('click', eliminarUltimo);



function capturar() {
    var people = document.querySelector('#nombre').value,
        apellido = document.querySelector('#apellido').value,
        email = document.querySelector('#email').value,
        telefono = document.querySelector('#telefono').value;

    addPeople(people, apellido, email, telefono);


}

function addPeople(pNombre, pApellido, pEmil, pTelefono) {

    var newPeople = {
        nombre: pNombre,
        apellido: pApellido,
        email: pEmil,
        telefono: pTelefono
    };
    console.log(newPeople);
    listPeople.push(newPeople);
    guardarLista(listPeople);
}

function guardarLista(peopleList) {
    localStorage.setItem('lisOfPeople', JSON.stringify(peopleList));
}

function getList() {
    var temList = localStorage.getItem('lisOfPeople');
    if (temList != null) {

        listPeople = JSON.parse(temList);
    } else {
        listPeople = [];
        alert("No hay registros en el local storange");
    }
    alert(temList.length);
    if (temList.length === 2){
        alert("No hay registros en el local storange");
    }
    return listPeople;
}

function verLocalStorange() {

    var mensaje = "";
    getList();
    for (i = 0; i < listPeople.length; i++) {
        mensaje += "Nombre  " + listPeople[i].nombre + " Apellido " + listPeople[i].apellido + "Teléfono " + listPeople[i].telefono + "Email " +
            listPeople[i].email + "\n" + "-----------------------------------" + "\n";
    }
    comment.value = mensaje;
}


function eliminarUltimo() {

    getList();

    if (listPeople <= 0) {
        alert("No hay datos para eliminar");
    } else {
        var lcStorange = JSON.parse(localStorage.getItem('lisOfPeople'));    
        lcStorange.splice(lcStorange.length-1);
        localStorage.setItem('lisOfPeople', JSON.stringify(lcStorange));
        alert("Se elimino correctamente");
        verLocalStorange();
    }
}
