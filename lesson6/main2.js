
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при x, що дорівнює 1, 0, -3
//
// let x = +prompt("give me x")
// if (x !== 0){
//     console.log('Virno')
// } else {
//     console.log("Ne virno")
// }

 // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +(prompt('what time is it?'))
// if (time >= 0 && time <= 15) {
//     console.log('first quarter')
// } else if(time > 15 && time <= 30){
//     console.log('second quarter')
// } else if(time > 30 && time <= 45){
//     console.log('third quarter')
// } else if(time > 45 && time < 60){
//     console.log('fourth quarter')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = 18;
// if (typeof day === 'number') {
//     if (day >= 1 && day <= 11) {
//         console.log('decade 1');
//     } else if (day > 11 && day <= 20) {
//         console.log('decade 2');
//     } else if (day > 20 && day <= 31) {
//         console.log('decade 3');
//     } else console.log('//////');
// } else {
//         console.log('you enter string type')
//     }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// switch (+prompt("enter day number")) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let a = 2;
// let b = 2;
//
// if (a > b){
//     console.log(a)
// } else if (b > a){
//     console.log(b)
// } else if (a === b){
//     console.log('equal')
// }