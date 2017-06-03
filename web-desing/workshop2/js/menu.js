var btnMenu = document.getElementById('btnMenu'); /*menu variable*/
var nav = document.getElementById('nav'); /*nav variable*/

/*code for the transition*/

btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
})