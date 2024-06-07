const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let str = '';
for (let i = 0; i < friends.length; i++) {
    str += friends[i] + ',';
}
console.log(str);

const friends1 = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let str1 = '';
str1 = friends1.join();
console.log(str1);

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
];

const cardToRemove = cards.splice(2, 1);
const cardToAdd = 'Карточка-6';
const cardToupdate = 'Карточка-4';
cards.push(cardToAdd);
cards.splice(3, 1, cardToupdate)
console.log(cards);