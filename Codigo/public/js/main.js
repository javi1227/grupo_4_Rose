// burguer y menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
// Fin burguer y menu
buttonUp = document.getElementById('button-up');
let ubicacionPrincipal  = window.pageYOffset;
document.getElementById('button-up').addEventListener('click', scrollUp);

// Inicio click y subir a header


function scrollUp() {
    var currentScroll= document.documentElement.scrollTop /*|| document.body.scrollTop; */ /*esta variable nos dice que tengo el control del movimiento del scroll*/
    if(currentScroll > 0) {  /*Si currentScroll es mayor a 0 nos regresa arriba*/
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0,currentScroll - (currentScroll / 10));
    }
}


window.onscroll = function() {
    var scroll= document.documentElement.scrollTop;

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
