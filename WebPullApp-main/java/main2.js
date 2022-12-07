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
    let animacion = document.getElementById('sup');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-izquierda 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('bene');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-derecha 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('sup2');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-izquierda 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('sup3');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-derecha 1s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('sup4');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2; 

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover-izquierda 1s ease-out'
    }
})


