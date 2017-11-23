//constantes
//const app=require('electron').app;
//const BrowserWindow = require('electron').BrowserWindow;
const {app,BrowserWindow} = require('electron'); //Lo que está en el conjunto, búscalo como lo que está del lado derecho
const url = require('url'); //Carga una página
const path = require('path'); //Muestra la ruta del archivo y este carga una página

//Constantes para PDF
const electron=require('electron');
const fs=require('fs');//sistema de archivos de la computadora
//acceso al sistema operativo
const os=require('os');
//Para declarar una funcion remota
const ipc=electron.ipcMain;
//Acceso a la terminal-linea de comandos
const shell=electron.shell;
//ECMASCRIPT = 6
let PantallaPrincipal; 
//let es una constante que tendrá el valor mas adelante, para cuando
//lo tenga, ya no podrá cambiar su valor

global.infoUsuarios={
	nombre: '',
	genero: '',
	foto: '',
	direccion: '',
	telefono: ''
}

function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({width:320,height:425});
	PantallaPrincipal.loadURL(url.format({ //Para cargar la página
		pathname: path.join(__dirname,'index.html'), //join concatena cadenas
		protocol: 'file', //tipo de archivo
		slashes: true //lleva diagonales normales
	}))
	//PantallaPrincipal.webContents.openDevTools(); 
	PantallaPrincipal.show(); //muestra la pantalla
}

//evento para PDF (declaracion)
ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf') //a la ruta la une con una carpeta temporal y el nombre del archivo
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
		if(error){ //Si hay error, detiene el programa
			throw error 
		}
		shell.openExternal('file://' + pdfPath) //Accesa al archivo en pdf
		win.close(); //Cierra la ventana que se está procesando
		
		})
	})
});


app.on('ready',muestraPantallaPrincipal) //encender la aplicación, y cuando esté listo usa la función muestraPantallaPrincipal