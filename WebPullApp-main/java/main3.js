window.addEventListener('scroll', function(){
    let animacion = document.getElementById('equip');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-derecha 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('peso');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-izquierda 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('cuerda');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-derecha 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('banda');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-izquierda 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('barra');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-derecha 1s ease-out'
    }
})

