class DOMNodeCollection {
  constructor(array=[]) {
    this.array = array;
  }

  each(callback) {
    this.array.forEach(callback);
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
    if (this.array.length === 0) return;

    if (typeof arg === "string") {
      this.array.forEach((el) => {
        el.innerHTML += arg;
      });
    } else if (arg instanceof DOMNodeCollection){
      this.array.forEach((el) => {
        arg.array.forEach((childEl) => {
          el.appendChild(childEl.cloneNode(true));
        });
      });
    }
  }

  attr(name, value) {
    if (typeof value === "string") {
      this.array.forEach((el) => el.setAttribute(name, value));
    } else {
      return this.array[0].getAttribute(name);
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
      if (!parent.visited) {
        parents.array.push(parent);
        parent.visited = true;
      }
    });

    parents.array.forEach((el) => {
      el.visited = false;
    })

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

  on(type, callback) {
    this.array.forEach((el) => {
      el.addEventListener(type, callback);
      const eventKey = `callback-${type}`;
      if (typeof el[eventKey] === "undefined") {
        el[eventKey] = [];
      }
      el[eventKey].push(callback);
    });
  }

  off(type) {
    this.array.forEach((el) => {
      const eventKey = `callback-${type}`;
        if (el[eventKey]) {
          el[eventKey].forEach((callback) => {
            el.removeEventListener(type, callback);
          });
        }
        el[eventKey] = [];
    });
  }
}

module.exports = DOMNodeCollection;
