// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const divElement = document.createElement('div');
// divElement.setAttribute('id', 'text');
// divElement.innerText = 'Mia';
// const buttonElement = document.createElement('button');
// buttonElement.innerText = 'click';
// document.body.append(divElement, buttonElement);
// buttonElement.onclick = function () {
//     divElement.remove();
// }
//buttonElement.onclick = function () {
//   divElement.style.display = 'hidden';
//}
//buttonElement.onclick = function () {
//     divElement.style.display = 'none';
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// const inputElement = document.createElement('input');
// inputElement.type = 'number';
// const buttonElement = document.createElement('button');
// buttonElement.innerText = 'click';
// document.body.append(inputElement, buttonElement);
// buttonElement.addEventListener('click', function (){
//     if (inputElement.value >= 18){
//         alert('hey');
//     } else {
//         alert('you are blocked')
//     }
//     input.value = '';
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const button = document.getElementById('Button');
// button.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// })

// - Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const inputElement = document.createElement('input');
// const inputElement2 = document.createElement('input');
// const inputElement3 = document.createElement('input');
// const buttonElement = document.createElement('button');
// buttonElement.innerText= 'click';
// document.body.append(inputElement,inputElement2,inputElement3,buttonElement);
// buttonElement.addEventListener('click', function (){
//     const tr = inputElement.value;
//     const td = inputElement2.value;
//     const inputText = inputElement3.value;
//
//     function creatorTable(tr,td,text){
//         const table = document.createElement('table');
//         document.body.append(table);
//
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr');
//             table.appendChild(tr);
//             for (let j = 0; j < td; j++) {
//                 const td = document.createElement('td');
//                 table.appendChild(td);
//                 td.innerText = `${text}`;
//                 td.style.border = '1px solid pink'
//                 tr.appendChild(td);
//             }
//         }
//     }
//     creatorTable(tr,td,inputText);
// })