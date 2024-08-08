class Library{
    #book = [];
    constructor(book){
        this.#book = book;
    }
    get book() {
        return this.#book
    }
    get book() {
        return this.#book
    }
    allBook () {
        console.log("Список книг:");
       for (const el of this.#book) {
            console.log(el);
       }
    }
    
    addBook(plusBook) {
       if (this.#book.includes(plusBook)) {
            console.log(`Книга ${plusBook} есть в списке`);
       }
       else{
        this.#book.push(plusBook);
        console.log(`Книга ${plusBook} добавлена`);
       }
    }

    removeBook (deleteBook) {
        if (this.#book.indexOf(deleteBook) !== -1) {
            this.#book.splice(this.#book.indexOf(deleteBook), 1);
            console.log(`Книга ${deleteBook} удалена`);
       }
       else{
        console.log(`Книги ${deleteBook} нет в списке`);
       }
    }
    hasBook(title){
        if (this.#book.includes(title)) {
            return true;
       }
       else{
        return false;
       }
    }

}
const qqqq = [];
let newBook = new Library(qqqq);
newBook.addBook('Му-Му');
newBook.addBook('Война и мир');
newBook.addBook('Преступление и наказание');
newBook.addBook('Война и мир');
console.log("-----");
newBook.allBook();
console.log("-----");
newBook.removeBook('Война и мир');
newBook.removeBook('Лукоморье');
console.log("-----");
newBook.allBook();
console.log("-----");
console.log(newBook.hasBook('Му-Му'));
console.log(newBook.hasBook("Горе от ума"));