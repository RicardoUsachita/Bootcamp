const persona ={
    name: 'Alice',
    twitter: '@alice_dev',
    age: 30,
    isDeveloper: true,
    links: ['https://alice.dev', 'https://twitter.com/alice_dev']
}

const field = 'twitter'
console.log(persona[field])

// Function Expression
const sumar = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b
}

function restar(a, b) {
    return a - b
}
console.log(sumar(2,3))
