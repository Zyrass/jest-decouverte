const myTest = require('../app.js')

let x = Math.floor(Math.random() * 100 + 1)
let y = Math.floor(Math.random() * 100 + 1)

describe('Test pour la partie addition', () => {
    test('Addition de 2 nombres aléatoire', () => {
        expect(myTest.addition(x, y)).toEqual(x + y)
    })
    test('Addition: 50 + 50 + 25 + 75 = 200', () => {
        expect(myTest.addition(50, 50, 25, 75)).toEqual(200)
    })
})

test('Tarek doit avoir 28 ans', () => {
    expect(myTest.tarek.age).toEqual(28)
})
test('Tarek doit être un male alpha', () => {
    expect(myTest.tarek.sexe).toMatch(/male alpha/)
})
test('Le prénom doit être Tarek', () => {
    expect(myTest.tarek.firstname).toBe('Tarek')
})
test('Le nom doit être Taguine', () => {
    expect(myTest.tarek.lastname).toMatch(/Taguine/)
})

let x1 = 60
let y1 = 40
test('Calcul de x1 + y1 = 100', () => {
    expect(x1 + y1).toEqual(100)
})

describe('Vérification du tableau de fruits', () => {
    test('Le tableau de fruits est un tableau', () => {
        expect(Array.isArray(myTest.fruits)).toBe(true) // Vérifie si fruits est bien un tableau
    })

    test('Le tableau de fruits ne contient que des objets', () => {
        expect(myTest.fruits.every((item) => typeof item === 'object')).toBe(
            true,
        ) // Vérifie si tous les éléments de fruits sont des objets
    })

    test('Les objets du tableau de fruits ont les propriétés id et nom', () => {
        expect(
            myTest.fruits.every((item) => 'id' in item && 'nom' in item),
        ).toBe(true) // Vérifie si tous les objets ont les propriétés id et nom
    })

    test('Les valeurs des propriétés id et nom sont du bon type', () => {
        expect(
            myTest.fruits.every(
                (item) =>
                    typeof item.id === 'number' && typeof item.nom === 'string',
            ),
        ).toBe(true) // Vérifie les types des valeurs des propriétés id et nom
    })
})
