interface Person {
    name: string,
    surname: string,
    age: number,
    city?: string
}

const user1: Person = {
    name: 'Marcin',
    surname: 'Grygierek',
    age: 28,
    city: 'Gliwice'
}


const user2: Person = {
    name: 'Marcin',
    surname: 'Grygierek',
    age: 28
}
