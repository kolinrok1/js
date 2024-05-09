import { products } from "./data.js";
const dataBase = JSON.parse(products);

const content = document.querySelector('.content');

dataBase.forEach(({ imgProduct, nameProduct, descriptionProduct, priceProduct }) => {
   const divProduct = document.createElement('div');
   divProduct.classList.add('product');
   content.appendChild(divProduct);

   const img = document.createElement('img');
   img.classList.add('product__img');
   img.src = imgProduct;
   img.width = 200
   divProduct.appendChild(img);

   const divProductWrap = document.createElement('div');
   divProductWrap.classList.add('product__wrap');
   divProduct.appendChild(divProductWrap);

   const productName = document.createElement('h2');
   productName.textContent = nameProduct;
   divProductWrap.appendChild(productName);

   const productDescription = document.createElement('p');
   productDescription.textContent = descriptionProduct;
   divProductWrap.appendChild(productDescription);

   const productPrice = document.createElement('p');
   productPrice.textContent = priceProduct;
   divProductWrap.appendChild(productPrice);
});