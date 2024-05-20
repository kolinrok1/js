// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
window.addEventListener('DOMContentLoaded', function (e) {
    console.log("Теги прогрузилась");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', function (e) {
    console.log("Страница прогрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const btnEl = document.querySelectorAll('.super_element');
const textareaEl = document.querySelector('textarea');
console.log(textareaEl);
console.log(btnEl);
btnEl.forEach(element => {
    element.addEventListener('click', function (e) {
        textareaEl.innerHTML = 'Класс "super_element"';
    });
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
textareaEl.addEventListener('mouseover', function (e) {
    textareaEl.innerHTML = "Вы навели на textarea.";
});
textareaEl.addEventListener('mouseleave', function (e) {
    textareaEl.innerHTML = "";
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector('ul');
const buttonEl = ulEl.querySelectorAll('button');
buttonEl.forEach(element => {
    element.addEventListener('click', function (e) {
        textareaEl.innerHTML = element.innerHTML;
    });
});

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const ilEl = document.querySelectorAll('li');
for (let index = 1; index < ilEl.length; index = index + 2) {
    ilEl[index].classList.add('red');
}