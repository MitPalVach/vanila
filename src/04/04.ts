export const ages = [18, 20, 98, 100, 14, 35, 56];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];

// ====================

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'js', price: 120},
    {title: 'css', price: 200},
    {title: 'html', price: 150}
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}


export type familyType = {
    id: number
    name: string
    Age: number
    pens: boolean
}

export const family = [
    {id: 1, name: 'Dasha', Age: 30, pens: false},
    {id: 2, name: 'Dima', Age: 35, pens: false},
    {id: 3, name: 'Luda', Age: 66, pens: true},
    {id: 4, name: 'Galya', Age: 90, pens: true}
]








































