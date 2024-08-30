let indexImg = 0;
const sliderImg = document.querySelectorAll('.img_main');
const buttonNext = document.querySelector('.button_rigth');
const buttonPrev = document.querySelector('.button_left');
const point = document.querySelectorAll('.point');
const point_conteiner = document.querySelector('.point_conteiner');

console.log(sliderImg.length);
function ShowImg(indexImg) {
    sliderImg[indexImg].classList.remove('disactive');
    point[indexImg].classList.add('point_active');
}

function OffImg(index) {
    sliderImg[index].classList.add('disactive');
    point[indexImg].classList.remove('point_active');
}

buttonNext.addEventListener('click', function (e) {
    if (indexImg == sliderImg.length-1) {
        indexImg = 0;
        OffImg(sliderImg.length-1);
        ShowImg(indexImg)
        point[sliderImg.length-1].classList.remove('point_active');
    } else {
        OffImg(indexImg);
        indexImg = indexImg +1;
        ShowImg(indexImg);
    }
});

buttonPrev.addEventListener('click', function (e) {
    console.log(2423423);
    if (indexImg == 0) {
        indexImg = sliderImg.length-1;
        OffImg(0);
        ShowImg(sliderImg.length-1)
        point[0].classList.remove('point_active');
    } else {
        OffImg(indexImg);
        indexImg = indexImg -1;
        ShowImg(indexImg);
    }
});

point.forEach((element, index) => {
    element.addEventListener('click', function (e) {
        OffImg(indexImg);
        ShowImg(index);
        indexImg = index;
    });
});