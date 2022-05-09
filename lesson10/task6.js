// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let string1 = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
// console.log(string1.length);
// console.log(string2.length);
// console.log(string3.length);
//
// let string1 = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
// console.log(string1.toUpperCase());
// console.log(string2.toUpperCase());
// console.log(string3.toUpperCase());
//
// let string1 = 'HELLO WORLD';
// let string2 = 'LOREM IPSUM';
// let string3 = 'JAVASCRIPT IS COOL';
// console.log(string1.toLowerCase());
// console.log(string2.toLowerCase());
// console.log(string3.toLowerCase());
//
// let str = ' dirty string   ';
// console.log(str.trim());
//

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let stringToArray = (str) => str.split(' ');
// console.log(stringToArray(str));
//

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let num = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(num.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// let sortNums = (arr, direction ) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b)  => a - b)
//     }
//     else if(direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     }
//     return arr;
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortArray = (array) => array.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortArray(coursesAndDurationArray));
//
// let filterArray = (array) => array.filter(value => value.monthDuration > 5);
// console.log(filterArray(coursesAndDurationArray));

// описати колоду карт
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// let Cards = [
//     {
//         cardSuit: null,
//         value: 'joker',
//         color:'black'
//     },
//     {
//         cardSuit: null,
//         value: 'joker',
//         color:'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color:'black'
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'queen',
//         color:'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color:'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color:'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '10',
//         color:'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '9',
//         color:'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '8',
//         color:'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '7',
//         color:'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color:'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color:'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color:'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color:'black'
//     },
// ];
//
//- знайти піковий туз;
// console.log(Cards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));
//
// - всі шістки
// console.log(Cards.filter(value => value.value === '6'));
//
// - всі червоні карти
// console.log(Cards.filter(value => value.color === 'red'));
//
// - всі буби
// console.log(Cards.filter(value => value.cardSuit === 'diamond'));
//
// - всі трефи від 9 та більше
// console.log(Cards.filter(value => value.cardSuit === 'clubs' && value.value > '8' || value.value === '10' && value.cardSuit === 'clubs'|| value.value === 'joker'));