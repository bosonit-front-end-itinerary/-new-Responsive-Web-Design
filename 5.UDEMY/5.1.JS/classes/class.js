
//constructor: todo lo necesario para crear futuras nuevas instancias. metodo que se va a ejecutar cada vez que se crea nueva instancia. sintaxis mucho más limpia
class Persona {

    //estas son las propiedades que vamos a usar en nuestro constructor
    nombre = ''; 
    codigo = '';
    frase = '';
    
    //inicializar los valores de las propiedades de arriba dentro de los paréntesis de nuestro constructor
    constructor(nombre, codigo, frase) {
      //los valores definidos abajo son contenedores para ser utilizados en cada instancia de clases
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
    
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi trabajo es ${this.codigo}`);
    }
    
    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

//instanciar nueva instancia a partir de nuestra clase Persona
const spiderman = new Persona('Noa', 'Web developer', 'I love you darling'); 
const miles = new Persona('Miles', 'plumber', 'I love you to the moon and back');
console.log(spiderman);
console.log(miles);

spiderman.quienSoy();
miles.quienSoy();

spiderman.miFrase();
miles.miFrase();