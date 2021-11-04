
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

/**
 * BARRA AZUL DE SELEÇÃO
 */

let linksNav = document.querySelectorAll('.link-nav');


linksNav.forEach(function(currentValue){
    currentValue.addEventListener('click', function(){

        linksNav.forEach(function(currentValue){
            currentValue.classList.remove('active');
        })


        currentValue.classList.add('active');
    })
});
