function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}

function LibraryCatalog() {
    this.books = [];
}

LibraryCatalog.prototype.addBook = function(book) {
    this.books.push(book);
}


LibraryCatalog.prototype.BookIterator = function*() {
  let count = 0;
  while (count < this.books.length) {
    yield this.books[count];
    count++;
  }
}

LibraryCatalog.prototype[Symbol.iterator] = function() {
  return this.BookIterator();
}


LibraryCatalog.prototype.getBooksByAuthor = function(author) {
    return this.books.filter(book => book.author === author)
}


const library = new LibraryCatalog();
// Example Books
const book = new Book("The new age", "Daniel Robinson", "Kogan");
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
const book3 = new Book("1984", "George Orwell", "Science Fiction");

// Add Example books
library.addBook(book);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


// All Books
console.log("All Books:");
console.log(library);
for (const book of library.books) {
  console.log(book);
}


const author = "Daniel Robinson";
console.log(`Books by ${author}:`);
const booksByAuthor = library.getBooksByAuthor(author);
console.log(booksByAuthor);
for (const book of booksByAuthor) {
  console.log(book.title);
}