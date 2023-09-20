let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = ()=>{
    menuBtn.classList.toggle('fa-times'); 
    navbar2.classList.toggle('active');
}