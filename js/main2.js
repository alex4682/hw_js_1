// Створити змінну з іменем age і присвоїти їй значення свого віку.Вивести значення цієї змінної в консоль.
let myAge = parseFloat(prompt("введіть ваш вік:"))

console.log(myAge)
// Створити змінну з іменем name і присвоїти їй значення свого імені.Вивести значення цієї змінної в консоль.
const userName = "Alex"

console.log(userName)
// Створити змінну з іменем isStudent і присвоїти їй значення true або false, залежно від того, чи є студентом.Вивести значення цієї змінної в консоль.
let isStudent = confirm("Ви студент?")

console.log(isStudent)
// Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою.Вивести цей рядок в консоль.
const myString = "«Найкращий спосіб передбачити майбутнє — створити його». - Абрахам Лінкольн"

console.log(myString)
// Створити змінну з іменем myNumber і присвоїти їй довільне числове значення.Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.
let myNumber = 33
myNumber += 10
console.log(myNumber)
// Створити змінну з іменем myNull і присвоїти їй значення null.Вивести значення цієї змінної в консоль.
myNull = null
console.log(myNull)
// Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt().Після введення імені вивести повідомлення привітання з використанням введеного імені.
myName = prompt("введіть ваше ім'я:")

console.log("Вітаю", myName, "!")
// Створити скрипт який виводить спливаюче підтвердження за допомогою confirm().Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!".Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
let x = confirm("Ви впевнені?")
if (x === true)
    console.log("Дякую за підтвердження!")
else
    console.log("Дію відмінено!")
// Створити скрипт який виводить спливаюче попередження за допомогою alert().Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm().Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!".Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
alert("Ця дія може бути небезпечною")
let y = confirm("Ви впевнені?")
if (y === true)
    console.log("Дякую за підтвердження!")
else
    console.log("Дію відмінено!")