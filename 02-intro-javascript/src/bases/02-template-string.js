const nombre = 'Jorge'
const apellido = 'Novoa'

//const nombreCompleto = nombre + " " + apellido
const nombreCompleto= `${nombre} ${apellido}`

console.log(nombreCompleto);

const saludar = (nombre) => {
    return 'Hola ' + nombre
}

console.log(`Este es un string ${saludar(nombre)}`);
