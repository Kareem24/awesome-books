import '../css/index.css';
import GetElement from './getElement';
import Book from './book';
import NavBar from './navbar';
import dates from './date';

const bookLists = new Book();
const form = new GetElement('#form', false);
const navbar = new NavBar();
form.addEventListener('submit', bookLists.addToBooklist);
const links = new GetElement('.link', true);
const menu = new GetElement('.btn-menu', true);
const mobileMenu = new GetElement('.mobile-menu', false);
menu.forEach(btn => btn.addEventListener('click', () => navbar.menu(mobileMenu, 'hide-nav')));
links.forEach(element => {
  element.addEventListener('click', navbar.changePage);
});
window.addEventListener('DOMContentLoaded', () => {
  bookLists.loadBook();
  dates();
  navbar.showHide(navbar.bookListSection, 'd-none', navbar.contact, navbar.addNewBook);
});
