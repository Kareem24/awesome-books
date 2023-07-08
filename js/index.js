class GetElement {
  constructor(selector, isList) {
    this.isList = isList;
    this.selector = selector;
    return this.isList
      ? document.querySelectorAll(this.selector)
      : document.querySelector(this.selector);
  }
}
class LocalStorage {
  constructor(name) {
    this.name = name;
  }

  addToLocalStorage = data => localStorage.setItem(this.name, JSON.stringify(data));

  get = () => (localStorage.getItem(this.name) ? JSON.parse(localStorage.getItem(this.name)) : []);

  removeFromLocalStorage = id => this.get().filter(book => book.id !== id);
}
class Book {
  constructor() {
    this.localStorage = new LocalStorage('books');
    this.bookData = [];
    this.bookList = new GetElement('.added-books', false);
  }

  #deleteBook = e => {
    const el = e.currentTarget.parentElement.parentElement;
    const { id } = el.dataset;
    this.bookList.removeChild(el);
    this.bookData = this.localStorage.removeFromLocalStorage(id);
    this.localStorage.addToLocalStorage(this.bookData);
    if (this.bookList.children.length === 0) {
      this.bookList.innerHTML = '<p class="red">this book is empty</p>';
    }
  };

  #createBook = ({ id, title, author }) => {
    const element = document.createElement('article');
    element.classList.add('book');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<div class='details d-flex section-center'>
    <p class="title">"<span class='book-title'>${title}</span>" by <span class='author'> ${author}</span> </p>
    <button type="button" class='delete-btn'>Remove</button>
    </div>
       `;

    this.bookList.appendChild(element);
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', this.#deleteBook);
  };

  addToBooklist = e => {
    e.preventDefault();
    const book = new FormData(e.currentTarget);
    const id = new Date().getTime().toString();
    const value = [...book.values()];
    const entries = Object.fromEntries([...book.entries()]);
    if ((value[0].trim() && value[1].trim()).length === 0 || value.includes('')) return;
    this.bookData = this.localStorage.get();
    this.bookData.push({ id, ...entries });
    if (this.bookList.textContent === 'this book is empty') {
      this.bookList.textContent = '';
    }
    this.#createBook({ id, ...entries });
    this.localStorage.addToLocalStorage(this.bookData);
    const title = new GetElement('#title', false);
    const author = new GetElement('#author', false);
    title.value = '';
    author.value = '';
  };

  loadBook = () => {
    const books = this.localStorage.get();
    const bookList = new GetElement('.added-books');

    if (books.length > 0) {
      books.map(book => this.#createBook(book));
    }
    if (bookList.children.length === 0) {
      bookList.innerHTML = '<p class="red">this book is empty</p>';
    }
  };
}

const bookLists = new Book();
const form = new GetElement('#form', false);
form.addEventListener('submit', bookLists.addToBooklist);
window.addEventListener('DOMContentLoaded', bookLists.loadBook);
