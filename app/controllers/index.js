// Guardamos una referencia a navigationWindow
Alloy.Globals.navigationWindow = $.navigationWindow;

// Accedo la Collection instanciada (en XML) en la vista
// - http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-CollectionElement
var tareas = Alloy.Collections.tarea;

// Open general
(OS_ANDROID) ? $.index.open() : $.navigationWindow.open();

// Tras abrir la ventana, obtengo las tareas del servidor/SQL/properties
tareas.fetch();

// Abre la pantalla para añadir tareas
function anadirTarea(_evento) {
	var anadirTarea = Alloy.createController('anadirTarea').getView();
	(OS_ANDROID) ? anadirTarea.open() : $.navigationWindow.openWindow(anadirTarea);
}

// Pantalla de edición de tareas
function editarTarea(_evento) {
	var idModelo = _evento.row.model;
	var editarTarea = Alloy.createController('editarTarea', idModelo).getView();
	(OS_ANDROID) ? editarTarea.open() : $.navigationWindow.openWindow(editarTarea);
}

//Alloy.Globals.borrarModelos('tarea');

//Alloy.Globals.datosFs();
