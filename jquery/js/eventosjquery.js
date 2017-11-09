//El signo de $ simboliza a JQuery
var inicia = function(){
	var nuevo = function(){
		// JSON = JavaScript Object Notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	//alert(data.results[0].name.first+" "+data.results[0].name.last);
    //console.log(data);
    
    //el método html sirve para incrustar texto o código
    $("#nombre").html("<h1>"+data.results[0].name.first +" "+ data.results[0].name.last);
    //el método attr cambia el contenido del atributo, sirve para obtener y/o 
    //modificar valores en los atributos de los diferentes elementos

    //$("#nombre").append(data.results[0].name.first +" "+ data.results[0].name.last);
    //el método append sirve para agregar contenido al html sin que este se pierda 
    $("#foto").attr("src",data.results[0].picture.large); 
    $("#direccion").html("Dirección: "+data.results[0].location.city);
  

  	}
});

}
	
	//alert("Lista la página");
	$("#btnNuevo").on("click",nuevo); 
	//al hacer click, se va a disparar la función nuevo 
	//(si en lugar de on, ponemos off, el evento no se va a disparar)
}

//Iniciamos JQuery, cuando la página esté lista ejecuta la función inicia
$(document).ready(inicia);