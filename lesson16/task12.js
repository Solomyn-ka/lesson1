// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         const divElement = document.createElement('div');
//         divElement.setAttribute('class', 'wrap');
//         document.body.append(divElement);
//         for (const item of value) {
//             const Div = document.createElement('div');
//             Div.setAttribute('class', 'anouther')
//             Div.innerHTML = `<h2>UserID : ${item.userId}</h2>
// <h2>ID : ${item.id}</h2>
// <h2>Title : ${item.title}</h2>
// <h2>Body : ${item.body}</h2>`;
//             divElement.append(Div);
//         }
//
//     });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        const Div = document.createElement('div');
        document.body.append(Div);
        for (const item of value) {
            const innerDiv = document.createElement('div');
            Div.append(innerDiv);
            for (const itemKey of item) {
                const divElement = document.createElement('div');
                divElement.innerText = `${itemKey} ${item[itemKey]}`;
                Div.append(divElement);
            }
        }
    });