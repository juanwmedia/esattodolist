exports.definition = {
	config : {
		columns : {
			id : "INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT",
			titulo : "TEXT",
			descripcion : "TEXT",
			estado : "INTEGER",
			fecha_completado : "TEXT"
		},
		adapter : {
			type : "sql",
			collection_name : "tarea",
			idAttribute : "id"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {

			// Validación para las tareas
			// - http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Collection_and_Model_Objects-section-36739589_AlloyCollectionandModelObjects-ExtendingtheBackbone.ModelClass
			// - http://htmlpreview.github.io/?https://raw.github.com/documentcloud/backbone/0.9.2/index.html#Model-validate
			validate : function(attrs) {

				for (var key in attrs) {

					if (key === "titulo") {
						if (attrs[key].length <= 0) {
							return 'Debes proveer un título.';
						}
					}
					if (key === "descripcion") {
						if (attrs[key].length <= 0) {
							return 'Debes proveer una descripción.';
						}
					}

				}
			}
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			// - http://docs.appcelerator.com/backbone/0.9.2/#Collection-comparator
			comparator : function(tarea) {
				return -tarea.id;
			}
		});

		return Collection;
	}
};
