const burger = document.querySelector('.burger');
const navmenu = document.querySelector('.nav');

burger.addEventListener('click', function(){
    navmenu.classList.toggle('open_menu');
} )

const titleMenu = document.querySelector('.nav_name');
const MenuList = document.querySelector('.footer_nav_menu');

titleMenu.addEventListener('click', function(){
    MenuList.classList.toggle('open_list');
})