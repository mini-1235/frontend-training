---
theme: dracula
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
mdc: true
---

# 2023 11.19 React Basics

By Sudo


<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>



---
transition: fade-out
---

# Review 

<br>

## Review 啥？ 没人给我反馈呜呜呜



---

## HTML
<div align="center">
  <img src="figures/dom.png" style="zoom:40%">
</div>
<br>

```js
let title = document.getElementById("articleTitle");
let loginBtn = document.getElementsByName("login")[0];
```

---

## Javascript 

### Functions
```javascript
const fToC = function(temp) {
  return (temp - 32) * 5/9;
}
```
Arrow Function!
```javascript
const fToC = (temp) => {
  return (temp - 32) * 5/9;
}
```

---

## JS Objects <=> JSON
```javascript
let teachingAssistant = {
   firstName: "Alice",
   lastName: "Smith",
   age: 24
};
```
```json
{
   "firstName": "Alice",
   "lastName": "Smith",
   "age": 24
}
```

- `JSON.parse()` JSON String => JS Object
- `JSON.stringify()` JS Object => JSON String

---

### Callback Functions

`then` and `catch` take a *callback function* as an argument.

**Definition:** A *callback function* (sometimes called a *function reference*) is passed into another function as an argument, which is then invoked inside the outer function to complete a routine or action.

```js
const name = prompt('Please enter your name.');
function processUserInput(callback) {
  alert("Incoming message!")
  callback(name);
}
function greeting1(name) {
  alert('Hello ' + name);
}
const greeting2 = (name) => {
  alert('Whats up ' + name);
}
processUserInput(greeting1);
processUserInput(greeting2);
processUserInput((name) => alert("Welcome " + name));
```

---

# Declarative vs Imperative Programming
The following is imperative...

`for (let obj of arr) { /* stmts */ }`



The following is declarative...

`arr.forEach((obj) => { /* stmts */ })`


Declarative array functions include `forEach`, `map`, `slice`, `concat`, `filter`, `some`, `every`, and `reduce`.

demo1:  Usage of `map` in array

---

# Spread Operator 
浅拷贝
```js
const defs = {
  erf: "a plot of land",
  popple: "turbulent seas"
}

const newDefs = {
  ...defs,
  futz: "waste of time"
}
```
Shallow Copy? Deep Copy? Reference Copy? 

link to shallow copy: https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

---
layout: default
---


# API 

**Definition:** An application programming interface (API) is a set of definitions and protocols for communication through the serialization and de-serialization of objects.

Requests can be `synchronous` or `asynchronous`. 
![](figures/reqres.png)

---

# Synchronous vs Asynchronous

<img style="zoom:70%" src="https://res.cloudinary.com/mayashavin/image/upload/w_665/v1589141070/articles/ES6Promises/Synchronous_explained.png">

---

# Asynchronous 
<img style="zoom:50%" src="https://res.cloudinary.com/mayashavin/image/upload/w_665/v1589141045/articles/ES6Promises/Untitled_Artwork_2.png">
Asynchronous means action can start, run in the background without disturbing other activities to proceed, and resume later if needed.

#### Async in JS?
- does not stop and wait for it to finish 
- continues to the next operation in the waiting queue and resumes that specific operation later if possible, once the queue is empty.
---

# Promises
A promise is a result guarantee for a particular asynchronous operation on its execution. In other words, the related action makes a promise to return a final value, regardless of how long it takes to execute.

Creating a promise 
```js
const myPromise = new Promise(executor)
```
<img src="https://res.cloudinary.com/mayashavin/image/upload/w_665/v1589141074/articles/ES6Promises/Untitled_Artwork.png" style="zoom:50%;" >

```js
const myPromise = new Promise((resolve, reject) => {
  const randNum = generateRandom();
  if (randNum < 5) {
    resolve(`I'm resolved at ${randNum}`);
  } else {
    reject(`I'm rejected at ${randNum}`);
  }
});
```


---
---

# Promise Object 
<img src="https://res.cloudinary.com/mayashavin/image/upload/w_665/v1589141546/articles/ES6Promises/printOut_promise.gif" style="zoom:48%">

- Fulfilled ✅ - when the operation completed execution without error, meaning the Promise resolves (resolve() triggered).
- Rejected 🔴 - as the opposite, when there is an error occurred during the operation, meaning when the Promise chooses to reject (reject() triggered).
- Pending ⏳ - the operation is still in execution and not yet completed/failed.

---

# Promise in Chaining
- .then() - is called after a Promise resolves (similar to .done() in Ajax).
- .catch() - is called after a Promise rejects (similar to .fail() in Ajax)
- .finally() - is always called at the end, regardless the status of a Promise. This method is similar to .always() in Ajax.

![](https://res.cloudinary.com/mayashavin/image/upload/w_665,q_auto,f_auto/v1589141074/articles/ES6Promises/Flow_promise)
---

# Table of contents

```html
<Toc minDepth="1" maxDepth="1"></Toc>
```

<Toc maxDepth="1"></Toc>

---
transition: slide-up
---

# Why react?

- `innerHTML` is bad
- Efficient DOM updating
- Declarative programming



---

## InnerHTML is bad

```js
<html>
  <head></head>
  <body>
    <h1>Badger Book</h1>
    <div id="student"></div>
  </body>
