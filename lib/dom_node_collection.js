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

  

}

module.exports = DOMNodeCollection;
