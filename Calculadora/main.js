//constantes
const app=require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const url = require('url'); //Carga una página
const path = require('path'); //Muestra la ruta del archivo y este carga una página
//ECMASCRIPT = 6
let PantallaPrincipal; 
//let es una constante que tendrá el valor mas adelante, para cuando
//lo tenga, ya no podrá cambiar su valor

function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({width:320,height:425});
	PantallaPrincipal.loadURL(url.format({ //Para cargar la página
		pathname: path.join(__dirname,'index.html'), //join concatena cadenas
		protocol: 'file', //tipo de archivo
		slashes: true //lleva diagonales normales
	}))
	PantallaPrincipal.webContents.openDevTools(); 
	PantallaPrincipal.show(); //muestra la pantalla
}


app.on('ready',muestraPantallaPrincipal) //encender la aplicación, y cuando esté listo usa la función muestraPantallaPrincipal
