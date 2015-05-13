function guardarTarea() {
	// Accedemos a la instancia global de la colección
	var tareas = Alloy.Collections.tarea;

	// Guardamos los datos de la tarea que está siendo creada
	var tarea = Alloy.createModel('tarea');
	
	// Objeto con los atributos de la tarea (valores)
	var atributos = {
		estado: 0,
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
		
		// Añadimos la tarea a la colección, REFRESCA LA UI
		tareas.add(tarea);
		
		// Si la tarea es válida (validate en el modelo), cierro la ventana
		cerrarVentana();
	}});
	
}

function enfocarCampoTexto() {
    $.titulo.focus();
}

function cerrarVentana() {
	$.anadirTarea.close();
}