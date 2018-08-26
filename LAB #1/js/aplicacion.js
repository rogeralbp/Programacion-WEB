
console.log("Documento listo ROGER");


var btnCF = document.getElementById("btnCambiarFondo");
var btnCE = document.getElementById("btnCompartir");
var imgActual="1"
var latitud;
var longitud;

function cambiarFondoPantalla(){
    console.log("Se esta cambiando el fondo de pantalla");
    var body =document.getElementById('body');
    
    if(imgActual=="1"){
        body.style.backgroundImage='url(2.jpg)';
        imgActual="2";
    }
    else if(imgActual=="2") {
        body.style.backgroundImage='url(3.jpg)';
        imgActual="3";
    }
    else if(imgActual=="3") {
        body.style.backgroundImage='url(1.jpg)';
        imgActual="1";
    }
}

function buscarEstado(elemento){
    var lineaTiempo = document.getElementById("estados").getElementsByTagName("li");

    for(var i =0;i<lineaTiempo.length;i++){

        if(lineaTiempo[i].innerHTML==elemento){
            return false;
        }
    }
    return true;
};

function compartirEstado(){
    var nuevoEstado=document.getElementById("status").value;
    
    if(nuevoEstado.length>0){

        if(buscarEstado(nuevoEstado)){
            var li=document.createElement("li");
            li.innerText=nuevoEstado;
            document.getElementById("estados").appendChild(li);
        }
        else{
            alert("Ya existe un estado con el mismo contenido");
        }
    }
    console.log("Se esta compartiendo tu estado "+nuevoEstado);
};

function verLocalizacionMapa(){

    var localizacion=document.getElementById("servicio-web"); 

    if(navigator.geolocation){
        console.log("Tu navegador soporta la localizacion");
    }
    else
    {
        console.log("Tu navegador  NO soporta la localizacion");
    }

    function ubicacionImagen(posicion){
        latitud=posicion.coords.latitude;
        longitud = posicion.coords.longitude;
    
        console.log("Latitud  "+latitud);
        console.log("Longintud  "+longitud);
    }
    
    function error(){
        console.log("No se puede obtener la loclizacion");
    }
    navigator.geolocation.getCurrentPosition(ubicacionImagen,error );
    
};

function iniciarMapa(latitud,longitud) {
    // The location of Uluru
    var uluru = {lat: 10.367994399999999, lng: -84.5195877};
    // The map, centered at Uluru
    var servicio_web = new google.maps.Map(
        document.getElementById('servicio_web'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

btnCF.addEventListener("click",cambiarFondoPantalla);
btnCE.addEventListener("click",compartirEstado);
btnCE.addEventListener("click",verLocalizacionMapa);
btnCE.addEventListener("click",iniciarMapa);
