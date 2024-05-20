// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const formEl = document.querySelector('#from');
console.log(formEl);
const spanEl = document.querySelector('span');
formEl.addEventListener('input', function (e) {
    spanEl.innerHTML = e.target.value;
});
