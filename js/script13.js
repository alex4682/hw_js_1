const users = [
    {
        name: "John",
        balance: 1000,
        friends: ["Mike", "Anna", "Lucy", "Kate"],
        skills: ["JavaScript", "HTML", "CSS"]
    },
    {
        name: "Anna",
        balance: 2000,
        friends: ["John", "Mike"],
        skills: ["Python", "HTML", "CSS"]
    },
    {
        name: "Mike",
        balance: 1500,
        friends: ["John", "Anna", "Lucy"],
        skills: ["Java", "C++", "Python"]
    },
    {
        name: "Lucy",
        balance: 2500,
        friends: ["John", "Anna", "Mike"],
        skills: ["C#", "JavaScript", "HTML"]
    },
    {
        name: "Kate",
        balance: 3000,
        friends: ["John", "Anna"],
        skills: ["Java", "JavaScript", "CSS"]
    }
];

// 1
const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(totalBalance);

// 2
const friendName = "John";
const usersWithFriend = users.filter(user => user.friends.includes(friendName)).map(user => user.name);
console.log(usersWithFriend);

// 3
const sortedUsersByFriends = users.slice().sort((a, b) => b.friends.length - a.friends.length).map(user => user.name);
console.log(sortedUsersByFriends);

// 4
const allSkills = users.flatMap(user => user.skills).filter((skill, index, self) => self.indexOf(skill) === index).sort();
console.log(allSkills); 
