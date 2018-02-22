class DOMNodeCollection {
  constructor(array) {
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

}

module.exports = DOMNodeCollection;
