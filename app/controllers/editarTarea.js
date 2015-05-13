var idModelo = arguments[0] || {};

// Obtengo la colección y el modelo asociado a este controlador
var tareas = Alloy.Collections.tarea;
var tarea = tareas.get(idModelo);

// Cambio el título de la ventana
$.editarTarea.title = "Editar: " + tarea.get('titulo');

// Asocio los textFields/textArea con los datos de la tarea
$.titulo.value = tarea.get('titulo');
$.descripcion.value = tarea.get('descripcion');

function guardarTarea() {
	
	// Objeto con los atributos de la tarea (valores)
	var atributos = {
		titulo : $.titulo.value,
		descripcion : $.descripcion.value
	};

	// Si la validación del modelo falla, mostramos el mensaje
	tarea.on("error", function(model, error) {
		alert(error);
	});

	// Guardamos la tarea usando la estrategia de persistencia elegida
	// - http://docs.appcelerator.com/backbone/0.9.2/#Model-save
	tarea.save(atributos, {success :function() {
		
		// Si la tarea es válida (validate en el modelo), cierro la ventana
		cerrarVentana();
	}});
}

function enfocarCampoTexto() {
    $.titulo.focus();
}

function cerrarVentana() {
	$.editarTarea.close();
}