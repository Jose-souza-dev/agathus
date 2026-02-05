// pegando o botão

let btnMenu  = document.querySelector("#menu-btn");

btnMenu.addEventListener("click", function(){
    let navMenu = document.querySelector("#nav-menu");

    if(navMenu.style.opacity == '100'){
        navMenu.style.opacity = '0';
        navMenu.style.transition = '.4s';
    }else{
        navMenu.style.opacity = '100';
        navMenu.style.transition = '.3s';
    }
});