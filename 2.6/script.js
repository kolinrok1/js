console.log(JSON.parse(dataInfo));
const divEl = document.querySelector('div.container');
const dataJSON = JSON.parse(dataInfo);
dataJSON.forEach(element => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(element['class']);

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', element.url);
    imgEl.setAttribute('width', element.width);
    imgEl.setAttribute('height', element.heigth);

    const pEl = document.createElement('p');
    pEl.innerHTML = element.text;

    divEl.appendChild(newDiv);
    newDiv.appendChild(imgEl);
    newDiv.appendChild(pEl);
});