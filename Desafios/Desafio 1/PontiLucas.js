class Usuario{

  constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  
  getFullName(){
    return this.nombre + ' ' + this.apellido;
  }

  addMascota(tipo){
    this.mascotas.push(tipo);
    void this.mascotas;
  }

  countMascotas(){
    return this.mascotas.length;
  }

  addBook({autor, titulo}){
    this.libros.push({autor : autor, titulo : titulo});
    void this.libros;
  }

  getBookNames(){
    let listaLibros = [];
    this.libros.forEach(libro =>     
    listaLibros.push(libro.titulo));
    return listaLibros;
  }
}

let persona = new Usuario('Lucas', 'Ponti',[{autor: 'Edgar Allan Poe', titulo: 'El Gato Negro'}],['Perro']);

console.log(persona.getFullName());
console.log(persona.countMascotas());
persona.addMascota('Gato');
persona.addMascota('Hamster');
console.log(persona.countMascotas());
persona.addMascota('Pez');
console.log(persona.countMascotas());
persona.addBook({autor: 'Antony Burgues', titulo: 'La Naranja Mecanica'
});
console.log(persona.getBookNames());
persona.addBook({autor: 'Virginia Woolf', titulo: 'Un Cuarto Propio'
});
console.log(persona.getBookNames());