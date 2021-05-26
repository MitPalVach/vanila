import {mult, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
});

test('multiply should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result3 = mult(a, c);
    const result4 = mult(b, c);

    //expect result
    expect(result3).toBe(3);
    expect(result4).toBe(6);
});

test('spliting into words should be correct', ()=> {
    //data
    const sent1 = 'hello my friend'
    const sent2 = 'Js it is cool'
    //action
    const result5 = splitIntoWords(sent1)
    const result6 = splitIntoWords(sent2)
    //expect result
    expect(result5.length).toBe(3)
    expect(result5[0]).toBe('hello')
    expect(result5[1]).toBe('my')
    expect(result5[2]).toBe('friend')

    expect(result6.length).toBe(4)
    expect(result6[0]).toBe('js')
    expect(result6[1]).toBe('it')
    expect(result6[2]).toBe('is')
    expect(result6[3]).toBe('cool')
})