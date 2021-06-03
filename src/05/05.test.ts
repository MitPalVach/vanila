import {createGreetingMessage, peopleType} from "./05";

let people:peopleType[] = [];

beforeEach(()=> {
    people = [
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
})

test('should get array of greeting messages', ()=> {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(4)
    expect(messages[0]).toBe('hello Dima. Welcome!')
    expect(messages[1]).toBe('hello Ivan. Welcome!')
    expect(messages[2]).toBe('hello Petr. Welcome!')
    expect(messages[3]).toBe('hello Bob. Welcome!')

})







