var btnMenu = document.getElementById('btnMenu'); /*menu variable*/
var nav = document.getElementById('nav'); /*nav variable*/
var numero
/*code for the transition*/

btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
})


function adelante(){
    numero++;
    if(numero == 4)
    numero = 1;
    var foto = document.getElementById("foto");
    foto.src= "gallery/foto"+numero+".jpg";M
}