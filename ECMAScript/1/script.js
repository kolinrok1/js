//Задание 1
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
console.log("");

// Задание 2
const createCounter = () => {
   let count = 0;
   return {
      increment: () => ++count,
      decrement: () => --count,
   }
}
const counter1 = createCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());

const counter2 = createCounter();
console.log(counter2.decrement());
console.log(counter2.decrement());
console.log(counter2.decrement());

console.log('');
// Задание 3
let serchElement = [];
function findElementByClass(rootEl, classEl) {
   if (rootEl.hasChildNodes()) {
      for (let element of rootEl.children) {
         if (element.className === classEl) {
            serchElement.push(element);
            if (serchElement[0].className !== classEl) {
               serchElement = [];
               serchElement.push(element);
            }
         }
         findElementByClass(element, classEl);
      }
   }
   return serchElement[0];
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'chaeld6');
console.log(targetElement);

console.log("");

const rootElement_1 = document.getElementById('root1');
const targetElement_1 = findElementByClass(rootElement_1, 'class5');
console.log(targetElement_1);