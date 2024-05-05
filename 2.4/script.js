// 1
const formId = document.querySelector("#from");
const span = document.querySelector("span");
const chageHead = () => {
   span.innerText = formId.value;
}
formId.addEventListener('input', chageHead);

// 2
const messageBtn = document.querySelector(".message-btn");
const message = document.querySelector(".message");
messageBtn.addEventListener('click', function () {
   message.classList.add('animate_animated');
   message.classList.add('animate_fadeInLeftBig');
   message.style.visibility = 'visible';
});

// 3
const form = document.querySelector('form');
const formControl = document.querySelectorAll('.form-control');
const btn = document.querySelector('form button');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   formControl.forEach((element) => {
      if (element.tagName === 'INPUT') {
         isValid(element);
      } else if (element.tagName === 'SELECT') {
         isValid(element);
      }
   });
});
function isValid(elem) {
   if (elem.value === '') {
      elem.style.backgroundColor = 'red';
      elem.classList.add('error');
      elem.setCustomValidity('Пустое значение');
      elem.reportValidity();
   } else {
      btn.textContent = 'ОК';
      setTimeout(() => {
         btn.textContent = 'Отправить';
      }, 1000);
   }
}
formControl.forEach((el) => {
   el.addEventListener('input', () => {
      el.setCustomValidity('');
      el.removeAttribute('style');
      el.classList.remove('error');
   });
});