class GetElement {
  constructor(selector, isList) {
    this.isList = isList;
    this.selector = selector;
    if (this.isList) return document.querySelectorAll(this.selector);

    return document.querySelector(this.selector);
  }
}
class LocalStorage {
  constructor(name) {
    this.name = name;
  }

  add = data => localStorage.setItem(this.name, JSON.stringify(data));

  get = () => (localStorage.getItem(this.name) ? JSON.parse(localStorage.getItem(this.name)) : []);

  remove = id => this.get().filter(book => book.id !== id);
}
class Book {
  constructor() {
    this.localStorage = new LocalStorage('books');
    this.bookData = [];
    this.bookList = new GetElement('.added-books', false);
  }

  #delete = e => {
    const el = e.currentTarget.parentElement;
    const { id } = el.dataset;
    this.bookList.removeChild(el);
    this.bookData = this.localStorage.remove(id);
    this.localStorage.add(this.bookData);
  };

  #create = ({ id, title, author }) => {
    const element = document.createElement('article');
    element.classList.add('book');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${title}</p>
        <p class="author">${author} </p>
        <button type="button" class='delete-btn'>Remove</button>
        <div class="horizontal-line"></div>`;

    this.bookList.appendChild(element);
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', this.#delete);
  };

  add = e => {
    e.preventDefault();
    const book = new FormData(e.currentTarget);
    const id = new Date().getTime().toString();
    const value = [...book.values()];
    const entries = Object.fromEntries([...book.entries()]);
    if ((value[0].trim() && value[1].trim()).length === 0 || value.includes('')) return;
    this.bookData = this.localStorage.get();
    this.bookData.push({ id, ...entries });
    this.#create({ id, ...entries });
    this.localStorage.add(this.bookData);
    const title = new GetElement('#title', false);
    const author = new GetElement('#author', false);
    title.value = '';
    author.value = '';
  };

  loadBook = () => {
    const books = this.localStorage.get();
    if (books.length > 0) {
      books.map(book => this.#create(book));
    }
  };
}

const bookLists = new Book();
const form = new GetElement('#form', false);
form.addEventListener('submit', bookLists.add);
window.addEventListener('DOMContentLoaded', bookLists.loadBook);
