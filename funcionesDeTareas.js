const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    listar: function (array){
        array.forEach( (tarea,i) => console.log((i + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado) );
    },
    escribirJSON: function(array){
        fs.writeFileSync(this.archivo, JSON.stringify(array));
    },
    guardarTarea: function(objeto,array){
        array.push(objeto);
        this.escribirJSON(array);
    },
    Tarea: function(titulo,estado='pendiente'){
        this.titulo = titulo;
        this.estado = estado;
    },
    filtrarPorEstado: function(estadoCondicion){
        let tareas = this.leerJSON();
        return tareas.filter( tarea => tarea.estado==estadoCondicion );
    }
}


module.exports = archivoTareas;