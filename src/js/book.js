import LocalStorage from './localStorage';
import GetElement from './getElement';

class Book {
  constructor() {
    this.localStorage = new LocalStorage('books');
    this.bookData = [];
    this.bookList = new GetElement('.added-books', false);
  }

  #showAlert = (action, message) => {
    const alert = new GetElement('.alert p');
    alert.classList.add(`alert-${action}`);
    alert.textContent = message;
    setTimeout(() => {
      alert.textContent = '';
      alert.classList.remove(`alert-${action}`);
    }, 1000);
  };

  #deleteBook = e => {
    const el = e.currentTarget.parentElement.parentElement;
    const { id } = el.dataset;
    this.bookList.removeChild(el);
    this.bookData = this.localStorage.removeFromLocalStorage(id);
    this.localStorage.addToLocalStorage(this.bookData);
    this.#showAlert('danger', 'Book deleted');
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
    this.#showAlert('success', 'Book Added ');
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
export default Book;
