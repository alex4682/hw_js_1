// 1
// let one = 1;
// function isButtonUsed(btn) {
//     if (btn === true) {
//         console.log('Hello World!');
//     }
//     else {
//         one--;
//     }
// }
// const buttonHello = (cb) => {
//     while (one) {
//         let choice = confirm("");
//         cb(choice);
//     }
// }

// buttonHello(isButtonUsed);

// 2
// two = 1;
// let num = Math.floor(Math.random() * 10);
// if (num === 0) {
//     num = 1;
// }
// function guess(guessedNum, random) {
//     if (guessedNum === random) {
//         console.log('Correct');
//         two--;
//     }
//     else {
//         console.log("Incorrect, it's not ", guessedNum);
//     }
// }
// const guessNum = (randomNum, cb) => {
//     while (two) {
//         let guess = parseInt(prompt());
//         cb(guess, randomNum);
//     }
// }


// guessNum(num, guess);

// 3

// 4
const arr = [1, 2, 3, 4, 5];
const squareCallback = (arrey) => {
    const res = [];
    for (const i of arrey) {
        res.push(i * i);
    }
    return res;
}
const applyCallbackToEachElement = (arr, cb) => {
    console.log(cb(arr));
}

applyCallbackToEachElement(arr, squareCallback);

// 5

function showDiscountedPrice(pr, ds) {
    let newPrice = pr;
    newPrice -= pr * (ds / 100);
    return newPrice;
}
const calculateDiscountedPrice = (price, discount, cb) => {
    console.log(cb(price, discount));
}

calculateDiscountedPrice(100, 10, showDiscountedPrice);