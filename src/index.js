import './css/index.css';
import GetElement from './js/getElement';
import Book from './js/book';
import NavBar from './js/navbar';

const bookLists = new Book();
const form = new GetElement('#form', false);
const navbar = new NavBar();
form.addEventListener('submit', bookLists.addToBooklist);
const links = new GetElement('.link', true);
links.forEach(element => {
  element.addEventListener('click', navbar.changePage);
});
window.addEventListener('DOMContentLoaded', () => {
  bookLists.loadBook();
  navbar.showHide(navbar.bookListSection, 'd-none', navbar.contact, navbar.addNewBook);
});
