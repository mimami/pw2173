<?php
	include 'conexion.php'; //Para poder usar las funciones de conexion.php, bien se puede usar 'include' ó 'require'

	function validaEntrada(){
		$conexion = conectaBD();
		$respuesta = false;
		$usuario = $_POST["usuario"];
		$clave = md5($_POST["clave"]); //Convierte la clave en md5 para compararla con la clave de la bd que está en md5
		$consulta = "select ncontrol,clave from alumnos where ncontrol='".$usuario."' and clave='".$clave."' limit 1"; //En PHP, para concatenar cadenas se usa (.)
		$resConsulta = mysqli_query($conexion,$consulta);
		if(mysqli_num_rows($resConsulta) > 0){
			$respuesta = true;
		}
		$salida = array('respuesta' => $respuesta ); //Es un array asociativo (utiliza como índice un nombre)
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