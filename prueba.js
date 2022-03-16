let archivoTareas = require('./funcionesDeTareas');


let tareas=archivoTareas.leerJSON();
//console.log(archivoTareas.listar(tareas));
//console.log(tareas);
let condicion = 'pendiente';
let filtradas = archivoTareas.filtrarPorEstado(condicion);
console.log(filtradas);
console.log(archivoTareas.listar(filtradas));