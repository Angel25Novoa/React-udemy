//Este tipo de sintaxis puede sobreescribir las funciones
// function saludar ( nombre ) {
//     return `Hola, ${nombre}`
// }

// const saludar = 30

//Esta sintaxis es mas correcta ya que no se reasignaría el valor de la función
// const saludar = function (nombre){
//     return `Hola, ${nombre}`
// }

const nombre = 'Angel'

//Con valores primitivos un return implícito puede ser sin parentesís
const saludar = (nombre) => `Hola, ${nombre}`


console.log(saludar(nombre));

const getUser = () => (
    {
        uid: 'asdfg',
        username: 'Duendisky'
    }
)

console.log(getUser());

// function getUsuarioActivo (nombre){
//     return {
//         uid: 'asdfasdfasf',
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => (
    {
        uid: 'asdfasdfasf',
        username: nombre
    }
)

const usuarioActivo = getUsuarioActivo(nombre)

console.table(usuarioActivo);
