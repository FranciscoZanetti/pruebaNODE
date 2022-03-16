function agregarHttp(url) {
    return 'http://'+url;
}

function procesar(array,funcion){
    for (let i=0;i<array.length;i++){
        array[i]=funcion(array[i]);
    }
}

a=['www.google.com','www.yahoo.com'];
procesar(a,agregarHttp);
console.log(a);