</html>
```
<br>

```js
const name = "<image src='abc.png' onerror='alert(document.cookie)'/>";
document.getElementById("student").innerHTML = '<h2>' + name + '</h2>'
```


---

## Efficient DOM Updating
Virtual DOM
![bg right 30%](https://img.58cdn.com.cn/escstatic/fecar/pmuse/reactnative/diff1.png)

--- 

## Virtual DOM
<div>
<img align="left" src="https://almerosteyn.com/css/images/2017-11-15-id24-accessible-react-tips-tools-tricks/React-DOM.png" style="zoom:40%; " >
<img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?ssl=1" style="zoom:30%; margin-top:100px;" >
</div>


---
---


# Getting started in React

```bash
npx create-react-app my-app
cd my-app
npm start
```

- Every "thing" is a component.

- Every component is a function, inheriting `props` and maintaining an internal `state`.

- A component will re-render when...

  1. its `props` changes
  2. its `state` changes
  3. its parent re-renders

---


# React Components

```js
function App() {
  return (
    <div>
      <Welcome person="GIngo"></Welcome>
      <Welcome person="gimgo"></Welcome>
      <Welcome person="gimgo"></Welcome>
    </div>
  );
}
function Welcome(props) {
  return <h1>Welcome, {props.person}</h1>;
}
```

- JSX
- Props passed by its parent



---

# First hook today - Internal State (UseState)
Used to maintain state, takes an initial value as an argument, returns a pair of the read-only state value and a mutator function.
```js
function Welcome() {
  const [name, setName] = useState("blablabla");
  return <h1>Welcome, {name}</h1>;
}
```
Using a callback function in `setState`
```js
setName(oldName => oldName.substring(0, oldName.length - 1));
```
Using together with spread operator
```js
setNames((oldNames) => [...oldNames, "Jim"]);
```
Remember setState is asynchronous!

Demo2 

---

# Overwriting vs Updating State

```js
export default function Counter() {
  const [number, setNumber] = useState(0);
  return <div>
    <h1>{number}</h1>
    <button onClick={() => {
      setNumber(number + 1);
      setNumber(number + 1);
      setNumber(number + 1);
    }}>+3</button>
  </div>
}
```
```js
export default function Counter() {
  const [number, setNumber] = useState(0);
  return <div>
    <h1>{number}</h1>
    <button onClick={() => {
      setNumber(n => n + 1);
      setNumber(n => n + 1);
      setNumber(n => n + 1);
    }}>+3</button>
  </div>
}
```
---

![](figures/react_batch.png)

---

# Map arrays of data
Given an array of data, we can use `map` to render a list of components.


Demo3 



---

# React key prop
The `key` prop is used by React to speed up rendering. 

 - Always use a *unique* key for the *parent-most* element rendered in a list.
 - This key needs to be *unique among siblings*.
 - This key should *usually* not be the index of the item (e.g. what if the order changes?)


---

# UseEffect
Used to perform an action on component load or state change, takes a callback function and an array of state dependencies as arguments.

```js
useEffect(() => {
  console.log("Component loaded!");
}, []);
```
If the array is empty, the callback function will only be called once when the component loads.

Demo4


---

# React Router

- `BrowserRouter` wraps the entire app, and provides the `history` object to all components.
- `MemoryRouter` same as `BrowserRouter`, but the path is hidden from the browser in memory.
- `HashRouter`
- `StaticRouter`
- `NativeRouter`: React Navigation.

```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}/>
  </Routes>

</BrowserRouter>
```

---

# What's Next?

### State Management?

- Using `useContext`
- Using `sessionStorage` and `localStorage`
- Third party ....

### Optimization?

- `useMemo` & `useCallback` ?