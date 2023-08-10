/* eslint-disable class-methods-use-this */
import GetElement from './getElement';

class NavBar {
  constructor() {
    this.bookListSection = new GetElement('.book-section', false);
    this.addNewBook = new GetElement('.add-new-book', false);
    this.contact = new GetElement('.contact', false);
  }

  changePage = e => {
    const current = e.currentTarget;
    if (current.classList.contains('add')) {
      this.showHide(this.addNewBook, 'd-none', this.contact, this.bookListSection);
    }
    if (current.classList.contains('list')) {
      this.showHide(this.bookListSection, 'd-none', this.contact, this.addNewBook);
    }
    if (current.classList.contains('contact-us')) {
      this.bookListSection.classList.add('d-none');
      this.contact.classList.remove('d-none');
      this.addNewBook.classList.add('d-none');
    }
  };

  showHide = (show, className, ...hide) => {
    hide.forEach(el => el.classList.add(className));
    show.classList.remove(className);
  };

  menu = (el, className) => {
    el.classList.toggle(className);
  };
}

export default NavBar;
