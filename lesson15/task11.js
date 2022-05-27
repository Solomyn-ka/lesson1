// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// const form = document.createElement('form');
// const name = document.createElement('input');
// const age = document.createElement('input');
// const btn = document.createElement('button');
// document.body.append(form,btn);
// form.append(name,age,btn);
// btn.innerText= 'click';
// name.type = 'text';
// age.type = 'number';
//
// const key = 'key';
//
// const save = (name, age ) => {
//     const obj = {
//         name,
//         age
//     }
//     localStorage.setItem(key,JSON.stringify(obj));
// }
// btn.onclick = () => {
//     save(name.value,age.value);
// }



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// const {model,type,volume} = document.forms.car;
// const btn = document.getElementById('btn');
// const key = "key";
//
// const save = (model,type,volume) => {
//     const store = JSON.parse(localStorage.getItem(key)) || [];
//     store.push({model,type,volume});
//     localStorage.setItem(key, JSON.stringify(store));
// }
// btn.onclick = () => {
//     save(model.value,type.value,volume.value);
// }
