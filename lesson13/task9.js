// Все робити за допомоги js.

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let block = document.createElement('div');
// block.setAttribute('class', 'wrap collapse alpha beta');
// document.body.append(block);
// block.style.background = 'pink';
// block.style.width = '200px';
// block.style.height = '200px';
// block.innerText = 'Mia';
// block.style.color = 'grey';
// block.style.fontSize = '120px';
// block.style.margin = '20px'
// block.style.textAlign = 'center';
// document.body.append(block.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скрипт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
//  const arr = ['Main','Products','About us','Contacts'];
// for (const string of arr) {
//     let elementsByClassName = document.getElementsByClassName('menu')[0];
//     let htmlliElement = document.createElement('li');
//     htmlliElement.innerText =string;
//     elementsByClassName.appendChild(htmlliElement);
//
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let divka = document.createElement('div');
//     divka.className = 'item';
//     let headingElement = document.createElement('h1');
//     headingElement.className = 'heading';
//     headingElement.innerText = `${element.title}`;
//     let paragraphElement = document.createElement('p');
//     paragraphElement.className = 'description';
//     paragraphElement.innerText = `${element.monthDuration}`;
//     divka.append(headingElement,paragraphElement);
//     document.body.append(divka);
// }
// //
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв ' +
//             'мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві м' +
//             'олодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі ' +
//             'своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — ' +
//             'грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він ' +
//             'поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — п' +
//             'остоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит ' +
//             'зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом ' +
//             'универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. ' +
//             'Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о' +
//             ' доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х г' +
//             'одов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать ' +
//             'нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её ' +
//             'свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». ' +
//             'Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего ' +
//             'своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала ' +
//             '«Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night ' +
//             '(англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом ' +
//             'Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга.' +
//             ' После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал ' +
//             'на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//
// for (const simpson of simpsons) {
//     const simps = document.createElement('div');
//     simps.classList.add('member');
//     const name = document.createElement('div');
//     const surName = document.createElement('div');
//     const age = document.createElement('div');
//     const info = document.createElement('div');
//     const photo = document.createElement('img');
//     name.innerText = simpson.name;
//     surName.innerText = simpson.surname;
//     age.innerText = simpson.age;
//     info.innerText = simpson.info;
//     photo.src = simpson.photo;
//     simps.append(name, surName, age, info, photo);
//     document.body.appendChild(simps);
// }
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості
//     елементу створити окремий блок, та помістити його у div.member

// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// // властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
//
// for (const item of coursesArray) {
//     let divElem = document.createElement('div');
//
//     let h2Elem = document.createElement('h2');
//     h2Elem.innerText = item.title;
//
//     let divEL = document.createElement('div');
//     divEL.innerText = item.monthDuration;
//
//     let htmlParagraphElement = document.createElement('p');
//     htmlParagraphElement.innerText = item.hourDuration;
//
//     const parag = document.createElement('p');
//     parag.innerText = item.modules;
//
//     divElem.append(h2Elem,divEL,htmlParagraphElement,parag);
//     document.body.appendChild(divElem);
//
//     let htmluListElement = document.createElement('ul');
//
//     for (const module of item.modules) {
//         let li = document.createElement('li');
//         li.innerText = module;
//         htmluListElement.appendChild(li);
//     }
//     document.body.appendChild(htmluListElement);
// }