export type peopleType = {
    age: number
    name: string
    lastName: string
}

const people:peopleType[] = [
    {
        age: 35,
        name: 'Dima',
        lastName: 'Vachugov',
    },
    {
        age: 23,
        name: 'Ivan',
        lastName: 'Sageorov',
    },
    {
        age: 35,
        name: 'Petr',
        lastName: 'Perviy',
    },
    {
        age: 42,
        name: 'Bob',
        lastName: 'Brown',
    }
];

const transform = (man: peopleType) => ({
    stack: ['html', 'css', 'js', 'ts', 'react']
})

const dev1 = [
    transform(people[0]),
    transform(people[1]),
    transform(people[2]),
    transform(people[3])
]

const devs2 = people.map(transform)

const devs3 = people.map(man => ({
    stack: ['html', 'css', 'js', 'ts', 'react'],
    name: man.name.split(' ')[0],
    lastName: man.lastName.split(' ')[1]

}))

const messages = people.map(man => `hello ${man.name.split(' ')[0]}. Welcome!`)

export const createGreetingMessage = (people:Array<peopleType>) => {
    return people.map(man => `hello ${man.name.split(' ')[0]}. Welcome!`)
}






