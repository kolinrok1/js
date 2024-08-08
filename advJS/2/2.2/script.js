const initialData = [
    {
    product: "Apple iPhone 13",
    reviews: [
    {
    id: "1",
    text: "Отличный телефон! Батарея держится долго.",
    },
    {
    id: "2",
    text: "Камера супер, фото выглядят просто потрясающе.",
    },
    ],
    },
    {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
    {
    id: "3",
    text: "Интересный дизайн, но дорогой.",
    },
    ],
    },
    {
    product: "Sony PlayStation 5",
    reviews: [
    {
    id: "4",
    text: "Люблю играть на PS5, графика на высоте.",
    },
    ],
    },
    ];


    const elFeedback = document.querySelector (".feedback");
    for (const model of initialData) {
        const productEl = document.createElement("div");
        elFeedback.appendChild(productEl);
        productEl.classList.add("productEl");
        productEl.innerHTML = model.product;
        for (let index = 0; index < model.reviews.length; index++) {
            const review = document.createElement("div");
            productEl.appendChild(review);
            review.classList.add("review");
            review.innerHTML = (model.reviews[index]).text;
            
        }
    }

    const textareaEl = document.querySelector(".input");
    const buttonEl = document.querySelector(".button");
    const errorEl = document.querySelector(".error");

    textareaEl.addEventListener('input', function (e) {
        if ((textareaEl.value).length < 50) {
            errorEl.innerHTML = "отзыв должен содержать минимум 50 символов"
        } else if ((textareaEl.value).length > 500) {
             errorEl.innerHTML = "отзыв должен содержать максимум 500 символов"
        } else{
            errorEl.innerHTML = ""
        }
    });

    buttonEl.addEventListener("click", function(e){
        if ((textareaEl.value).length < 50 || (textareaEl.value).length > 500) {
            alert ("Отзыв не соответвует критериям")
        } else {
            const review = document.createElement("div")
            elFeedback.after(review);
            review.classList.add("review1");
            review.innerHTML = textareaEl.value;
        }
    });


