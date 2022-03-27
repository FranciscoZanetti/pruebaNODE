let autos=require('./autos');

let personas=require('./personas');

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
       let autoEncontrado=null;
       for (let i=0; i<this.autos.length; i++){
           autos[i].patente==patente ? autoEncontrado=autos[i] : '';
       } return autoEncontrado;
   },

   venderAuto: function(patente){
       let autoEncontrado=this.buscarAuto(patente);
       this.autos.forEach(function(auto){
           auto==autoEncontrado ? auto.vendido=true : ''
       });
   },

   autosParaLaVenta: function(){
      return this.autos.filter(auto => auto.vendido==false);
   },

   autosNuevos: function(){
      autos0km=this.autosParaLaVenta();
      return autos0km.filter(auto => auto.km<100);
   },

   listaDeVentas: function(){
       let listaDeVenta=[];
       this.autos.forEach( auto => auto.vendido==true ? listaDeVenta.push(auto.precio) : '');
       return listaDeVenta;
   },

   totalDeVentas: function(){
    let listaDeVenta=this.listaDeVentas();
    if (listaDeVenta>0){
        return listaDeVenta.reduce( (acum,el) => acum+el );
    } else{
        return 0;
    };
   },

   puedeComprar: function(auto,persona){
      let cuota=(auto.precio)/(auto.cuotas);
      return ( (persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas >= cuota) );
   },

   autosQuePuedeComprar: function(persona){
      let autosSinVender=this.autosParaLaVenta();
      let autosComprables=[]
      autosSinVender.forEach(function(auto){
          (concesionaria.puedeComprar(auto,persona))==true ? autosComprables.push(auto) : '';
      });
      return autosComprables;
   },

}

//let autoEncontrado=concesionaria.buscarAuto('JA123');
//console.log(autoEncontrado);
//concesionaria.venderAuto('APL123');
console.log(concesionaria.autos);
//concesionaria.venderAuto('JJK116');
//let preciosDeVentas=concesionaria.listaDeVentas();
//console.log(preciosDeVentas);

let autosComprables=concesionaria.autosQuePuedeComprar(personas[0]);
console.log(autosComprables);

//console.log(concesionaria.puedeComprar(autos[1],personas[0]));