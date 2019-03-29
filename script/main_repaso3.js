function cargarPagina(){
    
    var nombre=document.querySelector('.nombre');
    var url=document.querySelector('.url');
    var rojo=document.querySelector('.rojo');
    var verde=document.querySelector('.verde');
    var azul=document.querySelector('.azul');
    var selector=document.querySelector('.selector');
    var color=document.querySelector('.color');
    var btn_generar=document.querySelector('.generar');
    var btn_crearAuto=document.querySelector('.crearAuto');
    var eliminarAuto=document.querySelector('.eliminarAuto');
    var perfiles=document.querySelector('.perfiles');
    var imagenes=[
        'http://cdn.lookanimals.com/pictures/images.animalpicturesociety.com/images/00/2_cute-baby-animal-wallpaper-desktop.jpg',
        
        'https://i.ytimg.com/vi/jub5Z6DMc7U/hqdefault.jpg',
        
        'http://www.clker.com/cliparts/2/8/4/5/1285351927526757201baby-chicken.jpg'
    ];
    var nombres=[
        'Juan',
        'Aleja',
        'Maria'
    ];
    var intervalo;
    
    
    
    
    function colorSelector(){
        selector.style.backgroundColor='rgb('+rojo.value+','+verde.value+','+azul.value+')';
    }
    rojo.addEventListener('input',colorSelector);
    verde.addEventListener('input',colorSelector);
    azul.addEventListener('input',colorSelector);
    
    
    function crearPerfil(){
        
        var perfilNuevo=document.createElement('div');
        var textoNuevo=document.createElement('p');
        perfiles.appendChild(perfilNuevo);
        perfilNuevo.appendChild(textoNuevo);
        
        perfilNuevo.className="perfiles__contenedor";
        perfilNuevo.style.backgroundImage='url('+url.value+')';
        perfilNuevo.style.border='4px solid rgb('+rojo.value+','+verde.value+','+azul.value+')';
        
        textoNuevo.className="perfiles__texto";
        textoNuevo.innerHTML=nombre.value;
        textoNuevo.style.color=color.value;
        
      
        
    }
    btn_generar.addEventListener('click',crearPerfil);
    
    function perfilAuto(){
        var puntero=Math.floor(Math.random()*imagenes.length);
        var r=Math.floor(Math.random()*255);
        var g=Math.floor(Math.random()*255);
        var b=Math.floor(Math.random()*255);
        var colorRandom='rgb('+r+','+g+','+b+')';
        

        var perfilNuevo=document.createElement('div');
        var textoNuevo=document.createElement('p');
        perfiles.appendChild(perfilNuevo);
        perfilNuevo.appendChild(textoNuevo);
        
        perfilNuevo.className="perfiles__contenedor";
        perfilNuevo.style.backgroundImage='url('+imagenes[puntero]+')';
        console.log('url('+imagenes[puntero]+')');
        console.log(puntero);
        perfilNuevo.style.border='4px solid'+colorRandom;
        
        textoNuevo.className="perfiles__texto";
        textoNuevo.innerHTML=nombres[puntero];
        textoNuevo.style.color=colorRandom;

        
    }

    function tiempo(){
        if (!intervalo) {
            intervalo = setInterval(perfilAuto, 1000);
            btn_crearAuto.innerHTML = "Pausa";
        } else {
            clearInterval(intervalo);
            intervalo=null;
            btn_crearAuto.innerHTML = "Continuar";
        }
    }


    btn_crearAuto.addEventListener('click',tiempo);
    
    
}


window.addEventListener('load',cargarPagina);