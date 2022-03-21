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

const data = document.getElementById('form')


data.addEventListener('click', async (evento) => {
    evento.preventDefault()
    console.log(data)
    // const response = await fetch( 'https://8588-181-191-143-252.ngrok.io/auth/facebook', 
    // )

    // const realResponse = await response.json()
    // console.log(realResponse)
})