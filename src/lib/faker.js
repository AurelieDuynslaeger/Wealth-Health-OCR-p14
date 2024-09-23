import { faker } from "@faker-js/faker";

const generateFakeEmployee = () => {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        dateOfBirth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        startDate: faker.date.past(2),
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        department: faker.commerce.department(),
    };
};

// Génère un tableau d'employés factices
export const generateFakeEmployees = (num) => {
    const employees = [];
    for (let i = 0; i < num; i++) {
        employees.push(generateFakeEmployee());
    }
    return employees;
};