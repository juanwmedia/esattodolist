// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// Helper para mostrar datos del filesystem
Alloy.Globals.datosFs = function() {
	Titanium.API.info('Resources Directory :' + Titanium.Filesystem.resourcesDirectory);
	Titanium.API.info('Temp Directory :' + Titanium.Filesystem.tempDirectory);
	Titanium.API.info('Application Directory :' + Titanium.Filesystem.applicationDirectory);
	Titanium.API.info('Application Data Directory :' + Titanium.Filesystem.applicationDataDirectory);
	Titanium.API.info('Application Support Directory :' + Titanium.Filesystem.applicationSupportDirectory);
};

// Helper para borrar modelos
Alloy.Globals.borrarModelos = function(modelo) {

	var coleccion = Alloy.createCollection(modelo);
	coleccion.fetch();

	console.log(JSON.stringify(coleccion, null, 4));

	/*coleccion.each(function(model) {
		model.destroy();
		console.log('Modelo destruído');
	});*/

	while (coleccion.length) {
		coleccion.at(0).destroy();
		console.log('Modelo destruído');
	}
};