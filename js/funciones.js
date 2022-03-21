jQuery(document).ready(listo());



function listo(){
    jQuery(".hamb").click(function (e) {
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times");

    });

    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").removeClass("open")
        jQuery(".hamb i").removeClass("fa-times")

        let dev = jQuery(this).attr("href");

        jQuery("html, body").animate({
            'scrollTop': jQuery(dev).offset().top -76
        })  
    })

    jQuery(".boton.boton-rojo").click(function(esto){
        esto.preventDefault();
        let boton = jQuery(this).attr("href");
        
        jQuery("html, body").animate({
            'scrollTop': jQuery(boton).offset().top -76
        })  
    })
} 
const data = document.getElementById('boton-form')

data.addEventListener('click', async (evento) => {
    evento.preventDefault()
    let nombreInput = document.getElementById('nombre')
    let nombre = nombreInput.value
    let emailInput = document.getElementById('email')
    let email = emailInput.value
    let msgInput = document.getElementById('mensaje')
    let msg = msgInput.value
    const data = {Nombre: nombre, Email: email, Mensaje: msg}

    if(nombre === "null" || email === "" || msg === ""){
        alert("Todos los datos del formulario de contacto deben ser completados")
        return
    }

    
    const body = JSON.stringify(data)
    const response = await fetch(`https://wa.me/+5492964482048/text=Nombre${nombre}Email${email}"Mensaje${msg}`)  //=====>> Crear backend
   
    const realResponse = await response.json()
    console.log(realResponse)

})