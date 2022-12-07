const OpenModal = document.querySelector('.boton-modal');
const modelo = document.querySelector('.modelo');
const CloseModal = document.querySelector('.modal_close');

OpenModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modelo.classList.add('modal--show')
});

CloseModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modelo.classList.remove('modal--show');
});





window.addEventListener('scroll', function(){
    let animacion = document.getElementById('parrafo1');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-derecha 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('parrafo2');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-izquierda 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('parrafo3');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-derecha 1s ease-out'
    }
})

