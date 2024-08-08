class Library {
    #books = [];

    constructor(books) {
        this.#books = books;
    }

    get getBooks() {
        return this.#books;
    }

    allBooks() {
        for (const el of this.#books) {
            console.log(`${this.#books.indexOf(el) + 1}
          Название: ${el.title} 
          Автор: ${el.author} 
          Год выпуска: ${el.year} 
          Описание: ${el.description}`);
        }
    }

    addBook(titleBook, authorBook, yearBook, descriptionBook) {
        const book = {
            title: titleBook,
            author: authorBook,
            year: yearBook,
            description: descriptionBook,
        };
        this.#books.push(book);
    }

    removeBook(titleBook) {
        for (const el of this.#books) {
            if (el.title === titleBook) {
                this.#books.splice(this.#books.indexOf(el), this.#books.indexOf(el));
                return 'Книга удалена';
            }
        }
        return 'Такой книги не существует';
    }
    hasBook(titleBook) {
        for (const el of this.#books) {
            if (el.title === titleBook) {
                return true;
            }
        }
        return false;
    }
}

const arrBooks = [
    {
        title: 'Все предельно',
        author: 'Стивен Кинг',
        year: 2002,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sunt?',
    },
    {
        title: 'Четыре сезона',
        author: 'Стивен Кинг',
        year: 1982,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sunt?',
    },
];

const library = new Library(arrBooks);


// library.addBook(
//   'Все предельно',
//   'Стивен Кинг',
//   2002,
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sunt?'
// );
// library.addBook(
//   'Четыре сезона',
//   'Стивен Кинг',
//   1982,
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sunt?'
// );


library.addBook(
    'Роза Марена',
    'Стивен Кинг',
    1995,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sunt?'
);
library.allBooks();
console.log('-------------------------------------------');
console.log(library.removeBook('Четыре сезона'));
library.allBooks();
console.log(library.hasBook('Четыре сезона'));
console.log(library.hasBook('Роза Марена'));