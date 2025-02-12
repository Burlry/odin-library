const bookDiv = document.createElement('div');
const bookGrid = document.getElementById('book-grid')
const headerGrid = document.getElementById('header-grid');

const titleHeader = document.createElement('p');
const authorHeader = document.createElement('p');
const pagesHeader = document.createElement('p');
const readHeader = document.createElement('p');
const removeHeader = document.createElement('p');

titleHeader.textContent = 'Title';
authorHeader.textContent = "Author";
pagesHeader.textContent = "Pages";
readHeader.textContent = "Read";
removeHeader.textContent = "";

headerGrid.appendChild(titleHeader);
headerGrid.appendChild(authorHeader);
headerGrid.appendChild(pagesHeader);
headerGrid.appendChild(readHeader);
headerGrid.appendChild(removeHeader);

const submit = document.getElementById('submit-button');
const titleGet = document.getElementById('title-input');
const authorGet = document.getElementById('author-input');
const pagesGet = document.getElementById('pages-input');
const readGet = document.getElementById('read-input');

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
  myLibrary.push(tempBook);
  console.log(myLibrary);
  displayBooks();
};

console.log(myLibrary);

submit.addEventListener('click', (event) => {
  event.preventDefault();

  let readCurrent = '';
  if (readGet.checked) {
    readCurrent = "Read";
  } else {
    readCurrent = "Not Read"
  }
  addBookToLibrary(titleGet.value, authorGet.value, pagesGet.value, readCurrent)
  titleGet.value = '';
  authorGet.value = '';
  pagesGet.value = '';
  readGet.checked = false;
});

function displayBooks() {
  while (bookGrid.lastElementChild) {
    bookGrid.removeChild(bookGrid.lastElementChild);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    
    const titleDiv = document.createElement('p');
    const authorDiv = document.createElement('p');
    const pagesDiv = document.createElement('p');
    const readDiv = document.createElement('p');
    const removeButton = document.createElement('button');

    titleDiv.textContent = myLibrary[i].title;
    authorDiv.textContent = myLibrary[i].author;
    pagesDiv.textContent = myLibrary[i].pages;
    readDiv.textContent = myLibrary[i].read;
    removeButton.textContent = "Remove";
    
    bookGrid.appendChild(titleDiv);
    bookGrid.appendChild(authorDiv);
    bookGrid.appendChild(pagesDiv);
    bookGrid.appendChild(readDiv);
    bookGrid.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
      removeBooks(i);
      displayBooks();
    })
  }

};

function removeBooks(i) {
  myLibrary.splice(i, (i + 1))
};

function toggleRead() {

}

displayBooks();


// CSS

