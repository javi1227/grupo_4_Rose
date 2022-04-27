const btnSwitch = document.querySelector('#switch');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
// Fin burguer y menu
buttonUp = document.getElementById('button-up');
let ubicacionPrincipal  = window.pageYOffset;
document.getElementById('button-up').addEventListener('click', scrollUp);

// Inicio click y subir a header


function scrollUp() {
    var currentScroll= document.body.scrollTop /*|| document.body.scrollTop; */ /*esta variable nos dice que tengo el control del movimiento del scroll*/
    if(currentScroll > 0) {  /*Si currentScroll es mayor a 0 nos regresa arriba*/
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0,currentScroll - (currentScroll / 10));
    }
}

// BOTON para subir
window.onscroll = function() {
    var scroll= document.body.scrollTop;
    if (scroll > 100) {
        buttonUp.style.transform= 'scale(1)';
    }else if (scroll < 500) {
        buttonUp.style.transform= 'scale(0)';
    }
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
        console.log(document.getElementById('navbar').style.top);
    }else{
        document.getElementById('navbar').style.top = '-100px';
        console.log(document.getElementById('navbar').style.top);
    }
    ubicacionPrincipal = Desplazamiento_Actual
}
// FIN click y subir a header

// BURGUER
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// FIN BURGUER

// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

if (slides.length) {
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }  
}


// modo incognito



btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});
