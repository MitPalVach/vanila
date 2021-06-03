import {StudentType} from "../02/02";

export const sum = (a: number, b: number) => {
    return a + b;
};

// const res = sum(sum(1, 3), sum(2, 4))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        skill: skill
    });
}

//===============

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

//===============

export function liveInMoscow(s: StudentType) {
    s.address.city = 'Moscow';
}















