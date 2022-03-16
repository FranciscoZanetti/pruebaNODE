let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];
let tareas = archivoTareas.leerJSON();




switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        archivoTareas.listar(tareas);
        break;
    
    case 'crear':
        let titulo = process.argv[3];
        let estado = process.argv[4];
        switch (titulo){
            case undefined:
                console.log('Atención - Tienes que pasarme una tarea');
                break;
            default:
                let nuevaTarea = new archivoTareas.Tarea(titulo,estado);
                archivoTareas.guardarTarea(nuevaTarea,tareas);
                break;
        }
        break;
    
    case 'filtrar':
        let estadoFiltro = process.argv[3];
        
        switch (estadoFiltro){
            case undefined:
                console.log('Atención - Tienes que pasarme un estado filtro');
                break;

            case 'terminada':
            case 'en progreso':
            case 'pendiente':
                let tareasFiltradas = archivoTareas.filtrarPorEstado(estadoFiltro);
                archivoTareas.listar(tareasFiltradas);
                break;
                
            default:
                console.log('El estado ingresado no es válido');
                break;
        }

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}