"use strict";

/*
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
let arr = [1, 2, 3, 4, 5, 6, 7];
const arrNew =arr.slice(0, 2);
arrNew.push(100);
arr = arrNew.concat(arr.slice(5,7));
console.log(arr);