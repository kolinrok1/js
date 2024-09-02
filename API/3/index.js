const like = document.querySelector('.like');
let count = document.querySelector('.count');
let likeCount = '';



async function fetchPhoto() {
    try {
        const response = await fetch ("https://api.unsplash.com/photos/random?client_id=ZG8M1crlmKlbNzQ-wfa8SXid68P2UbYgS4_tMiigvRg");
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.log('Ошибка загрузки !!!', error);
        return [];
    }
}

async function getPhoto() {
    const photo = await fetchPhoto();
    const imgElemet = document.createElement('img');
    imgElemet.src = photo.urls.small;
    document.querySelector('.conteiner_img').append(imgElemet);
    document.querySelector('.conteiner_info').innerHTML =photo.user.username;
    count.innerHTML=photo.likes;
    likeCount = photo.likes;
}

like.addEventListener('click', function (e) {
    console.log('3333');
    like.style.fill = 'red';
    setTimeout(function() {
        like.style.fill = 'gray';
    }, 1500);
    likeCount = parseInt(likeCount) + 1;
    count.innerHTML = likeCount;

});

getPhoto();