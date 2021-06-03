import {StudentType} from "../02/02";
import {addSkill, liveInMoscow, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Dima",
        age: 32,
        isActive: false,
        address: {
            country: "Russia",
            city: "Kazan",
            street: "Fuchika"
        },
        technologies: [
            {
                id: 1,
                skill: "html"
            },
            {
                id: 2,
                skill: "css"
            },
            {
                id: 3,
                skill: "js"
            },
            {
                id: 4,
                skill: "react"
            }
        ]
    }
});

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(4);

    addSkill(student, 'ts');
    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].skill).toBe('ts');
    expect(student.technologies[4].id).toBeDefined();
});

//============
test('student should be active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);
    expect(student.isActive).toBe(true);

});

//============
test('student should be live in Kazan', () => {
    expect(student.address.city).toBe('Kazan');

    liveInMoscow(student);
    expect(student.address.city).toBe('Moscow');

});








