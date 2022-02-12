import heroes, {owners} from '../data/heroes'

//console.log(heroes);

// const resultado = (id) => (
//     heroes.find((heroe) => {
//         if (heroe.id === id){
//             return true
//         } else {
//             return false
//         }
//     })
// )

const resultado = (id) => (
    heroes.find((heroe) =>  heroe.id === id)
)

//console.log(resultado(2));

const getHeroesByOwner = (owner) => (
    heroes.filter((heroe) => heroe.owner === owner)
)

//console.log(getHeroesByOwner('Marvel'));

export {
    resultado,
    getHeroesByOwner
}
