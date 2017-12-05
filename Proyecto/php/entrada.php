<?php
	include 'conexion.php'; //Para poder usar las funciones de conexion.php, bien se puede usar 'include' ó 'require'

	function validaEntrada(){
		$conexion=conectaBD();
		$respuesta=false;
		//los atributos de arriba vienen del archivo js
		$usuario=$_POST("usuario");
		$clave=md5($_POST("clave")); //Convierte la clave en md5 para compararla con la clave de la bd que está en md5
		$consulta="select ncontrol,clave from alumnos where ncontrol='".$usuario."' and clave='".$clave."' limit 1"; //En PHP, para concatenar cadenas se usa (.)
		//RecordSet = conjunto de registros
		$resConsulta=mysqli_query($conexion,$consulta); //devuelve los resultados de la consulta
		$nombre="";

		if(mysqli_num_rows($resConsulta)>0){
			$respuesta=true;
			if($registro=mysqli_fetch_array($resConsulta)) //fetch_array agarra un solo registro
			{
				$nombre=$registro["nombre"];
			}
		}
		$salida = array('respuesta' => $respuesta, 'nombre' => $nombre ); //Es un array asociativo (utiliza como índice un nombre)
		print json_encode($salida);
	}
	$opc=$_POST["opc"];
	switch ($opc) {
		case 'valida':
			validaEntrada();
			break;
		
		default:
			# code...
			break;
	}
?>