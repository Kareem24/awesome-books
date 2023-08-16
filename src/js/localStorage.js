class LocalStorage {
  constructor(name) {
    this.name = name;
  }

  addToLocalStorage = data => localStorage.setItem(this.name, JSON.stringify(data));

  get = () => (localStorage.getItem(this.name) ? JSON.parse(localStorage.getItem(this.name)) : []);

  removeFromLocalStorage = id => this.get().filter(book => book.id !== id);
}
export default LocalStorage;
