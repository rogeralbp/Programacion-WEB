var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var BTN= document.getElementById('BTN');
function Create(){
    form1.style.display='block';
    form2.style.display='none';
}
function Edit(){
    form2.style.display='block';
    form1.style.display='none';
}





function confirmar2(){
    var confirm= alertify.confirm('','Modify driver',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'}); 
    //callbak al pulsar botón positivo
    confirm.set('onok', function(){
        alertify.success('Modify successfully');
    });
    //callbak al pulsar botón negativo
    confirm.set('oncancel', function(){ 
        alertify.error('cancelled');
    })	

}
function confirmar(){
    var confirm= alertify.confirm('','Create driver',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'}); 
    //callbak al pulsar botón positivo
    confirm.set('onok', function(){
        alertify.success('create successfully');
    });
    //callbak al pulsar botón negativo
    confirm.set('oncancel', function(){ 
        alertify.error('cancelled');
    })	

}

$(document).ready(function(){
$("#boton").click(function () {
	confirmar();
	});
});


$(document).ready(function(){
    $("#boton2").click(function () {
        confirmar2();
        });
    });







