# AppTareas punto de partida
Iniciamos todos desde un punto común para crear los requerimientos de la app de tareas

- Nuevos ciclos
- Filtrar tareas
- Agregar tareas
- Agregar los casos al switch

## Nuevos Ciclos
Ya hemos visto otras formas de ciclar en un array, vimos el `for`, `foreach`, `map`, `reduce`, ``filter`` y ``for of``.
Hasta ahora hemos utilizado el ``for`` para ciclar en los arrays, pero ahora necesitamos utilizar el ``foreach``.

## Nuevas funcionalidades

### Filtrar tareas
Ahora tambien conocemos el método `filter` para, como su nombre lo indica, filtrar un array de una u otra manera, en este caso, vamos a filtrar más o menos de la siguiente manera `$ node app.js filter terminadas`.

Dónde poner ese filter?, bueno, hay que crear una nueva funcionalidad en el archivo de: 
> funcionesDeTareas.js

Cómo hacerlo?, Sencillo, hay que crear la función ``filtrarPorEstado``, la función debe leer el archivo de ``tareas.json``, recorrer dicho archivo y retornar un nuevo array solo con las tareas que cumplan con el parámetro del filtro. Recuerden usar comparación estricta.

### Guardar Tareas

Para la funcionalidad de guardar tareas, debemos recordar en qué estructura estamos almacenando la lista de tareas, no pensemos en el archivo JSON, pensemos en el tipo de dato o estructura que utilizamos. 

Cada tarea es un objeto literal 
```
{
    nombre : "una",
    estado : "Pendiente"
}
```
y todo el conjunto de tareas se almancena en un array
```
[
    {
        nombre : "una",
        estado : "Pendiente"
    },
    {
        nombre : "dos",
        estado : "Pendiente"
    }
]
```
Teniendo esto presente, podemos responder las siguientes preguntas:
- Defino uno tarea en un ``objeto literal`` o en un ``array``?
- Guardo las tareas en un ``objeto literal`` o en un ``array``?`
- Qué método utilizo para guardar un nuevo elemento en la estructura correspondiente?


Si la tenemos clara la respuesta final pudo ser un ``push``, con eso sería suficiente para completar lo que necesitamos. Ahora, antes de escribir en un archivo debemos estar seguros que mi función de guardar este bien implementada. Mi recomendación es hacer una función guardar con un array de tareas cualqueira y comprobar que obtengo el array con una tarea nueva.

Si todo es correcto, cambiar la fuente de las tareas para otra variable o un archivo sería indiferente para nosotros.

### El verdadero Desafío, escribir en un archivo

Ya todo esta casi listo, solo nos falta una función `escribirJSON` que permita modificar el archivo ``tareas.json`` con la nueva tarea que queramos agregar.

Solo necesitamos tener el cuenta el método `writeFileSync()` del módulo ``fs`` que ya hemos utilizado para leer.

Si leemos un poco la documentación, nos damos cuenta que dicho método requiere de 2 parámetros, uno que indica el archivo y otro que indica el dato a escribir. Para nuestro caso algo omo `writeFileSync('tareas.json', nuevaTarea)`, tal vez necesitemos un método de JSON para convertir la nuevaTarea que creamos en un formato entendible para un archivo .json

## Una tarea por defecto
Ahora ya podemos agregar tareas nuevas, listarlas y filtrarlas, pero qué dato de la tarea estamos agregando? el título? el estado? ambos?, bueno podemos pensar inicialmente en agregar solo el título y dejar un estado por defecto, `$ node app.js crear "Una tarea"`, el estado por defecto podría ser ``Pendiente``. Como una mejora, podemos pedirle al usuario que ingrese los dos valores, título y estado, capturar los valores y crear la tarea con esos.