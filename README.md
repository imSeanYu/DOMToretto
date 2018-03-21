# DOMToretto

DOMToretto is a JavaScript library inspired by jQuery.  It features an easy-to-use API which lets users traverse/manipulate DOM elements, add/remove event handlers, make Ajax requests, and more.

## How to use this library in your project

Download the library into your project and load the `dom_toretto.js` file as a script in your code (probably in the `index.html` file).

```
<head>
  <meta charset="utf-8">
  <script type="text/javascript" src="../dist/dom_toretto.js"></script>
  ...
</head>
```

## DOMToretto API

### $l
All of the functions of DOMToretto are accessed through the global window variable `$l`.  
For example, `$l("div")` returns an array of all `<div></div>`s as DOM Node elements inside a DOMNodeCollection object, which in turn gives them access to all functions of DOMToretto.
$l can also queue functions to be run in sequence once document readyState is complete.
### $l.ajax
Sends an HTTP request which returns a new Promise.
### addClass()
Adds class(es) to each element of array of DOM Node objects.
### append()
"Append" content (HTMLElement, DOMNodeCollection, or String) to the end of each element.
### attr()
It can take two arguments `attr(name, value)`.
If `value` is given, and the type of value is a string, it sets the `name` attribute to `value` for each DOMNodeCollection element.
If no `value` is given, it returns the `name` attribute of the first element of DOMNodeCollection.
### children()
Returns all direct children of all HTMLElements of DOMNodeCollection array.
### empty()
Sets the innerHTML of each DOMNodeCollection element to an empty string "".
### html()
If argument is passed in, it changes the innerHTML value of each DOMNodeCollection element to the argument string.
Otherwise, returns the innerHTML of the first DOMNodeCollection element.
### off()
Remove an event listener from each element of DOMNodeCollection array.
### on()
Add an event listener to each element of DOMNodeCollection array.
### parent()
Returns unique parent DOM Node elements of all HTMLElements of DOMNodeCollection array.
### remove()
Removes all DOMNodeCollection elements from DOM.
### removeClass()
Removes class from each element of array of DOM Node objects.
