// Створіть масив об'єктів "products", де кожен об'єкт буде містити властивості "name", "price", "category" та "stock". Напишіть функцію, яка приймає масив об'єктів "products" і повертає загальну вартість товарів в наявності за вибраною категорією

const products = [
    aples = {
        name: 'apples',
        price: 10,
        category: 'fruits',
        stock: 5,
    },
    potato = {
        name: 'potato',
        price: 17,
        category: 'vegetable',
        stock: 0,
    },
    meat = {
        name: 'meat',
        price: 35,
        category: 'meat',
        stock: 10,
    },
    bread = {
        name: 'bread',
        price: 13,
        category: 'food',
        stock: 17,
    },
];
function sum(arrey) {
    let sumOfElem = 0;
    for (const i of arrey) {
        for (const key in i) {
            if (key === 'stock') {
                const dub = i[key] * i['price']
                sumOfElem += dub
            }
            else {
                continue;
            }
        }
    }
    return sumOfElem;
}
console.log(sum(products));




// Створіть об'єкт "person" з властивостями "firstName", "lastName" та "fullName". Значення властивості "fullName" повинно бути отримано за допомогою з'єднання значень властивостей "firstName" та "lastName". Додайте до об'єкту метод, який буде виводити повідомлення на екран з повним ім'ям людини.

const person = {
    firstName: 'Alex',
    lastName: 'Smoliarenko',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    alert1: function () {
        alert("My name is " + this.fullName());
    }
};

person.alert1();




// Створіть об'єкт "product" з властивостями "name", "price" та "quantity". Додайте до об'єкту метод, який буде розраховувати вартість всіх товарів. Результат повинен бути виведений на екран

const product = {
    name: 'meat',
    price: 100,
    quantity: 10,
    allMoney: function () {
        const sum = this.price * this.quantity;
        return sum;
    },
    alert: function () {
        console.log("Вам треба " + this.allMoney() + ' грн');
    }
}

product.alert();









// 1
const user = {
    mood: 'happy',
    hobby: 'skydiveing',
    premium: false,
}

for (const key in user) {
    const val = user[key];
    console.log(key + ':' + val);
}


// 2

const countProps = obj => {
    let sum = 0;
    for (const key in obj) {
        sum++;
    }
    return sum;
}

console.log(countProps(user));

// 3
const employees = {
    alex: 5,
    ivan: 2,
    dima: 4,
    maxim: 8,
    nazar: 5,
}

const findBestEmployee = obj => {
    let bestEmployee = '';
    let maxTasks = 0;

    for (const [employee, tasks] of Object.entries(obj)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = employee;
        }
    }

    return bestEmployee;
}

console.log(findBestEmployee(employees));

// 4

const employee2 = {
    alex: 4000,
    ivan: 1500,
    dima: 3500,
    maxim: 4000,
    nazar: 9000,
}

const countTotalSalary = (obj) => {
    for (const key in obj) {
        val = obj[key];
        console.log(key + ':' + val)
    }
}
countTotalSalary(employee2)
// 5
function getAllPropValues(arr, prop) {
    const propValues = [];

    for (const obj of arr) {
        if (prop in obj) {
            propValues.push(obj[prop]);
        }
    }

    return propValues;
}

const products2 = [
    { name: 'apple', price: 50, quantity: 5, },
    { name: 'banana', price: 30 },
    { name: 'meat', price: 60 },
    { name: 'mango' }
];

console.log(getAllPropValues(products2, 'name'));
console.log(getAllPropValues(products2, 'price'));
console.log(getAllPropValues(products2, 'quantity'));

// 6
const products1 = [
    aples = {
        name: 'apples',
        price: 13,
        category: 'fruits',
        stock: 5,
    },
    potato = {
        name: 'potato',
        price: 15,
        category: 'vegetable',
        stock: 0,
    },
    meat = {
        name: 'meat',
        price: 45,
        category: 'meat',
        stock: 10,
    },
    bread = {
        name: 'bread',
        price: 13,
        category: 'food',
        stock: 19,
    },
];
function calculateAllPropPrices(arrey) {
    let sumOfElem = 0;
    for (const i of arrey) {
        for (const key in i) {
            if (key === 'stock') {
                const dub = i[key] * i['price']
                sumOfElem += dub
            }
            else {
                continue;
            }
        }
    }
    return sumOfElem;
}
console.log(calculateAllPropPrices(products1));