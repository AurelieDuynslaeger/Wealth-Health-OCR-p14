import { faker } from "@faker-js/faker";
import { format } from 'date-fns';

const generateFakeEmployee = () => {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthDate: format(new Date(faker.date.birthdate({ min: 18, max: 65, mode: 'age' })), 'dd-MM-yyyy'),
        startDate: format(new Date(faker.date.past(2)), 'dd-MM-yyyy'),
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