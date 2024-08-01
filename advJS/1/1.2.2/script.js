const cookMap = new Map();
cookMap.set("Виктор","Пицца");
cookMap.set("Ольга","Суши");
cookMap.set("Дмитрий","Десерты");

const disMap = new Map();
disMap.set("Маргарита","Пицца");
disMap.set("Перерони","Пицца");
disMap.set("Филадельфия","Суши");
disMap.set("Калифорния","Суши");
disMap.set("Тирамису","Десерты");
disMap.set("Чизкейк","Десерты");

const content = document.querySelector('.content');

cookMap.forEach((cookValue, cookKey, map) =>{
    const elmCook = document.createElement('div');
    elmCook.classList.add("cook");
    elmCook.innerHTML = `Повар ${cookKey} готовит ${cookValue}`;
    content.appendChild(elmCook);
});

const divCheckbox = document.querySelector('div.form_checkbox');

disMap.forEach((disValue, disKey, map) =>{
    const dishDiv = document.createElement('div');
    const disDivLabel = document.createElement('label');
    const dishElem = document.createElement('input');
    dishElem.classList.add('checkbox');
    dishElem.type = 'checkbox';
    dishElem.value = disKey;
    disDivLabel.innerHTML = disKey;
    divCheckbox.appendChild(dishDiv);
    dishDiv.appendChild(disDivLabel);
    disDivLabel.appendChild(dishElem);
});

let guestOrder = new Map();
let ogder = '';
const btn = document.querySelector('button');


btn.onclick = function () {
    const inputText = document.querySelector ('.input');
    let guest = inputText.value;
    const inputCheckBox = document.querySelectorAll('.checkbox');
    inputCheckBox.forEach(element => {
        if (element.checked) {
            disMap.forEach((disValue, disKey, map) =>{
                if (element.value == disKey){
                    ogder = ogder + ' ' + disValue + ' ' + element.value;
                }
            });

        }
    });
    guestOrder.set (guest, ogder);
    const tabol = document.createElement('div');
    tabol.innerHTML = ` Гость ${guest} заказал ${ogder}`;
    btn.before(tabol);
    ogder = ''; 
    console.log(guestOrder);
   };
