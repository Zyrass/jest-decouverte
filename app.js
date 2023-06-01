const addition = (x, y, ...rest) => {
    let sommes = x + y
    if (rest.length > 0) {
        for (chiffre of rest) {
            sommes += chiffre
        }
    }
    return sommes
}


let x = Math.floor(Math.random() * 100 + 1)
let y = Math.floor(Math.random() * 100 + 1)

console.log(addition(x, y))
console.log(addition(x, y, 57, 69, 100))

const fruits = [
    { id: 69, nom: 'Abricots' },
    { id: 47, nom: 'Fraises' },
    { id: 33, nom: 'Pastèques' },
    { id: 23, nom: 'Melon' },
]

const tarek = {
    age: 29,
    sexe: 'mâle alpha',
    lastname: 'Taguine',
    firstname: 'Tarek',
}

const calcul = (x, y) => {
    return x + y
}

module.exports = {
    addition,
    fruits,
    tarek,
    calcul
}
