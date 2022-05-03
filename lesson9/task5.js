// Все стірлочними!!!!!!!!!

//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1,2,3,4] ;
// let sat = (arr) => {
//     let sum = 0
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum/arr.length;
// }
// console.log(sat(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minmax = (...arg) => {
//     // console.log(arg);
//     let min = arg[0];
//     let max = arg[0];
//     for (const argElement of arg) {
//           if (argElement < min) {
//               min = argElement
//           }
//           if (argElement > max) {
//               max = argElement
//           }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minmax(2, 4, 6, 8, 9, 1));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//        // arr.push(Math.round(Math.random() * 100));
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     return arr;
// }
// console.log(random());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// let random = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//        // arr.push(Math.round(Math.random() * 100));
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     return arr;
// }
// console.log(random(6));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3];
// let rev = (array) => {
//     let newarr = [];
//     // for (let i = array.length - 1, h = 0; i >= 0; i--, h++) {
//     //     newarr[h] = array[i];
// // }
//     for (let i = array.length - 1; i >= 0; i--){
//         newarr.push(array[i]);
//     }
//     return newarr;
// }
// console.log(rev(arr));

//-створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let arr = [
//     {
//         age: 24
//     },
//     {
//         age: 11
//     }
// ];
// let change = (array) => {
//     let temp = array[0];
//     array[0] = array[1];
//     array[1] = temp;
//     return array;
// }
// console.log(change(arr));
// let change = (array) => [array[0],array[1]] = [array[1],array[0]];
// console.log(change(arr));


//     Переробити на стрілочні функції з попереднього дз

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 //let rectangle = (a, b) => console.log(a * b) ;
//
// rectangle(11,2)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle = (r) => console.log(3.14 * r * r);
//
// circle(8);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinder = (r,h) => console.log(3.14 * h * r * 2);
// cylinder(4,6);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3,4];
// let task = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// task(arr);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let par = (text) => document.write(`<p>${text}</p>`);
// par('HEY');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let foo = (text) => document.write(`<ul> <li>${text}</li> <li>${text}</li> <li>${text}</li> </ul>`)
// foo('Hoo');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let foo = (text, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//        document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// foo('Hoo',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1,2,'hey',true];
// let data = (array) =>
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
//
// data(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let arr = [
//     {
//         id : 1,
//         name : 'Solomiia',
//         age : 20
//     },
//
//     {
//         id : 2,
//         name : 'Marta',
//         age : 17
//     }
// ];
// let obj = (array) => {
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
//     }
// }
// obj(arr);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1,2,6,9,-3]
// let min = (array) => {
//     let min = arr[0];
//     for (const minElement of array) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
// console.log(min(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [1,2,3]
// let sum = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// console.log(sum(arr));