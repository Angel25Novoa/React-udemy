import { resultado, getHeroesByOwner } from "./08-import";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = resultado(2)
//         resolve(heroe)
//         // reject('No se pudo encontrar al heroe')
//     }, 2000)
// })

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err))

const getHeroeByIDAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = resultado(id)
            if (heroe) {
                resolve(heroe)
            } else {
                reject('No se pudo encontrar al heroe')
            }
        }, 2000)
    })
}

getHeroeByIDAsync(4)
    .then(console.log)
    .catch(console.warn)