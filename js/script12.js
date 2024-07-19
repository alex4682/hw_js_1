const users = [
    {
        name: 'Alice',
        eyeColor: 'blue',
        gender: 'female',
        isActive: true,
        email: 'alice@example.com',
        age: 25,
    },
    {
        name: 'Bob',
        eyeColor: 'brown',
        gender: 'male',
        isActive: false,
        email: 'bob@example.com',
        age: 30,
    },
    {
        name: 'Charlie',
        eyeColor: 'green',
        gender: 'male',
        isActive: true,
        email: 'charlie@example.com',
        age: 35,
    },
];

// 1
const userNames = users.map(user => user.name);
console.log('User Names:', userNames);

// 2
const getUsersByEyeColor = (color) => users.filter(user => user.eyeColor === color);
const blueEyedUsers = getUsersByEyeColor('blue');
const blueEyedUsersNames = blueEyedUsers.map(user => user.name);
console.log('Blue Eyed Users:', blueEyedUsersNames);

// 3
const getUserNamesByGender = (gender) => users.filter(user => user.gender === gender).map(user => user.name);
const maleUserNames = getUserNamesByGender('male');
console.log('Male User Names:', maleUserNames);

// 4
const inactiveUsers = users.filter(user => !user.isActive);
const inactiveUserNames = inactiveUsers.map(user => user.name);
console.log('Inactive Users:', inactiveUserNames);

// 5
const getUserByEmail = (email) => users.find(user => user.email === email);
const userByEmail = getUserByEmail('alice@example.com');
console.log('User by Email:', userByEmail ? userByEmail.name : 'Not found');

// 6
const getUsersByAgeRange = (min, max) => users.filter(user => user.age >= min && user.age <= max);
const usersInAgeRange = getUsersByAgeRange(20, 30);
const usersInAgeRangeNames = usersInAgeRange.map(user => user.name);
console.log('Users in Age Range 20-30:', usersInAgeRangeNames);
