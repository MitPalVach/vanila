const student = {
    name: "Dima",
    age: 32,
    isActive: false,
    address:{
        country: "Russia",
        city: "Kazan",
        street: "Fuchika"
    },
    technologies: [
        {
            id:1,
            skill: "html"
        },
        {
            id:2,
            skill: "css"
        },
        {
            id:3,
            skill: "js"
        },
        {
            id:4,
            skill: "react"
        }
    ]
}

console.log(student.name)
console.log(student.age)
console.log(student.address.country)
console.dir(student.technologies[2].skill)