// Chapter : Prototypal inheritance


// Task 1 :  Which values are shown in the process?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// console.log( rabbit.jumps ); // output is true (1)

// delete rabbit.jumps;

// console.log( rabbit.jumps ); // output is null (2)

// delete animal.jumps;

// console.log( rabbit.jumps ); // output is undefined (3)




// Task 2 : Searching algorithim


// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head
// };
  
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };
  
// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };




// Task 3 : Where does it write?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// Answer : rabbit object function recieves the full property




// Task 4 : Why are both hamsters full?

// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach = [food];
//     }
// };
  
// let speedy = {
//     __proto__: hamster
// };
  
// let lazy = {
//     __proto__: hamster
// };

// speedy.eat("apple");
// console.log(speedy.stomach)

// lazy.eat("banana");
// console.log( lazy.stomach );




// Chapter : F.prototype


// Task 1 : Changing "prototype"

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();


// Answer 1 :
// Rabbit.prototype = {};

// console.log(rabbit.eats); // Output is true

// Answer 2 :
// Rabbit.prototype.eats = false;

// console.log(rabbit.eats); // Output is false

// Answer 3 :
// delete rabbit.eats;

// console.log(rabbit.eats); // Output is true

// Answer 4 :
// delete Rabbit.prototype.eats;

// console.log(rabbit.eats); // Output is undefined




// Task 2 : Create an object with the same constructor

// function Obj(name) {
//     this.name = name;
// }

// let obj = new Obj("Tom")

// let obj2 = new obj.constructor("Jerry");

// console.log(obj)
// console.log(obj2)




// Chapter : Native prototypes

// Task 1 : Add method "f.defer(ms)" to functions

// Function.prototype.defer = function(time) {
//     setTimeout(this, time)
// }

// function f() {
//     console.log("Hello!");
// }

// f.defer(1000); // shows "Hello!" after 1 second




// Task 2 : Add the decorating "defer()" to functions

// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(...args) {
//         setTimeout(() => f.apply(this, args), ms);
//     }
// };

// function f(a, b) {
//     console.log( a + b );
// }

// f.defer(1000)(1, 2); // shows 3 after 1 sec




// Chapter : Prototype methods, objects without __proto__

// Task 1 : Add toString to the dictionary

// let dictionary = Object.create(null, {
//     toString: {
//       value() {
//         return Object.keys(this).join();
//       }
//     }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// for(let key in dictionary) {
//     console.log(key);
// }

// console.log(dictionary);




// Task 2 : The difference between calls

// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//     console.log(this.name);
// };

// let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi(); // Output is Rabbit
// Rabbit.prototype.sayHi(); // Output is undefined
// Object.getPrototypeOf(rabbit).sayHi(); // Output is Undefined
// rabbit.__proto__.sayHi(); // Output is Undefined



// Chapter : Recursion and stack

// Task 1 : Sum all numbers till the given one

// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
// }
// console.log(sumTo(100));



// Task 2 : Calculate factorial

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5)); // 120



// Chapter : Variale scope, closures

// Task 1 : Does a function pickup latest changes?

// let name = "John";

// function sayHi() {
//     console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // Answer : Pete



// Task 2 : Which variables are available?

// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       console.log(name);
//     };
// }

// let name = "John";

// let work = makeWorker();

// work(); // Answer : Pete



// Task 3 : Are counters independent?

// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1
  
// console.log( counter2() ); // Answer : 0
// console.log( counter2() ); // Answer : 1



// Chapter : Function object, NFE

// Task 1 : Scheduling: setTimeout and setInterval

// function printNumbers(from, to) {
//     let current = from;
  
//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
// }

// printNumbers(5, 10);


// function printNumbers(from, to) {
//     let current = from;
  
//     setTimeout(function go() {
//       console.log(current);
//       if (current < to) {
//         setTimeout(go, 1000);
//       }
//       current++;
//     }, 1000);
// }

// printNumbers(5, 10);



// Task 2 : What will setTimeout show?

// let i = 0;

// setTimeout(() => console.log(i), 100);

// for(let j = 0; j < 100000000; j++) {
//   i++;
// } Result : 100000000



// Chapter : Function Binding

// Task 1 : Bound function as a method

// function f() {
//     console.log(this); // null
// }

// let user = {
//     g: f.bind(null)
// };

// user.g(); // Answer : null



// Task 2 : Second bind

// function f() {
//     console.log(this.name);
// }
  
// f = f.bind( {name: "John"} ).bind( {name: "Pete"} );
  
// f(); // Answer : John



// Task 3 : Function property after bind

// function sayHi() {
//     console.log( this.name );
// }
// sayHi.test = 5;
  
// let bound = sayHi.bind({
//     name: "John"
// });
  
// console.log(bound.test); // undefined



// Chapter : Decorators and forwarding, call/apply

// Task 1 : Delaying decorator

// function delay(f, ms) {

//     return function() {
//         setTimeout(() => f.apply(this, arguments), ms);
//     };
  
// }

// let f1000 = delay(console.log, 1000);

// f1000("test");



// Task 2 : Spy decorator

// function spy(func) {

//     function wrapper(...args) {
//       wrapper.calls.push(args);
//       return func.apply(this, args);
//     }
  
//     wrapper.calls = [];
  
//     return wrapper;
// }


// Class : basic syntax

// Task : Rewrite to class

// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     }
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
//   }
  
  
// let clock = new Clock({template: 'h:m:s'});
// clock.start();



// Chapter : Class inheritance 

// Task 1 : Error creating an instance

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit.name);



// Chapter: Promise

// Task 1 : Re-solve a promise ?

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
// });

// promise.then(console.log); // Output is 1



// Task 2 : Delay with a promise

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// delay(3000).then(() => console.log('runs after 3 seconds'));



// Chapter : Promises, Async/Await


// Task 1 : Rewrite using async/await


// async function loadJson(url) {
//     let response = await fetch(url);

//     if(response.status == 200) {
//         let json = await response.json()
//         return json
//     }

//     throw new Error(response.status)
// }

// loadJson('https://javascript.info/no-such-user.json')
// .catch(console.log);


// Task 2 : Call async from non-async


// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
// }
  
// function f() {
//     wait().then(response => console.log(response))
// }
// f()