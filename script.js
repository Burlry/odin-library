const myLibrary = [{
  title: 'nugget',
  author: 'chimp slimly',
  pages: 69,
  read: 'every damn day'
}];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
};

function addBookToLibrary(title, author, pages, read) {
  let tempBook = new Book(title, author, pages, read);
  console.log(tempBook);
  myLibrary.push(tempBook);
};

function displayBooks() {

};

addBookToLibrary("the tale of the big nug", "big nug", 169, "every damn fucking day");

console.log(myLibrary);