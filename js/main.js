// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
let x = parseFloat(prompt("Введіть температуру в градусах C"))
let a = x * (9 / 5) + 32

console.log(a)

// Створити змінну для зберігання кількості днів у місяці.Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
let day = parseFloat(prompt("Введіть кількість днів"))
let hour = day * 24
let min = hour * 60
let sec = min * 60
console.log("В місяці ", day, "днів")
console.log("В місяці ", hour, "годин")
console.log("В місяці ", min, "хвилин")
console.log("В місяці ", sec, "секунд")

// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
let health = 100
let energy = 100

console.log("у вас ", health, "здоров'я")
console.log("у вас ", energy, "енергії")

health -= 40
energy -= 35

console.log("Тепер у вас ", health, "здоров'я")
console.log("Тепер у вас ", energy, "енергії")
// Створити змінну для зберігання суми покупки в магазині.Застосувати знижку в розмірі 10 % до цієї суми за допомогою оператора множення та вивести результат в консоль.
let sum = parseFloat(prompt("Введіть вартість вашої покупки"))
sum = sum - sum * 0.10
console.log("Ваша покупка з знижкою вартує", sum, "грн")

// Створити змінну для зберігання числа з плаваючою комою.Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
let y = parseFloat(prompt("Введіть число з комою"))

y = Math.floor(y)
console.log("Ми округлили ваше число до", y)

// Створити змінну для зберігання рядка, який містить числа з плаваючою комою.Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
let num = "10.5"
num = parseFloat(num)

console.log(num)

// Створити змінну для зберігання рядка, який містить ціле число.Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
let num2 = "30"
num2 = parseInt(num2)

console.log(num2)

// Створити змінну для зберігання числа.Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
let cor = parseFloat(prompt("Введіть число"))

cor = Math.sqrt(cor)

console.log("Корінь вашого число -", cor)

// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка.Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
let str = "20"
let b = 25

str = parseInt(str)
b = String(b)
console.log(str)
console.log(b)