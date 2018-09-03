var ventanaLogin=document.getElementById("ventana-login");
var ventanaRegistro=document.getElementById("ventana-registro");

function Login(){
    ventanaLogin.style.display='block'
    ventanaRegistro.style.display='none';
}

function Registro(){
    ventanaLogin.style.display='none'
    ventanaRegistro.style.display='block';
}

$('#opcion-login').click(function(){
    /*$("#opcion-registro").css({
        "background":"green"
    });
    alert("Opcion Login");*/
    Login();
})

$('#opcion-registro').click(function(){
    Registro();
    /*alert("Opcion Registro");*/
})
    
