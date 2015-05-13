// Requerimos moment.js, incluído POR DEFECTO con Alloy
// - http://momentjs.com/
var moment = require('alloy/moment');

// Obtengo la colección y el modelo asociado a este controlador
var tareas = Alloy.Collections.tarea;
var tarea = tareas.get($.tableViewRow.model);

// Coloreo la fila según el estado de la tarea
if (tarea.get('estado')) {
	$.tableViewRow.backgroundColor = "#c6ffb0";
	$.check.image = "/completada.png";
	$.label.color = "#9b9b9b";
} else {
	$.tableViewRow.backgroundColor = "#ffffff";
	$.check.image = "/nocompletada.png";
	$.label.color = "#000000";
}

// Cambio el estado de la tarea y su aspecto
function cambiarEstado(_evento) {

	// - http://stackoverflow.com/questions/15144680/how-do-i-prevent-event-bubbling-in-a-titanium-alloy-view
	_evento.cancelBubble = true;

	// ¿La tarea está completada o sin completar?
	// TODO - Refactorizar
	if (tarea.get('estado')) {
		$.tableViewRow.backgroundColor = "#ffffff";
		$.check.image = "/nocompletada.png";
		$.label.color = "#000000";

		tarea.save( {estado : 0}, {silent : true} );

	} else {
		$.tableViewRow.backgroundColor = "#c6ffb0";
		$.check.image = "/completada.png";
		$.label.color = "#9b9b9b";

		tarea.save({
			estado : 1,
			fecha_completado : moment().unix()
		}, {
			silent : true
		});
		
		// Convertir la fecha de Unix Timestamp a date
		var unixTimeStamp = tarea.get('fecha_completado'); // 1430904227
		
		// http://momentjs.com/docs/#/displaying/
		var dateString = moment.unix(unixTimeStamp).format("MM/DD/YYYY");
		
		// Mostrar la fecha
		console.log(dateString); // 05/06/2015
	}
}
