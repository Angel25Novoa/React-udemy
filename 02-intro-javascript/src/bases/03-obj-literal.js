const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12345,
        lat: 14.3535,
        lng: 34.4545,
    }
}

console.table({persona:persona})

//esta asignación es inconveniente ya que se modifica el valor de persona y persona2
// const persona2 = persona
// persona2.nombre = 'Peter'

// console.log(persona2);

const persona3 = {
    ...persona
}

persona3.nombre = 'Steve'

console.table(persona3);