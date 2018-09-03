function confirmar(){
    var confirm= alertify.confirm('Confirmar','Desea realizar este viaje?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'}); 
   
}

$(document).ready(function(){
$("#btn").click(function () {
	confirmar();
	});
});
