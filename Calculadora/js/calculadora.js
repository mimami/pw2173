//Constantes de electron
const {BrowserWindow}= require('electron').remote;
const app = require('electron').app;
const path = require('path');
const url = require('url');

//Otra ventana
let ventanaCalcCient;

function calculadoraCientifica(){
	ventanaCalcCient = new BrowserWindow({width:380,height:380});
	ventanaCalcCient.loadURL(url.format({
		pathname: path.join(__dirname,'calccientifica.html'),
		protocol: 'file',
		slashes: true
	}));
	VentanaCalcCient.webContents.openDevTools(); //habilita la opción de depurador del navegador
	ventanaCalcCient.show(); //muestra la pagina
}

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