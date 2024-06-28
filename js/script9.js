// 1
const bankAccaunt = {
    ownerName: 'Sansha',
    accountNumber: 123456789,
    balance: 1000,
    deposit: function deposit(value) {
        if (value >= 0) {
            console.log(`Вам нараховано ${value} грошей`)
            bankAccaunt.balance += value;
        } else {
            console.log("потрібно ввести число більше за 0")
        }
    },
    withrow: function withrow(value) {
        if (value >= 0) {
            console.log(`Ви зняли ${value} грошей`)
            bankAccaunt.balance -= value;
        } else {
            console.log("потрібно ввести число більше за 0")
        }
    }
};
// bankAccaunt.deposit = bankAccaunt[deposit];
bankAccaunt.deposit(1000);
console.log("У вас тепер", bankAccaunt.balance);
bankAccaunt.withrow(500)
console.log("У вас тепер", bankAccaunt.balance);

// 2
const wether = {
    temperature: 0,
    humidity: 10,
    windSpeed: 5,
    temp: function temp(param) {
        this.temperature = param;
        if (param < 0) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    }
}

wether.temp(-10);
wether.temp(10);

// 3

const user = {
    name: 'Alex',
    email: 'example@gmail.com',
    password: 'example',
    login: function login() {
        while (true) {
            let email = prompt("Your email");
            let password = prompt('Your password');
            if (email === this.email && password === this.password) {
                console.log('Correct')
                break;
            }
            else if (email !== this.email) {
                console.log("Email is incorrect");
            }
            else if (password !== this.password) {
                console.log('Password is incorrect')
            }
            else {
                console.log('Incorrect! Try again');
            }
        };
    }
}

user.login();

// 4
const movie = {
    title: 'example film',
    director: 'Smoliarenko Alex',
    year: 2024,
    rating: 10,
    ratingSerch: function search(params) {
        if (params > 8) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

movie.ratingSerch(movie.rating);