// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,producer,year,maxspeed,volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume
//     this.drive = function () {
//         // console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const item in this) {
//             // console.log(`${item} - ${this[item]}`);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed
//     }
//     this.year = function (newYear) {
//         this.year = newYear;
//     };
//    this.addDriver = function (driver) {
//        this.driver = driver;
//    }
//
// }
// let newCar = new Car('bmv','Germany',2021,320,4,2)
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(40);
// newCar.year(2022);
// newCar.addDriver('Mia')
// console.log(newCar);
//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Car {
//     constructor(model,producer,year,maxspeed,volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     info () {
//         for (const item in this) {
//             // console.log(`${item} - ${this[item]}`);
//             // console.log(this);
//         }
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.maxspeed += newSpeed
//     }
//     newyear (newYear) {
//         this.year = newYear;
//     };
//     addDriver (driver) {
//         this.driver = driver;
//     }
//
// }
// let newCar = new Car('bmv','Germany',2021,320,4,2)
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(40);
// newCar.newyear(2022);
// newCar.addDriver('Mia')
// console.log(newCar);

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// function Cinderella(name,age,footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let arrCinderella = [
//     new Cinderella('Lisa',20,35),
//     new Cinderella('Katia',22,36),
//     new Cinderella('Marta',23,39),
//     new Cinderella('Sofiia',24,35),
//     new Cinderella('Mariia',21,38),
//     new Cinderella('Anna',22,35),
//     new Cinderella('Olia',26,36),
//     new Cinderella('Teresa',24,39),
//     new Cinderella('Mia',23,36),
//     new Cinderella('Solomiia',20,37),
// ];
// function Prince(name,age,findSize) {
//     this.name = name;
//     this.age = age;
//     this.findSize = findSize;
// }
// let newPrince = new Prince('Sasha',20,37);
//
// let find = (arrCinderellas,prince) => {
//     for (const Cindy of arrCinderellas) {
//         if(Cindy.footSize === prince.findSize) {
//             return `${Cindy.name}`;
//         }
//     }
// }
// console.log(find(arrCinderella, newPrince));
//
// let newsindy = arrCinderella.find(value => value.footSize === newPrince.findSize);
// console.log(newsindy);