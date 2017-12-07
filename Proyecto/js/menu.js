var iniciaMenu = function(){
	var alta = function(){
		$("#alta").show("slow");
	}
	var altaAlumno = function(){
		var ncontrol =$("txtNcontrol").val();
		var nombre =$("txtNombre").val();
		var carrera =$("txtCarrera").val();
		var clave =$("txtClave").val();
		var parametros="opc=altaalumno"+
						"&ncontrol="+ncontrol+
						"&nombre="+nombre+
						"&carrera="+carrera+
						"&clave="+clave+
						"&id="+Math.random();
		$.ajax({
			 url:"php/entrada.php",
			 dataType: 'json', //retorno
			 type: "POST", //lo que enviamos
			 data:parametros,
			 success:function(data){
			 	if(data.respuesta == true){
			 		//alert("Bienvenido"+data.nombre);
			 		$("main").load("menu.html");
			 	}else{
			 		alert("Usuario y/o clave incorrectos");
			 	}
			 },
			 error:function(a,b,c){
			 	alert("No se pudo conectar al server");
			 }
		});
	}
	var teclaNcontrol=function(tecla){
		if(tecla.which == 13) //13=Enter
		{
			var ncontrol=$("txtNcontrol").val();
			var parametros="opc=buscaNcontrol"+
							"&ncontrol="+ncontrol+
							"&id="+Math.random();
			$.ajax({
			 url:"php/entrada.php",
			 dataType: 'json', //retorno
			 type: "POST", //lo que enviamos
			 data:parametros,
			 success:function(data){
			 	if(data.respuesta == true){
			 		//alert("Bienvenido"+data.nombre);
			 		$("main").load("menu.html");
			 	}else{
			 		alert("Usuario y/o clave incorrectos");
			 	}
			 },
			 error:function(a,b,c){
			 	alert("No se pudo conectar al server");
			 }
		});
		}
	}

	}

	$("#btnAlta").on("click",alta);
	$("#btnAltaAlumno").on(click,altaAlumno);
}

$(document).ready(iniciaMenu);