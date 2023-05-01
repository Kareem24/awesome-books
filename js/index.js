// // const startApp = () => {
// //   const body = document.querySelector('body');
// //   body.innerHTML = '<h2>JAVASCRIPT ENABLED</h2>';
// // };

// // startApp();
let bookData = [];

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const bookList = document.querySelector('.added-books');

const addToLocalStorage = data => {
  localStorage.setItem('book', JSON.stringify(data));
};
const getLocalStorage = () => (localStorage.getItem('book') ? JSON.parse(localStorage.getItem('book')) : []);
const removeLocalStorage = id => {
  const books = getLocalStorage();
  return books.filter(book => book.id !== id);
};
const deleteBook = e => {
  const el = e.currentTarget.parentElement;
  const { id } = el.dataset;
  bookList.removeChild(el);
  removeLocalStorage(id);
  const newBook = removeLocalStorage(id);
  addToLocalStorage(newBook);
};

const createNewBook = ({ id, title, author }) => {
  const element = document.createElement('article');
  element.classList.add('book');
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${title}</p>
        <p class="author">${author} 
        </p>
        <button type="button" class='delete-btn'>Remove</button>
        <hr />`;
  bookList.appendChild(element);

  const deleteBtn = element.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', deleteBook);
};

const loadBook = () => {
  const books = getLocalStorage();
  if (books.length > 0) {
    books.forEach(book => {
      createNewBook(book);
    });
  }
};

const addBook = e => {
  e.preventDefault();
  const book = new FormData(e.currentTarget);
  const value = [...book.values()];
  const entries = Object.fromEntries([...book.entries()]);
  if (value.includes('')) return;
  bookData = getLocalStorage();
  bookData.push({ id: new Date().getTime().toString(), ...entries });
  createNewBook({ id: new Date().getTime().toString(), ...entries });
  addToLocalStorage(bookData);

  title.value = '';
  author.value = '';
};

form.addEventListener('submit', addBook);
window.addEventListener('DOMContentLoaded', loadBook);
