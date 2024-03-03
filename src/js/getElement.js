class GetElement {
  constructor(selector, isList) {
    this.isList = isList;
    this.selector = selector;
    return this.isList
      ? document.querySelectorAll(this.selector)
      : document.querySelector(this.selector);
  }
}

export default GetElement;
