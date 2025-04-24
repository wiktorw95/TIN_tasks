class Library{
    constructor() {
        this.books = [];
    }

    addBook(title, author){
        const newBook = {
            title: title,
            author: author,
            isAvailable: true
        };
        this.books.push(newBook);
    }

    borrowBook(title){
        const findBook = this.books.find(book => book.title === title);
        if(findBook.isAvailable){
            findBook.isAvailable = false;
            return findBook;
        } else {
            console.log('This book is currently not available.');
            return null;
        }
    }
    returnBook(title){
        const findBook = this.books.find(book => book.title === title);
        if(!findBook.isAvailable){
            findBook.isAvailable = true;
            return findBook;
        } else {
            console.log('This book is already in the library.');
            return null;
        }
    }
}