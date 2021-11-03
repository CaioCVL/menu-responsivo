
/**
 * MENU SECUNDARIO DE DOCS
 */

var menuDoc = document.getElementsByClassName('link-nav-arrow')[0];

var listSecond = document.querySelector('.list-nav-second');


menuDoc.addEventListener('click', function(){

    listSecond.classList.toggle('hide');
    menuDoc.classList.toggle('arrow')

});


/**
 * MENU HAMBURGUER
 * ACIONAMENTO DO MENU
 */

var iconMenu = document.querySelector('.icon-menu');
//var content = document.querySelector('.content');
//var menu = document.querySelector('.menu');
let body = document.querySelector('body');

iconMenu.addEventListener('click', function(){

    body.classList.toggle('-move');
   // menu.classList.toggle('menu-move');
  //  content.classList.toggle('content-move');

});


/**
 * RECOLHIMENTO DO MENU CLICANDO NO CONTENT
 */

let content = document.querySelector('.content');

content.addEventListener('click', function(){
    body.classList.remove('-move');
    
});



