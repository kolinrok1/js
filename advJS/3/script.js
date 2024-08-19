const button = document.getElementById('button');
const buttonOpen = document.getElementById('buttonOpen');
const buttonAll = document.getElementById('buttonAll');
const inputProd = document.getElementById('inputProd');
const feedback = document.getElementById('feedback');
const listFeedback = document.getElementById('listFeedback');



function CheckInf(params) {
    if (params === null) {
        return true
    }
}

function doSomethingCool(id){
    listFeedback.innerHTML = '';
    const item = localStorage.getItem(id);
    const listStorage = item.split(',');
    const hEl = document.createElement('h2');
    hEl.innerHTML = id;
    listFeedback.appendChild(hEl);
    listStorage.forEach(element => {
        const pEl = document.createElement('p');
        pEl.innerHTML = element;
        listFeedback.appendChild(pEl);
        pEl.appendChild(addButton(element));
        });         
}

function addButton(element) {
    const buttonDelet = document.createElement('button');
    buttonDelet.innerHTML = 'Удалить';
    buttonDelet.setAttribute('id', element);
    buttonDelet.setAttribute("onclick", "delButton(id)")
    return buttonDelet;
}

function delButton(id) {
    const h2el = document.querySelector('h2').innerHTML;
    const item = localStorage.getItem(h2el);
    const listStorage = item.split(',');
    listStorage.splice(id, 1);
    localStorage.setItem(h2el, listStorage)
    console.log(listStorage);
    doSomethingCool(h2el);

}

function showProduct() {
    for (let index = 0; index < localStorage.length; index++) {
        const spamEl = document.createElement('span');
        spamEl.innerHTML = ' ';
        const indexEl = localStorage.key(index);
        const all = document.createElement('a');
        all.title = indexEl;
        all.innerHTML = indexEl;
        all.href = "#";
        all.setAttribute("id", indexEl);
        all.setAttribute("onclick", "doSomethingCool(id)");
        all.classList.add('produckList');
        document.getElementById('message').appendChild(all);
        document.getElementById('message').appendChild(spamEl);
    }
}


button.addEventListener('click', function (e) {
    listFeedback.innerHTML = '';
    const item = localStorage.getItem(inputProd.value);
    if (CheckInf(item)) {
        localStorage.setItem(inputProd.value, feedback.value);
        document.getElementById('message').innerHTML = ('Добавлен новый продукт и отзыв');
    } else {
        const listStorage = item.split(',');
        listStorage.push(feedback.value);
        localStorage.setItem(inputProd.value, listStorage);
        document.getElementById('message').innerHTML = (`К продукту ${inputProd.value} добавлен новый отзыв`);        
    }
});


buttonOpen.addEventListener('click', function (e) {
    listFeedback.innerHTML = '';
    const item = localStorage.getItem(inputProd.value);
    if (CheckInf(item)) {
        document.getElementById('message').innerHTML = ('На данный продукт нет отзывов');
    } else {
        const listStorage = item.split(',');
        const hEl = document.createElement('h2');
        hEl.innerHTML = inputProd.value;
        listFeedback.appendChild(hEl);
        listStorage.forEach(element => {
            const pEl = document.createElement('p');
            pEl.innerHTML = element;
            listFeedback.appendChild(pEl);
        });         
    }

});

buttonAll.addEventListener('click', function (e) {
    document.getElementById('message').innerHTML = '';
    showProduct();
});


showProduct();
    