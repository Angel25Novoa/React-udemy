//const arreglo = new Array(100)

const arreglo = [1,2,3,4]
//No es recomendable usar push porque modibija el objeto principal
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [...arreglo, 5]
//arreglo2.push(5)

const arreglo3 = arreglo2.map((num) => {
    return num*2
})

console.log(arreglo); 
console.log(arreglo2);
console.log(arreglo3);
