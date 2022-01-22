const buttonDropdown = document.querySelector('.button-menu');

function abreMenu() { 
    let menuMobile = document.querySelector('.mobile');
    buttonDropdown.classList.toggle('ativo');
    menuMobile.classList.toggle('active');
 }

buttonDropdown.addEventListener('click', abreMenu);

