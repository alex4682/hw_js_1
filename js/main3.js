// Вивести result в консоль.Перевірити тип змінної result = 5 + 5 +’5’.
let result = 5 + 5 + '5'
console.log(result)
// Створіть змінну email з вашою електронною адресою.Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів.Результат виведіть в консоль.
email = "smoliarenko.sasha@gmail.com"
console.log(email.length)
console.log(email.includes("@"))
// Записати в окремих змінних кожне слово: My, name, is.Поєднати всі слова в змінну fullName.До змінної full Name додати ‘Viktor’. fullName вивести в консоль.
let my = "My "
let n = "name "
let is = "is "
let res = my + n + is + "Victor"
console.log(res)
// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
let userName = prompt("Як вас звати")
let payment = parseInt(prompt("Введіть суму оплати"))

console.log(`Дякуємо, ${userName}! До сплати ${payment} грн`)