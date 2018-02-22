class DOMNodeCollection {
  constructor(array=[]) {
    this.array = array;
  }

  html(string) {
    if (!string) {
      let firstEl = this.array[0];
      return firstEl.innerHTML;
    } else {
      this.array.forEach((el) => {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.array.forEach((el) => {
      el.innerHTML = "";
    });
  }

  append(arg) {
    this.array.forEach((el) => {
      el.innerHTML += arg.outerHTML;
    });
  }

  attr(name, value) {
    if (!value) {
      return this.array[0].getAttribute(name);
    } else {
      this.array[0].setAttribute(name, value);
    }
  }

  addClass(string) {
    this.array.forEach((el) => {
      el.classList.add(string);
    });
  }

  removeClass(string) {
    this.array.forEach((el) => {
      el.classList.remove(string);
    });
  }

  children() {
    let elements = new DOMNodeCollection();

    this.array.forEach((el) => {
      let children = el.children;
      Array.from(children).forEach((child) => {
        elements.array.push(child);
      });
    });

    return elements;
  }

  parent() {
    let parents = new DOMNodeCollection();

    this.array.forEach((el) => {
      let parent = el.parentElement;
        parents.array.push(parent);
      });

    return parents;
  }

  find (selector='*') {
    let descendants = new DOMNodeCollection();

    this.array.forEach((el) => {
      let descs = el.querySelectorAll(selector);
      Array.from(descs).forEach((desc) => {
        descendants.array.push(desc);
      });
    });
    return descendants;
  }

  remove () {
    this.array.forEach((el) => {
      el.outerHTML = "";
      el.innerHTML = "";
      });

    this.array = [];
  }
}

module.exports = DOMNodeCollection;
