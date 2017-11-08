//El signo de $ simboliza a JQuery
var inicia = function(){
	// JSON = JavaScript Object Notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	alert(data.results[0].name.first+" "+data.results[0].name.last);
    //console.log(data);
  }
});
	//alert("Lista la página");
}

//Iniciamos JQuery, cuando la página esté lista ejecuta la función inicia
$(document).ready(inicia);