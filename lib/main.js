const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = (arg) => {
  if (typeof arg ==="string") {
    return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
  }
  else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
};
