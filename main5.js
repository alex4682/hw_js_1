// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
let drink = prompt("Виберіть напій");
switch (drink) {
    case "Кава":
    case "кава":
        console.log("Кава");
        break;
    case "Чай":
    case "чай":
        console.log("Чай");
        break;
    case "Сік":
    case "сік":
        console.log("Сік");
        break;
    default:
        console.log("Error")

}
// Створити розмітку з полем введення, що приймає рядок та кнопкою.При натисканні на кнопку перевіряти, чи введений рядок є днем тижня(наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
let day = prompt("Введіть день тиждня");
day = day.toLowerCase();
switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        console.log("це будній день");
        break;
    case "субота":
    case "неділя":
        console.log("це вихідний");
        break;
    default:
        console.log("Error");
}
// Створити розмітку з полем введення, що приймає номер місяця та кнопкою.При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.
let monthNum = parseInt(prompt("Введіть місяць від 1 до 12"));
let season;
switch (monthNum) {
    case 1:
    case 2:
    case 12:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autum";
        break;
    default:
        season = "Input Error"
}
console.log(season)
// Створити розмітку з полем введення, що приймає номер місяця та кнопкою.При натисканні на кнопку виводити кількість днів у цьому місяці.
let monthNum2 = parseInt(prompt("Введіть місяць від 1 до 12"));
let season2;
switch (monthNum2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        season2 = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        season2 = 30;
        break;
    case 2:
        season2 = 28;
        break;
    default:
        season2 = "Input Error"
}
console.log(season2)
// Створити розмітку з полем введення, що приймає назву кольору(наприклад, "червоний", "синій" і т.д.) та кнопкою.При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".
let color = prompt("Введіть колір");
color = color.toLowerCase();
switch (color) {
    case "червоний":
        console.log("Стояти");
        break;
    case "жовтий":
        console.log("Чекати");
        break;
    case "зелений":
        console.log("Йти");
        break;
    default:
        console.log("Error");
}
// Створити розмітку з двома полями введення, що приймають числа та список(select) з варіантами вибору операцій: "+", "-", "*", "/".При натисканні на кнопку виводити результат обраної операції над цими числами.Користувач повинен бути попереджений про можливість ділення на нуль.
let num1 = parseFloat(prompt("Введіть перше число"));
let operator = prompt("Введіть дію (+, -, *, /)");
let num2 = parseFloat(prompt("Введіть друге число"));
let res;
switch (operator) {
    case '+':
        res = num1 + num2;
        break;
    case '-':
        res = num1 - num2;
        break;
    case '*':
        res = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            res = 'Error';
        }
        else {
            res = num1 / num2;
        }
        break;
    default:
        res = 'Error'
}
console.log(`${num1}${operator}${num2} = ${res}`);