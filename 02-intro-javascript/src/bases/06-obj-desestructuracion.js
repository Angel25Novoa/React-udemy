//Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Cabo',
    
}
    
//Esta sintaxis aunque correcta es tediosa y poco automatizable
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


//esta sintaxis es un poco mejor pero sigue sin ser ideal
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const establishContext = ({nombre, clave, edad, rango = 'Capitán'}) => {
    //const { nombre, edad, clave } = usuario
    //console.log(nombre, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        ubicacion: {
            lat: 14.9999,
            lng: 22.8484
        }
    }
}

// para desestructurar un return hay que ponerlo del lado izquierdo del igual
const {nombreClave, anios, ubicacion:{lat, lng}} = establishContext(persona)

console.log(nombreClave, anios);
console.log(lat, lng);
