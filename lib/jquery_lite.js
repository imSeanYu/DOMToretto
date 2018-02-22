/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = (arg) => {
  if (typeof arg ==="string") {
    return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
  }
  else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

  on(type, callback) {
    this.array.forEach((el) => {
      el.addEventListener(type, callback);
      const eventKey = `jqliteEvents-${type}`;
      if (typeof el[eventKey] === "undefined") {
        el[eventKey] = [];
      }
      el[eventKey].push(callback);
    });
  }

  off(type) {

    this.array.forEach((el) => {
      const eventKey = `jqliteEvents-${type}`;
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


/***/ })
/******/ ]);