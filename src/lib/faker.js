import { faker } from "@faker-js/faker";
import { format } from 'date-fns';
import { optionsStates } from "./optionsValues";

//crée un tableau des valeurs des états
const stateValues = optionsStates.map(option => option.value);

const generateFakeEmployee = () => {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        dateOfBirth: format(new Date(faker.date.birthdate({ min: 18, max: 65, mode: 'age' })), 'dd-MM-yyyy'),
        startDate: format(new Date(faker.date.past(2)), 'dd-MM-yyyy'),
        street: faker.location.street(),
        city: faker.location.city(),
        //choisis un état aléatoire parmi les valeurs
        state: faker.helpers.arrayElement(stateValues),
        // state: faker.location.state(),
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