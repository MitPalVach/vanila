import {family} from "./04";

test('should take mens older 90', () => {
    const ages = [18, 20, 89, 100, 142, 35, 56];

    const oldAges = ages.filter((age: number) => {
        return age > 90;
    });

    expect(oldAges.length).toBe(2)
})

// =========================

test('should take course cheaper than 160', () => {
    const courses = [
        {title: 'js', price: 120},
        {title: 'css', price: 200},
        {title: 'html', price: 150}
    ]


    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('js')
    expect(cheapCourses[1].title).toBe('html')

})


test('should be pens', () => {
    family.filter(pens => pens)

    expect(!family[0].pens)
    expect(!family[1].pens)
    expect(family[2].pens)
    expect(family[3].pens)
})


test('should be older 60', () => {
    family.filter(Age => Age)
    expect(family[0].Age < 60)
    expect(family[1].Age < 60)
    expect(family[2].Age > 60)
    expect(family[3].Age > 60)
})


test('should be name longer than 4', () => {
    family.filter(name => name)

    expect(family[0].name.length > 4)
    expect(family[1].name.length >= 4)
    expect(family[2].name.length >= 4)
    expect(family[3].name.length > 4)
})


test('should be younger than 40', ()=> {
    family.filter(age => age)

    expect(family[0].Age < 40)
    expect(family[1].Age < 40)
    expect(family[2].Age > 40)
    expect(family[3].Age > 40)
})






























