// Створити масив з трьох чисел.Змінити значення другого елемента масиву на 10.
let arr = [4, 7, 22];
arr[1] = 10;
console.log(arr)
// Створити масив із трьох рядків.Додати до масиву ще одну рядків.
let arr1 = ['ajax', 'Alex', 'javascript'];
arr1[3] = 'Ivan'
console.log(arr1)
// Створити скрипт який поверне суму всіх чисел в масиві.
let num = [4, 5, 7, 2, 9, 10];
let sum = 0;
for (const i of num) {
    sum += i;
}
console.log(sum)
// Створити масив з 5 - ти чисел.Вивести на екран всі елементи масиву за допомогою циклу for.
let arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// Створити масив із 5 - ти рядків.Вивести на екран кожен рядокз масиву, який містить більше 5 - ти символів.
let str = ['Alex', 'javascript', 'python', 'Ivan', 'ajax'];
for (const i of str) {
    if (i.length >= 5) {
        console.log(i);
    } else {
        continue;
    }
}

// Створити масив з 10 - ти чисел.Знайти та вивести на екран максимальне значення з масиву.
let numbers = [34, 7, 23, 32, 5, 62, 32, 11, 78, 1];
// let maxNumber = Math.max(...numbers);
let maxNumber = 0;
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
    else {
        continue;
    }
}
console.log(maxNumber);

// Створити масив з 10 - ти чисел.Знайти всі парні числа в масиві та вивести їх на екран.
let num1 = [34, 7, 23, 32, 5, 62, 32, 11, 78, 1];
for (let i = 0; i <= num1.length; i++) {
    if (num1[i] % 2 !== 0) {
        continue;
    }
    else {
        console.log(num1[i]);
    }
}
