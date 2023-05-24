//como definir funciones de 4 maneras diferentes

//opción 1
//no se recomienda utilizar esta función
function saludar(nombre) { //se añade el argumento nombre para utilizarlo cuando se imprima el nombre que quieras
    console.log( arguments );//para imprimir todos los argumentos que imprime nuestra función
    console.log('Hola ' + nombre);
}

  //opción 2
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

  //opción 3 ***favourite ones to use***
  const saludarFlecha = () => { //se elimina la palabra function de la izquierda y se sustituye por una doble flecha a la derecha
    console.log('Hola Flecha')
}

  const saludarFlecha2 = ( nombre ) => { //igual opción3 pero se le pasan unos parámetros concretos para añadir el nombre que queramos
    console.log('Hola ' + nombre)
}

saludar('Noa', 31, false, 'Spain');
saludar2()
saludarFlecha()
saludarFlecha2('Miles')