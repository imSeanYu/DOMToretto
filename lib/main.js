const DOMNodeCollection = require('./dom_node_collection.js');

let functionQueue = [];

window.$l = (arg) => {
  if (typeof arg ==="string") {
    return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
  }
  else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else if (arg instanceof Function) {
      if (document.readyState === "complete"){
        arg();
      } else {
        functionQueue.push(arg);
      }
  }
};

$l.extend = (base, ...args) => {
  args.forEach((arg) => {
    Object.keys(arg).forEach((el) => {
      base[el] = arg[el];
    });
  });
  return base;
};

$l.ajax = (options) => {
  const request = new XMLHttpRequest();
  let defaults = {
    success:()=> {},
    error:()=> {},
    url:"",
    method:'GET',
    data:{},
    contentType:'application/x-www-form-urlencoded; charset=UTF-8'
    };

  let url = options.url;

  options = $l.extend(defaults, options);
  

  request.open(options.method, options.url);
  request.onload = (e) => {
    if (request.status === 200) {
      options.success(request.response);
    } else {
      options.error(request.response);
    }
  };
  request.send(JSON.stringify(options.data));



};


document.addEventListener("DOMContentLoaded", function() {
  functionQueue.forEach((el) => {
    el();
  });
});
