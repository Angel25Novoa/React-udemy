const personajes = ['Goku', 'Vegeta', 'Trunks']

//console.log(personajes[0]);

const [ , ,per1] = personajes

console.log(per1);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()

console.log(letras, numeros);

const usaState = (valor) => (
    [valor, ()=>{console.log('Hola Mundo');}]
)

const [nombre, serNombre] = usaState('Goku')
console.log(nombre, serNombre);

serNombre()