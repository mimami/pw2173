//Variable global
var operador = "";
function numeros(num){
	if(operador == ""){ //operando1
		
		var valorInicial = document.calculadora.operando1.value;
		if(valorInicial=="0"){
			document.calculadora.operando1.value = "";
		}
		//El + es para concatenar el valor de operando1 con el operando(num)
		document.calculadora.operando1.value = document.calculadora.operando1.value + num; 
	}else{

		var valorInicial = document.calculadora.operando2.value;
		if(valorInicial=="0"){
			document.calculadora.operando2.value = "";
		}
		document.calculadora.operando2.value = document.calculadora.operando2.value + num;

	}
}
function operadores(ope){
	operador = ope
}
function igual(){
	var valor1= document.calculadora.operando1.value;
	var valor2= document.calculadora.operando2.value;

	//eval toma una operación matemática y la resuelve
	document.calculadora.resultado= eval(valor1+operador+valor2); 
}
function borrar(){
	operador="";
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}