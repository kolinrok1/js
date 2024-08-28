const dataB = [
    {
        titel: 'Математика',
        quantity: 50,
        time: '13.00',
        quantityR: 0,
    },
    {
        titel: 'Физика',
        quantity: 10,
        time: '14.00',
        quantityR: 0,
    }
];

const lessenList = document.getElementById('lessenList')

dataB.forEach(element => {
    const lesson = createLesson(element.titel, element.quantity, element.time, element.quantityR);
    lessenList.append(lesson);
});

function createLesson(titel, quantity, time, quantityR) {
    const lesson = document.createElement('li');
    const lessonTitel = document.createElement('h2');
    lessonTitel.innerHTML= `Урок ${titel}`;

    const quantityTitel = document.createElement('p');
    quantityTitel.classList.add('quantityTitel');
    quantityTitel.innerHTML= `Максимальное число участников `;
    const spanquantity = document.createElement('span');
    spanquantity.classList.add('quantityCount');
    spanquantity.innerHTML = quantity;
    quantityTitel.append(spanquantity);

    const quantityRTitel = document.createElement('p');
    quantityRTitel.classList.add('quantityRTitel');
    quantityRTitel.innerHTML= `Записалось участников `;
    const spanquantityR = document.createElement('span');
    spanquantityR.classList.add('quantityRCount');
    spanquantityR.innerHTML = quantityR;
    quantityRTitel.append(spanquantityR);



    const timeTitel = document.createElement('p');
    timeTitel.innerHTML= `Время проведения ${time}`;

    const btnSing = document.createElement('button');
    btnSing.classList.add('btnSing');
    btnSing.innerHTML= `Записться`;

    const btnOff = document.createElement('button');
    btnOff.classList.add('btnOff');
    btnOff.setAttribute('disabled', true);
    btnOff.innerHTML= `Отменить записть`;

    lesson.append(lessonTitel);
    lesson.append(quantityTitel);
    lesson.append(quantityRTitel);
    lesson.append(timeTitel);
    lesson.append(btnSing);
    lesson.append(btnOff);

    return lesson;
}


function checkCount(quantity, quantityR) {
    if (quantity == quantityR) {
        return true;
    }
}


function checkCountOff(quantityR) {
    if (quantityR == 0) {
        return true;
    }
}

lessenList.addEventListener('click', function (e) {
    if(e.target.innerHTML == 'Записться'){
        const singUp = e.target.closest('li');
        const quantityR = singUp.querySelector('.quantityRCount');
        const quantity = singUp.querySelector('.quantityCount');
        const btnSing = singUp.querySelector('.btnSing');
        const btnOff = singUp.querySelector('.btnOff');
        quantityR.innerHTML = parseInt(quantityR.innerHTML) + 1;
        btnOff.removeAttribute('disabled');
        if (checkCount(parseInt(quantityR.innerHTML), parseInt(quantity.innerHTML))) {
            btnSing.setAttribute('disabled', true);
        }
    };

});


lessenList.addEventListener('click', function (e) {
    if(e.target.innerHTML == 'Отменить записть'){
        const singUp = e.target.closest('li');
        const quantityR = singUp.querySelector('.quantityRCount');
        const btnOff = singUp.querySelector('.btnOff');
        quantityR.innerHTML = parseInt(quantityR.innerHTML) - 1;
        const btnSing = singUp.querySelector('.btnSing');
        btnSing.removeAttribute('disabled');
        if (checkCountOff(parseInt(quantityR.innerHTML))) {
            btnOff.setAttribute('disabled', true);
        }
    };

});


