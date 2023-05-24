let personaje = {
    nombre: 'Tony Stark',
    codename: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip:'10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

  console.log(personaje); //imprime objeto completo
  console.log('Nombre', personaje.nombre); //imprime nombre dot notation
  console.log('Nombre', personaje['nombre']); //imprime nombre bracket notation
  console.log('Coords', personaje.coords); //imprime objeto coordenadas
  console.log('Lat', personaje.coords.lat); //imprime latitud a través de concatenacion de dot notation
  console.log ('No. trajes', personaje.trajes.length); //calcula numero de trajes
  console.log ('último traje', personaje.trajes[personaje.trajes.length - 1]); //imprime sólo último traje