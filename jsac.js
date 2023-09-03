// +++++++++++++++++++++++++++++++++++++++++++++
// 08
// --Javascript Engine--

// function jsengine(code) {
//     return code.split(/\s+/);
// };

// console.log(jsengine('var a = 5'));

// +++++++++++++++++++++++++++++++++++++++++++++
// 11
// --Interpreter vs Compiler--
// function someCalculation(x, y) {
//     return x + y;
// };

// for (let i = 0; i < 1000; i++) {
//     someCalculation(5, 4);
//     console.log(i);
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 18
// --Stack Overflow--

// Recursion
// function inception() {
//     inception();
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 18
// --Memory Leaks--

// Global Variable
// Event Listeners
// setInterval

// +++++++++++++++++++++++++++++++++++++++++++++
// 25
// --Fix This Code--

//fill array with 60000 elements
// const list = new Array(60000).join('1.1').split('.');
// function removeItemsFromList() {
//     var item = list.pop();
//     if (item) {
//         removeItemsFromList();
//     }
// };
// removeItemsFromList();

// ---------------------------------

// const list = new Array(60000).join('1.1').split('.');
// function removeItemsFromList() {
//     let item = list.pop();
//     if (item) {
//         setTimeout(removeItemsFromList, 0);
//     }
// };
// removeItemsFromList();
// console.log(list);

// +++++++++++++++++++++++++++++++++++++++++++++
// 26
// --Section Review--

//1
// setTimeout(() => { console.log('1', 'is the loneliest number') }, 0)
// setTimeout(() => { console.log('2', 'can be as bad as one') }, 10)

// //2
// Promise.resolve('hi').then((data) => console.log('2', data))

// //3
// console.log('3', 'is a crowd')

// +++++++++++++++++++++++++++++++++++++++++++++
// 31
// --Execution Context--

// function printName() {
//     return 'Frenk Speck';
// };

// function findName() {
//     return printName();
// };

// function sayMyName() {
//     return findName();
// };

// console.log(sayMyName());

// +++++++++++++++++++++++++++++++++++++++++++++
// 32
// --Lexical Environment--

// function printName() {
//     return 'Frenk Speck';
// };

// function findName() {
//     return printName();
// };

// function sayMyName() {
//     return findName();
// };

// console.log(window.sayMyName());
// console.log(window.findName());
// console.log(window.printName());

// in javascript our 'lexical scope' (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope)

// +++++++++++++++++++++++++++++++++++++++++++++
// 33
// --Hoisting--

// console.log('1---------');
// var teddy = undefined;
// console.log(teddy);

// var teddy = 'bear';

// // function expression
// var sing2 = function () {
//     console.log('uu la la la la')
// };
// console.log(sing2());

// // function declaration
// function sing() {
//     console.log('oo la la la la');
// }

// +++++++++++++++++++++++++++++++++++++++++++++
// 34
// --Exercise Hoisting--

// var one = 1;
// var one = 2;
// console.log(one); // 2

// ---------------------------------

// a(); // bye

// function a() {
//     console.log('hi');
// };

// function a() {
//     console.log('bye');
// }; // bye

// ---------------------------------
// 35
// --Exercise Hoisting 2--

// const favouriteFood = "grapes";

// const foodThoughts = function () {
//     console.log("Original favourite food: " + favouriteFood);

//     const favouriteFood = "sushi";

//     console.log("New favourite food: " + favouriteFood);
// };

// foodThoughts();
// // ztm.js: 167 Uncaught ReferenceError: Cannot access 'favouriteFood' before initialization
// //     at foodThoughts(ztm.js: 167: 47)
// //     at ztm.js: 174: 1

// P.s. when you change the 'var' to 'const' technically there is still hoisting happening. That is why you get a reference error instead of looking at the global favouriteFood variable. let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So the engine says, "ya there is a favouriteFood variable here but you can't access it yet"

// 36
// --Exercise Hoisting 3--

// function bigBrother() {
//     function littleBrother() {
//         return 'it is me!';
//     }
//     return littleBrother();
//     function littleBrother() {
//         return 'no me!';
//     }
// }

// // // Before running this code, what do you think the output is?
// console.log(bigBrother()); // no me!

// +++++++++++++++++++++++++++++++++++++++++++++
// 37
// --Function Invocation--

// // Function Expression
// var canada = function () {
//     console.log("cold");
// };
// // Arrow Function
// var serbia = () => {
//     console.log("nice");
// };
// // Function Declaration
// function india() {
//     console.log("warm");
// };

// // Function Invocation / Call / Execution
// canada();
// serbia();
// india();

// function marry(person1, person2) {
//     console.log("arguments: ", arguments);
//     return console.log(`${person1} is now married to ${person2}`);
// };

// marry('Tim', 'Tina');
// console.log(arguments);

// +++++++++++++++++++++++++++++++++++++++++++++
// 38
// --Arguments Keyword--

// function marry(person1, person2) {
//     console.log("arguments: ", arguments);
//     console.log(Array.from(arguments));
//     return console.log(`${person1} is now married to ${person2}`);
// };

// marry('Tim', 'Tina');

// // Spread Operator
// function marry2(...args) {
//     console.log("arguments: ", args);
//     console.log(Array.from(arguments));
//     return console.log(`${args[0]} is now married to ${args[1]}`);
// };

// marry2('Tim', 'Tina');

// function india() {
//     console.log(arguments);
//     console.log("warm");
// };

// india();

// +++++++++++++++++++++++++++++++++++++++++++++
// 39
// --Variable Environment--

// function two() {
//     var isValid; // undefined
// };

// function one() {
//     var isValid = true; // local environment
//     two(); // new Execution Context
// };

// var isValid = false;
// one();

// // two(); --undefined
// // one(); --true
// // global(); --false

// console.log(isValid); // false

// -------------------------
//Variable Environement
// function two() {
//     var isValid; // 5. isValid is undefined in this execution context.
// }

// function one() {
//     var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
//     two(); // 4. New execution context created.
// }

// var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
// one() // 2. New execution context is created on top of the stack.

// +++++++++++++++++++++++++++++++++++++++++++++
// 40
// --Scope Chain--

// var x = 'x';

// function findName() {
//     console.log(x);
//     var b = 'b';
//     return printName();
// };

// function printName() {
//     var c = 'c';
//     return 'Frenk Speck';
// };

// function sayMyName() {
//     var a = 'a';
//     return findName();
// };

// console.log(sayMyName());

// **Lexical Scope == Static Scope

// -------------------------
// Global Scope
// function sayMyName() {
//     var a = 'a';
//     return function findName() {
//         var b = 'b';
//         // console.log(c); // is not defined
//         console.log(a);
//         return function printName() {
//             var c = 'c';
//             console.log(b);
//             console.log(a);
//             return console.log('Frenk Speck');
//         };
//     };
// };

// sayMyName();
// sayMyName()();
// sayMyName()()();

// +++++++++++++++++++++++++++++++++++++++++++++
// 41
// --[[scope]]--

// Lexical Environment === [[scope]]

// +++++++++++++++++++++++++++++++++++++++++++++
// 42
// --JS is Weird--

// Weird Javascript #1 - it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.

// 'use strict'
// function weird() {
//     var height = 50;
//     return height;
// };

// var heyhey = function doodle() {
//     return 'heyhey';
// };

// heyhey();
// doodle(); // Error! because it is enclosed in its own scope

// console.log(heyhey());
// console.log(doodle());

// +++++++++++++++++++++++++++++++++++++++++++++
// 43
// --Function Scope vs Block Scope--

// if (5 > 4) {
//     const secret = '12345';
// };

// console.log(secret);

// function a() {
//     var secret2 = '12345';
// };

// console.log(secret2);

// +++++++++++++++++++++++++++++++++++++++++++++
// 44
// --Exercise Block Scope--

// function loop() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     };
//     console.log('final', i);
// };

// loop();

// function loop2() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     };
//     console.log('final', i);
// };

// loop2();

// +++++++++++++++++++++++++++++++++++++++++++++
// 45
// --Global Variables--

// +++++++++++++++++++++++++++++++++++++++++++++
// 46
// --IIFE --Immediately Invoked Function Expression--
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// (function () {
//     var a = 1;
// })();

// console.log(a);
// ......
// inline script html

// +++++++++++++++++++++++++++++++++++++++++++++
// 47
// --'this' Keyword and 'use strict'--
// 'this' is the object that the function is a property of
// someObject.someFunction(this);

// function a() {
//     console.log(this);
// };
// a();

// function b() {
//     'use strict'
//     console.log(this);
// };
// b();

// "THIS"
// 1: Gives methods access to their object
// 2: Execute same code for multiple objects

// 1:
// const obj = {
//     name: 'Billy',
//     sing: function () {
//         return 'lalalala ' + this.name;
//     },
//     singAgain() {
//         return this.sing() + '!';
//     }
// };
// console.log(obj.sing());
// console.log(obj.singAgain());

// 2:
// function importantPerson() {
//     console.log(this.name + '!');
// };

// var name = 'Sunny';

// const obj1 = {
//     name: 'Cassy',
//     importantPerson: importantPerson
// };
// const obj2 = {
//     name: 'Jacob',
//     importantPerson: importantPerson
// };

// console.log(name);
// importantPerson();
// console.log(obj1.importantPerson());
// console.log(obj2.importantPerson());

// +++++++++++++++++++++++++++++++++++++++++++++
// 48
// --Exercise Dynamic Scope vs Lexical Scope--

// const a = function () {
//     console.log('a', this);
//     const b = function () {
//         console.log('b', this);
//         const c = {
//             hi: function () {
//                 console.log('c', this);
//             }
//         }
//         c.hi();
//     }
//     b();
// };

// console.log(a());

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = function () {
//             console.log('b', this);// this points to window!
//         }
//         anotherFunc();
//     }
// };

// In javascript our -lexical scope- (avilable data + variables where the function was defined), determines our available variables. Not where the function is called -dynamic scope-. 'this' Keyword is dynamically scoped.

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = () => {
//             console.log('b', this);
//         }
//         anotherFunc();
//     }
// };

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = () => {
//             console.log('b', this);
//         }
//         return anotherFunc.bind(this);
//     }
// };

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var self = this
//         var anotherFunc = () => {
//             console.log('b', self);
//         }
//         return anotherFunc;
//     }
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 49
// --call(), apply(), bind()--

// function a() {
//     console.log('Hi');
// };

// a.call();
// a.apply();

// const wizard = {
//     name: 'Merlin',
//     health: 50,
//     heal(num1, num2) {
//         return this.health += num1 + num2;
//     }
// };

// console.log(wizard.heal());

// const archer = {
//     name: 'Robin Hood',
//     health: 30
// };

// console.log('1', archer);
// wizard.heal.call(archer, 50, 30);
// wizard.heal.apply(archer, [50, 30]);
// wizard.heal.bind(archer, 50, 30);
// console.log('2', archer);

// const healArcher = wizard.heal.bind(archer, 50, 30);
// console.log('3', healArcher());

// call() & apply() are useful for borrowing methods from an object
// bind() is useful for to call functions later on with a certain context or certain 'this' keyword

// +++++++++++++++++++++++++++++++++++++++++++++
// 50
// --Exercise call(), apply()--

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// const array = [1, 2, 3];
// function getMaxNumber(arr) {
//     // return Math.max.apply(null, arr);

//     // return Math.max.apply(this, arr)

//     // let result = 0;
//     // for (const num of arr) {
//     //     if (num > result) {
//     //         result = num;
//     //     }
//     // }
//     // return result;

//     // const val = arr.reduce(function (acc, curr) {
//     //     if (curr > acc) acc = curr;
//     //     return acc;
//     // }, 0);
//     // return val

//     // return array[arr.length - 1]

//     return Math.max(...arr);

// }
// // const getMaxNumber = arr => console.log(Math.max(...arr));
// console.log(getMaxNumber(array)); // should return 3

// function myFunction(x, y, z) { }
// const args = [0, 1, 2];
// myFunction.apply(null, args);

// function myFunction(x, y, z) { }
// const args = [0, 1, 2];
// myFunction(...args);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// +++++++++++++++++++++++++++++++++++++++++++++
// 51
// --bind() and currying--

// // function currying
// function multiply(a, b) {
//     return a * b;
// };

// var multipleByTwo = multiply.bind(this, 2);
// console.log(multipleByTwo(4));

// var multipleByThree = multiply.bind(this, 3);
// console.log(multipleByThree(4));

// +++++++++++++++++++++++++++++++++++++++++++++
// 52
// --Exercise 'this' Keyword--

// var b = {
//     name: 'jay',
//     say() {
//         console.log(this);
//     }
// };

// var c = {
//     name: 'kate',
//     say() {
//         return function () {
//             console.log(this);
//         }
//     }
// };

// var d = {
//     name: 'mark',
//     say() {
//         return () => console.log(this);
//     }
// };

// b.say();
// c.say()();
// d.say()();

// +++++++++++++++++++++++++++++++++++++++++++++
// 53
// --Exercise 'this' Keyword 2--

// const character = {
//     name: 'Simon',
//     getCharacter() {
//         return this.name;
//     }
// };

// console.log(character.getCharacter());



//How Would you fix this?
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);

// const giveMeTheCharacterNOW = () => character.getCharacter();

//this should return 'Simon' bud doesn't
// console.log('?', giveMeTheCharacterNOW());



// or

// const giveMeTheCharacterNOW = character.getCharacter;

// console.log('?', giveMeTheCharacterNOW.bind(character)());

// +++++++++++++++++++++++++++++++++++++++++++++
// 57
// --Javascript Types--

// // --primitive types
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof 'me');
// // UNDEFINED is an absence of definition
// console.log(typeof undefined);
// // NULL is an absence of value
// console.log(typeof null); // mistake
// console.log(typeof Symbol('me'));
// // --non primitive types
// console.log(typeof {});
// console.log(typeof []); // object
// console.log(typeof function () { }); // object

// function a() {
//     return 5;
// };

// a.hi = 'hihihihihi';
// console.log(a.hi);

// Standard built -in objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// console.log(true.toString());
// console.log(Boolean(true).toString());
// console.log(String('true').toString());

// console.log(typeof Math);
// console.log(typeof Infinity);

// +++++++++++++++++++++++++++++++++++++++++++++
// 58
// --Array.isArray()--

// var array = [1, 2, 3];
// var array2 = ['1', '2', '3'];
// var array3 = {
//     0: 1,
//     1: 2,
//     2: 3
// };
// var array4 = {
//     0: '1',
//     1: '2',
//     2: '3'
// };

// console.log(typeof array);
// console.log(typeof array2);
// console.log(typeof array3);
// console.log(typeof array4);

// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray({ 0: 1, 1: 2, 2: 3 }));

// +++++++++++++++++++++++++++++++++++++++++++++
// 59
// --Pass By Value vs Pass By Reference--

// var a = 5;
// var b = a;
// b++;
// console.log(a);
// console.log(b);

// let obj1 = {
//     username: 'Teo',
//     password: '123'
// };
// let obj2 = obj1;
// obj2.password = '456';

// console.log(obj1);
// console.log(obj2);

// var c = [1, 2, 3, 4, 5];
// var d = c;
// d.push(6, 7, 8, 9, 0)
// console.log(c);
// console.log(d);

// var c = [1, 2, 3, 4, 5];
// var d = [].concat(c);
// d.push(6, 7, 8, 9, 0)
// console.log(c);
// console.log(d);

// let obj3 = { a: 'a', b: 'b', c: 'c' };
// // let obj4 = obj3;
// let clone = Object.assign({}, obj3);
// let clone2 = { ...obj3 };
// obj3.c = 5;

// console.log(obj3);
// console.log(clone);
// console.log(clone2);

// let obj5 = {
//     a: 'a',
//     b: 'b',
//     c: {
//         deep: 'try and copy me'
//     }
// };

// let clone3 = Object.assign({}, obj5);
// let clone4 = { ...obj5 };
// let superClone = JSON.parse(JSON.stringify(obj5));

// obj5.c.deep = 'hahahaha'; // shallow clone

// console.log(obj5);
// console.log(clone3);
// console.log(clone4);
// console.log(superClone);

// +++++++++++++++++++++++++++++++++++++++++++++
// 60
// --Exercise: Compare Objects--

// var user1 = { name: "nerd", org: "dev" };
// var user2 = { name: "nerd", org: "dev" };

// var eq = JSON.stringify(user1) == JSON.stringify(user2);

// console.log(eq);

// +++++++++++++++++++++++++++++++++++++++++++++
// 61
// --Exercise: Pass By Reference--

// const number = 100
// const string = "Jay"
// let obj1 = {
//     value: "a"
// }
// let obj2 = {
//     value: "b"
// }
// let obj3 = obj2;

// function change(number, string, obj1, obj2) {
//     number = number * 10;
//     string = "Pete";
//     obj1 = obj2;
//     obj2.value = "c";
// }

// change(number, string, obj1, obj2);

// // //Guess the outputs here before you run the code:
// console.log(number);
// console.log(string);
// console.log(obj1.value);
// console.log(obj2.value);
// console.log(obj3.value);

// ---------------------

// let obj1 = {
//     value: "a"
// }

// let obj2 = {
//     value: "b"
// }

// function change(x, y) {
//     x = y;
//     y.value = "c";
// }

// change(obj1, obj2);

// console.log(obj1.value);
// console.log(obj2.value);

// +++++++++++++++++++++++++++++++++++++++++++++
// 62
// --structuredClone()--

// https://web.dev/structured-clone/

// +++++++++++++++++++++++++++++++++++++++++++++
// 63
// --Type Coercion--
// https://dorey.github.io/JavaScript-Equality-Table/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// console.log(1 == '1');
// console.log(-0 === +0);
// console.log(Object.is(-0, +0));
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));

// if (1) {
//     console.log(5);
// };

// if (0) {
//     console.log(5);
// };

// if (true) {
//     console.log(5);
// };

// if (false) {
//     console.log(5);
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 64
// --Exercise: Type Coercion--

// console.log('1', false == "");
// console.log('2', false == []);
// console.log('3', false == {});
// console.log('4', "" == 0);
// console.log('5', "" == []);
// console.log('6', "" == {});
// console.log('7', 0 == []);
// console.log('8', 0 == {});
// console.log('9', 0 == null);

// +++++++++++++++++++++++++++++++++++++++++++++
// 66
// --JTS: Dynamic vs Static Typing--
// +++++++++++++++++++++++++++++++++++++++++++++
// 67
// --JTS: Weakly vs Strongly Typed--
// +++++++++++++++++++++++++++++++++++++++++++++
// 68
// --JTS: Static Typing In JavaScript--

// https://flow.org/

// https://www.typescriptlang.org/

// https://elm-lang.org/

// https://reasonml.github.io/

// https://insights.stackoverflow.com/survey

// +++++++++++++++++++++++++++++++++++++++++++++
// 70
// --Functions are Objects--

// function one() {
//     return 1;
// };
// console.log(one());

// // Method is a function inside of an oject
// // const obj = {
// //     two: function () {
// //         return 2;
// //     }
// // };
// // or:
// const obj = {
//     two() {
//         return 2;
//     }
// };
// console.log(obj.two());
// // or:
// function three() {
//     return 3;
// };
// console.log(three.call());
// // or:
// // Function constructor
// // const four = new Function('return 4');
// // console.log(four());
// const four = new Function('num', 'return num');
// console.log(four(4));

// function wooohooo() {
//     console.log('wooohooo')
// };

// wooohooo.yell = 'ahhhhhhh';

// // Callable object
// const specialObj = {
//     yell: 'ahhhhhhhh',
//     name: 'wooohooo',
//     (): console.log('wooohooo')
// };

// function wooohooo() {
//     console.log('wooohooo')
// };

// console.log(wooohooo.name);

// +++++++++++++++++++++++++++++++++++++++++++++
// 71
// --First Class Citizens--

// // 1
// var stuff = function () { };
// // 2
// function a(fn) {
//     fn();
// };
// a(function () { console.log('hi there!') });
// // 3+
// function b() {
//     return function c() { console.log('bye') };
// };

// console.log(b());
// console.log(b()());

// var d = b();
// console.log(d());

// Functions are DATA

// +++++++++++++++++++++++++++++++++++++++++++++
// 72
// --Extra Bits: Functions--

// Bad
// for (let i = 0; i < 5; i++) {
//     function a() {

//     }
//     a();
// };
// // Good
// function a() {

// };
// for (let i = 0; i < 5; i++) {

//     a();
// };

// ---------------------------
// Bad
// function x() {
//     return param;
// };
// console.log(x());
// Good
// function x(param = 6) {
//     return param;
// };
// console.log(x());

// +++++++++++++++++++++++++++++++++++++++++++++
// 73
// --Higher Order Functions--

// function letAdamLogin() {
//     let array = [];
//     for (let i = 0; i < 10000000; i++) {
//         array.push(i);
//     };
//     return 'Access Granted to Adam';
// };
// function letEvaLogin() {
//     let array = [];
//     for (let i = 0; i < 100000000; i++) {
//         array.push(i);
//     };
//     return 'Access Granted to Eva';
// };
// console.log(letAdamLogin());
// console.log(letEvaLogin());

// -----------------------------

// function letUserLogin(user) {
//     let array = [];
//     for (let i = 0; i < 10000000; i++) {
//         array.push(i);
//     };
//     return 'Access Granted to ' + user;
// };

// console.log(letUserLogin('Adam'));

// -----------------------------

// const giveAccessTo = (name) => 'Access Granted to ' + name;

// function letUserLogin(user) {
//     let array = [];
//     for (let i = 0; i < 10000000; i++) {
//         array.push(i);
//     }
//     return giveAccessTo(user);
// };

// console.log(letUserLogin('Adam'));

// -----------------------------

// const giveAccessTo = (name) => 'Access Granted to ' + name;

// function letUserLogin(user) {
//     let array = [];
//     for (let i = 0; i < 10000000; i++) {
//         array.push(i);
//     }
//     return giveAccessTo(user);
// };

// function letAdminLogin(admin) {
//     let array = [];
//     for (let i = 0; i < 50000000; i++) {
//         array.push(i);
//     }
//     return giveAccessTo(admin);
// };

// console.log(letUserLogin('Adam'));
// console.log(letAdminLogin('Admin'));

// -----------------------------

// const giveAccessTo = (name) => 'Access Granted to ' + name;

// function authenticate(verify) {
//     let array = [];
//     for (let i = 0; i < verify; i++) {
//         array.push(i);
//     }
//     return true;
// };

// function letPerson(person, fn) {
//     if (person.level === 'admin') {
//         fn(100000000);
//     } else if (person.level === 'user') {
//         fn(50000000);
//     }
//     return giveAccessTo(person.name);
// };

// console.log(letPerson({ level: 'user', name: 'Jerry' }, authenticate));

// console.warn(letPerson({ level: 'admin', name: 'Sally' }, authenticate));

// -----------------------------

// const giveAccessTo = (name) => 'Access Granted to ' + name;

// function authenticate(verify) {
//     let array = [];
//     for (let i = 0; i < verify; i++) {
//         array.push(i);
//     }
//     return giveAccessTo(person.name);
// };

// function sing(singingPerson) {
//     return 'La la la laaaa my name is ' + singingPerson.name;
// };

// function letPerson(person, fn) {
//     if (person.level === 'admin') {
//         return fn(person);
//     } else if (person.level === 'user') {
//         return fn(person);
//     }
// };
// console.log(letPerson({ level: 'user', name: 'Jerry' }, sing));
// console.warn(letPerson({ level: 'admin', name: 'Sally' }, sing));

// +++++++++++++++++++++++++++++++++++++++++++++
// 74
// --Exercise Higher Order Functions--

// const multiplyBy = function (num1) {
//     return function (num2) {
//         return num1 * num2;
//     }
// };
// // arrow
// const multiplyBy = (num1) => (num2) => num1 * num2;

// const multiplyByTwo = multiplyBy(2);
// const multiplyByFive = multiplyBy(5);
// console.log(multiplyByTwo(4));
// console.log(multiplyByFive(10));
// console.log(multiplyBy(10)(6));

// +++++++++++++++++++++++++++++++++++++++++++++
// 75
// --Closures--

// function a() {
//     let grandpa = 'grandpa';
//     return function b() {
//         let father = 'father';
//         return function c() {
//             let son = 'son';
//             return `${grandpa} > ${father} > ${son}`;
//         }
//     }
// };
// console.log(a());
// console.log(a()());
// console.log(a()()());

// ------------

// function boo(string) {
//     return function (name) {
//         return function (name2) {
//             console.log(`${string}${name}${name2}`);
//         }
//     }
// };

// arrow
// const boo = (string) => (name) => (name2) =>
//     console.log(`${string} ${name} ${name2}`);

// boo('Bad')('Mother')('Fucker');

// ------------

// const booString = boo('hi');
// // after 5 years
// const booStringName = booString();
// console.log(booStringName());

// +++++++++++++++++++++++++++++++++++++++++++++
// 76
// --Exercise: Closures--

// function callMeMaybe() {
//     const callMe = 'Hi! I am now here';
//     setTimeout(function () {
//         console.log(callMe);
//     }, 4000);
// };

// function callMeMaybe() {
//     setTimeout(function () {
//         console.log(callMe);
//     }, 4000);
//     const callMe = 'Hi! I am now here';
// };

// console.log(callMeMaybe());

// +++++++++++++++++++++++++++++++++++++++++++++
// 77
// --Closures and Memory--

// Memory efficient
// function heavyDuty() {
//     const bigArray = new Array(7000).fill(':)');
//     return bigArray;
// };
// console.log(heavyDuty());
// -------------------------------
// function heavyDuty(index) {
//     const bigArray = new Array(7000).fill(':)');
//     console.log('created!');
//     return bigArray[index];
// };
// console.log(heavyDuty(688));
// console.log(heavyDuty(688));
// console.log(heavyDuty(688));
// console.log(heavyDuty(688));
// // -------------------------------
// const getHeavyDuty = heavyDuty2();

// console.log(getHeavyDuty(688));
// console.log(getHeavyDuty(700));
// console.log(getHeavyDuty(800));
// console.log(getHeavyDuty(900));

// function heavyDuty2() {
//     const bigArray = new Array(7000).fill(':D');
//     console.log('created again!');
//     return function (index) {
//         bigArray[index];
//     }
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 78
// --Closures and Encapsulation--

// Encapsulation
// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return '💥';
//     }

//     setInterval(passTime, 1000);
//     return {
//         launch: launch,
//         totalPeaceTime: totalPeaceTime
//     }
// };

// const ohNo = makeNuclearButton();
// ohNo.totalPeaceTime();

// console.log(ohNo.totalPeaceTime()); //dev tools
// console.log(ohNo.launch()); //dev tools

// -----------

// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return '💥';
//     }

//     setInterval(passTime, 1000);
//     return {
//         totalPeaceTime: totalPeaceTime
//     }
// };

// const ohNo = makeNuclearButton();
// ohNo.totalPeaceTime();

// console.log(ohNo.totalPeaceTime()); //dev tools
// console.log(ohNo.launch()); //dev tools // encapsulated

// +++++++++++++++++++++++++++++++++++++++++++++
// 79
// --Exercise: Closures 2--

// Make it so that the initialize function can only be called once!
// let view;
// function initialize() {
//     view = '🏔';
//     console.log('view has been set!');
// };

// initialize();
// initialize();
// initialize();

// console.log(view);

// +++++++++++++++++++++++++++++++++++++++++++++
// 80
// --Solution: Closures 2--

// Make it so that the initialize function can only be called once!
// let view;
// function initialize() {
//     let called = 0;
//     return function () {
//         if (called > 0) {
//             return;
//         } else {
//             view = '🏔';
//             called++;
//             console.log('view has been set!');
//         }
//     }
// };

// const startOnce = initialize();

// startOnce();
// startOnce();
// startOnce();
// console.log(view);
// -------------------------------------
// let view;
// const tryInitializeOnce = initialize();

// function initialize() {
//     view = '🏔';
//     console.log('view has been set!');
// };

// tryInitializeOnce;
// tryInitializeOnce;
// tryInitializeOnce;
// console.log(view);
// -------------------------------------
// let view;

// function initialize() {

//     const start = () => {
//         if (typeof view === 'undefined') {
//             view = '🏔';
//             console.log('View has been set');
//         }
//     }

//     start();
// };

// initialize();
// initialize();
// initialize();
// console.log(view);
// -------------------------------------
// let view;
// function initialize() {
//     return (function checkInit() {
//         let res = (view === '🏔') ?
//             false :
//             (() => {
//                 view = '🏔';
//                 console.log('view has been set!');
//                 return true;
//             })()
//         return res;
//     })();
// };
// initialize();
// initialize();
// initialize();
// console.log(view);

// +++++++++++++++++++++++++++++++++++++++++++++
// 81
// --Exercise Closures 3--

// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//     setTimeout(function () {
//         console.log('I am at index ' + i)
//     }, 3000)
// }
// ---------------------------------
// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log('I am at index ', index + 1)
//         }, i * 3000)
//     })(i);
// };
// ---------------------------------
// const array = [1, 2, 3, 4]
// for (var i = 0; i < array.length; i++) {
//     let index = i + 1;
//     setTimeout(function () {
//         console.log('I am at index ' + index);
//     }, 3000);
// };
// +++++++++++++++++++++++++++++++++++++++++++++
// 82
// --Solution Closures 3--

// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//     setTimeout(function () {
//         console.log('I am at index ' + i)
//     }, 3000)
// }

// I
// const array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//     setTimeout(function () {
//         console.log('I am at index ' + array[i]);
//     }, 3000);
// };

// II
// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//     (function (closureI) {
//         setTimeout(function () {
//             console.log('I am at index ' + array[closureI]);
//         }, 3000);
//     })(i);
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 84
// --Prototypal Inheritance--

// const array = [""];
// console.log(array.__proto__);
// console.log(array.__proto__.__proto__);
// console.log(array.toString()); // console

// function a() { };
// console.log(a.__proto__);
// console.log(a.__proto__.__proto__);

// const obj1 = {};
// console.log(obj1.__proto__);

// +++++++++++++++++++++++++++++++++++++++++++++
// 85
// --Prototypal Inheritance 2--

// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight() {
//         return 5;
//     },
//     sing() {
//         if (this.fire) {
//             return `I am ${this.name}, the breather of fire`;
//         }
//     }
// };

// console.log(dragon.sing());
// console.log(dragon.fight());

// let lizard = {
//     name: 'Kiki',
//     fight() {
//         return 1;
//     }
// };

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());
// lizard.__proto__ = dragon;
// console.log(lizard.sing());
// console.log(lizard.fire);
// console.log(lizard.fight());

// console.log(dragon.isPrototypeOf(lizard));
// console.log(lizard.isPrototypeOf(dragon));

// +++++++++++++++++++++++++++++++++++++++++++++
// 86
// --Prototypal Inheritance 3--

// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight() {
//         return 5;
//     },
//     sing() {
//         if (this.fire) {
//             return `I am ${this.name}, the breather of fire`;
//         }
//     }
// };

// let lizard = {
//     name: 'Kiki',
//     fight() {
//         return 1;
//     }
// };

// lizard.__proto__ = dragon;
// for (let prop in lizard) {
//     if (lizard.hasOwnProperty(prop)) {
//         console.log(prop);
//     }
// };

// const obj = {};
// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__); //null - null pointer

// +++++++++++++++++++++++++++++++++++++++++++++
// 87
// --Prototypal Inheritance 4--

// const obj = { name: 'Sally' };
// console.log(obj.hasOwnProperty('name'));

// function a() { };
// console.log(a.hasOwnProperty('call'));
// console.log(a.hasOwnProperty('apply'));
// console.log(a.hasOwnProperty('bind'));

// console.log(a.hasOwnProperty('name'));
// console.log(a.name);

// function multiplyBy5(num) {
//     return num * 5;
// };
// console.log(multiplyBy5.__proto__);
// console.log(Function.prototype);
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__);

// const array = [];
// console.log(array.__proto__.hasOwnProperty('map'));
// console.log(Array.prototype); //same as:
// console.log(array.__proto__);
// //Every Prototype chain links to a prototype object{}

// +++++++++++++++++++++++++++++++++++++++++++++
// 88
// --Prototypal Inheritance 5--

// // Never use: __proto__

// let human = {
//     mortal: true
// };

// let socrates = Object.create(human);
// socrates.age = 45;

// console.log(socrates);
// console.log(socrates.mortal);
// console.log(human.isPrototypeOf(socrates));

// +++++++++++++++++++++++++++++++++++++++++++++
// 89
// --Prototypal Inheritance 6--

// Only functions have the prototype property
// Constructors

// function multiplyBy5(num) {
//     return num * 5;
// };
// console.log(multiplyBy5.prototype);
// console.log(multiplyBy5.__proto__); // same as:
// console.log(Function.prototype);
// console.log(multiplyBy5.__proto__.__proto__);

// console.log(Object.prototype);
// console.log(multiplyBy5.__proto__.__proto__.__proto__);
// console.log(typeof Object);
// console.log(typeof {});

// // Every function has a prototype property

// const obj = {};
// const arr = [];
// console.log(obj.prototype);
// console.log(arr.prototype);
// console.log('sting'.prototype);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// The Object constructor creates an object wrapper

// const obj = {};
// console.log(typeof {});
// console.log(obj.prototype);
// const arr = [];
// console.log(typeof []);
// console.log(arr.prototype);
// const strng = '';
// console.log(typeof '');
// console.log(strng.prototype);
// console.log(String.prototype);

// +++++++++++++++++++++++++++++++++++++++++++++
// 90
// --Exercise: Prototypal Inheritance--

// //Exercise - extend the functionality of a built in object

// //#1
// //Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// new Date('1900-10-10').lastYear()
// //'1899'


// //#Bonus
// // Mofify .map() to print '🗺' at the end of each item.
// console.log([1, 2, 3].map())
// //1🗺, 2🗺, 3🗺

// +++++++++++++++++++++++++++++++++++++++++++++
// 91
// --Solution Prototypal Inheritance--

// //Array.map() => to print '🗺'
// Array.prototype.map = function () { // what happens with arrow function here?
//     arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push((this[i] + '🗺'));
//     }
//     return arr;
// }
// console.log([1, 2, 3].map())

// //Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
// Date.prototype.lastYear = function () {
//     return this.getFullYear() - 1;
// }

// new Date('1900-10-10').lastYear()
// // don't worry if you didn't get this... we will expand on this later.
// -------------------------------------------

// Date.prototype.lastYear = function () {
//     console.log(this);
//     return this.getFullYear() - 1;
// };

// console.log(new Date('1900-10-10').lastYear());

// // // -------

// Array.prototype.map = function () {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push((this[i] + '🗺'));
//     }
//     return arr;
// };

// console.log([1, 2, 3].map());

// +++++++++++++++++++++++++++++++++++++++++++++
// 92
// --Exercise: Prototypal Inheritance with 'this'--


// How would you be able to create your own.bind() method using call or apply

// Function.prototype.bind = function (whoIsCallingMe) {
//     let self = this;
//     return function () {
//         self.apply(whoIsCallingMe, arguments);
//     }
// };

// Function.prototype.bind = function (whoIsCallingMe) {
//     let self = this;
//     return () => self.apply(whoIsCallingMe, arguments);
// };
// -----------

// Function.prototype.bind = function (thisArg = this) {
//     return this.apply(thisArg, arguments)
// }
// obj1 = {
//     customer: 'Xander',
//     a() {
//         function x() {
//             return this.customer;
//         }
//         return x.bind(obj1)
//     }
// }
// console.log(obj1.a())

// -----------

// Function.prototype.bind = function (method) {
//     return this.apply(method);
// };

// -----------

// Function.prototype.bind = function (obj) {
//     return this.call(obj) + ' #'
// }

// -----------

// Function.prototype.bind = function (thisArg, ...args) {
//     return () => this.apply(thisArg, args)
// }

// -----------

// Function.prototype.bind = function (context, ...rest) {
//     const func = this;
//     return function (...notBindedArgs) {
//         return func.apply(context, [...rest, ...notBindedArgs].slice(0, func.length));
//     }
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 93
// --Section Review--

// +++++++++++++++++++++++++++++++++++++++++++++
// 94
// --Exercise: Imposter Syndrome--

// https://www.freecodecamp.org/news/what-is-imposter-syndrome-and-how-do-you-overcome-it/

// +++++++++++++++++++++++++++++++++++++++++++++
// 97
// --OOP Introduction--

// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight() {
//         return 5;
//     },
//     sing() {
//         if (this.fire) {
//             return `I am ${this.name}, the breather of fire`;
//         }
//     }
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 98
// --OOP1: Factory Functions--

// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon;
//     }
// };

// const elf2 = {
//     name: 'Sally',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon;
//     }
// };

// console.log(elf.attack());
// console.log(elf2.attack());
// ------------
// factory functions

// function createElf(name, weapon) {
//     return {
//         // name: name,
//         // weapon: weapon,
//         name,
//         weapon,
//         attack() {
//             return 'attack with ' + weapon;
//         }
//     }
// };

// const peter = createElf('Peter', 'stones');
// console.log(peter.attack());
// const sam = createElf('Sam', 'fire');
// console.log(sam.attack());

// +++++++++++++++++++++++++++++++++++++++++++++
// 99
// --OOP2: Object.create()--

// const elfFunctions = {
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// }

// function createElf(name, weapon) {
//     newElf = Object.create(elfFunctions);
//     // console.log(newElf);
//     // console.log(newElf.__proto__);
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf;
// };

// const peter = createElf('Peter', 'stones');
// console.log(peter.attack());

// const sam = createElf('Sam', 'fire');
// console.log(sam.attack());

// +++++++++++++++++++++++++++++++++++++++++++++
// 100
// --OOP3: Constructor Functions--

// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
// };

// Elf.prototype.attack = function () {
//     return 'attack with ' + this.weapon;
// };

// const peter = new Elf('Peter', 'stones');
// console.log(peter.attack());

// const sam = new Elf('Sam', 'fire');
// console.log(sam.attack());

// it comes later
// -------------------
// const Elf1 = new Function('name', 'weapon',
//     `this.name = name;
//     this.weapon = weapon;`);

// const sarah = new Elf1('Sarah', 'fireworks')

// +++++++++++++++++++++++++++++++++++++++++++++
// 101
// --More Constructor Functions--

// function Elf(name, weapon) {
//     // console.log('this', this);
//     this.name = name;
//     this.weapon = weapon;
//     // console.log('this', this);
// };

// Elf.prototype.attack = function () {
//     return 'attacks with ' + this.weapon;
// };

// // Elf.prototype.build = function () {
// //     const self = this;
// //     function building() {
// //         return self.name + ' builds a house';
// //     }
// //     // return building.bind(this);
// //     return building();
// // };

// const peter = new Elf('Peter', 'stones');
// console.log(peter.name, peter.attack());
// // console.log(peter.__proto__); // same as:
// // console.log(Elf.prototype);

// // console.log(peter.prototype);
// // console.log(peter.build());

// // const sam = new Elf('Sam', 'fire');
// // console.log(sam.attack());

// +++++++++++++++++++++++++++++++++++++++++++++
// 102
// --Funny Thing About JS...--

// var a = new Number(5);
// console.log(a);
// console.log(typeof a);

// var b = 5;
// console.log(b);
// console.log(typeof b);

// console.log(a == b);
// console.log(a === b);

// +++++++++++++++++++++++++++++++++++++++++++++
// 103
// --OOP4: ES6 Classes--

// //Constructor Functions
// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
// }

// Elf.prototype.attack = function () {
//     return 'atack with ' + this.weapon
// }
// const sam = new Elf('Sam', 'bow');
// const peter = new Elf('Peter', 'bow');
// sam.attack()

// //ES6 Class
// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'atack with ' + this.weapon;
//     }
// };

// const peter = new Elf('Peter', 'stones');
// console.log(peter.attack());
// console.log(peter instanceof Elf);

// const sam = new Elf('Sam', 'fire');
// console.log(sam.attack());
// -----------------

// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// }

// const fiona = new Elf('Fiona', 'ninja stars');
// console.log(fiona instanceof Elf) //
// const ben = new Elf('Ben', 'bow');
// console.log(fiona.attack())

// +++++++++++++++++++++++++++++++++++++++++++++
// 105
// --this - 4 Ways--

// // I: new binding this
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };
// const person1 = new Person('Xavier', 55);
// console.log(person1);

// // II: implicit binding
// const person = {
//     name: 'Karen',
//     age: 40,
//     hi() {
//         console.log('hi ' + this.name)
//     }
// };
// person.hi();

// // III: explicit binding
// const person3 = {
//     name: 'Karen',
//     age: 40,
//     hi: function () {
//         console.log('hi' + this.setTimeout)
//     }.bind(window)
// };
// person3.hi();

// // IV: arrow functions
// const person4 = {
//     name: 'Karen',
//     age: 40,
//     hi: function () {
//         var inner = () => {
//             console.log('hi ' + this.name);
//         }
//         return inner();
//     }
// };
// person4.hi();

// +++++++++++++++++++++++++++++++++++++++++++++
// 106
// --Inheritance--

// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'atack with ' + this.weapon;
//     }
// }

// const fiona = new Elf('Fiona', 'ninja stars');
// // console.log(fiona);
// // console.log(fiona instanceof Elf);

// const ogre = { ...fiona };
// console.log(ogre);
// console.log(ogre.__proto__);
// console.log(fiona.__proto__);
// console.log(fiona === ogre);
// console.log(ogre.attack());

// -----------------

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// };

// // subclassing
// class Elf extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon);
//         this.type = type;
//         // console.log(this);
//     }
// };

// const dolby = new Elf('Dolby', 'cloth', 'house');
// console.log(dolby);
// console.log(dolby.attack());

// class Ogre extends Character {
//     constructor(name, weapon, color) {
//         super(name, weapon);
//         this.color = color;
//     }
//     makeFort() {
//         return 'strongest fort in the world made';
//     }
// };

// const shrek = new Ogre('Shrek', 'club', 'green');
// console.log(shrek);
// console.log(shrek.makeFort());
// console.log(shrek.attack());

// +++++++++++++++++++++++++++++++++++++++++++++
// 107
// --Inheritance 2--

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// };

// // subclassing
// class Elf extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon);
//         this.type = type;
//         // console.log(this);
//     }
// };

// const dolby = new Elf('Dolby', 'cloth', 'house');
// console.log(dolby);
// console.log(dolby.attack());

// class Ogre extends Character {
//     constructor(name, weapon, color) {
//         super(name, weapon);
//         this.color = color;
//     }
//     makeFort() {
//         return 'strongest fort in the world made';
//     }
// };

// const shrek = new Ogre('Shrek', 'club', 'green');
// console.log(shrek);
// console.log(shrek.makeFort());
// console.log(shrek.attack());

// console.log(Ogre.isPrototypeOf(shrek));
// console.log(Ogre.prototype.isPrototypeOf(shrek));
// console.log(Character.prototype.isPrototypeOf(Ogre.prototype));

// console.log(dolby instanceof Elf);
// console.log(dolby instanceof Ogre);
// console.log(dolby instanceof Character);

// +++++++++++++++++++++++++++++++++++++++++++++
// 108
// --ES2022: Private Class Fields + Methods--

// class Employee {
//     #name = "Test"; // private field
//     setName(name) {
//         this.#name = name;
//     }
// }
// const emp = new Employee();
// emp.#name = 'New'; // error
// emp.setName('New'); // ok


// class Employee {
//     #name = "Test";
//     constructor(name) {
//         this.#setName(name) // ok
//     }
//     #setName(name) { // Private method
//         this.#name = name;
//     }
// }
// const emp = new Employee('New'); // ok
// emp.#setName('New'); // error

// +++++++++++++++++++++++++++++++++++++++++++++
// 109
// --Public vs Private--

// class Character {
//     #age = 54;
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.#age;
//     }
// };

// class Elf extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon);
//         this.type = type;
//     }
// };

// const dolby = new Elf('Dolby', 'cloth', 'house');
// console.log(dolby);
// console.log(dolby.attack());

// class Ogre extends Character {
//     constructor(name, weapon, color) {
//         super(name, weapon);
//         this.color = color;
//     }
//     makeFort() {
//         return 'strongest fort in the world made';
//     }
// };

// const shrek = new Ogre('Shrek', 'club', 'green');
// console.log(shrek);
// console.log(shrek.makeFort());
// console.log(shrek.attack());

// +++++++++++++++++++++++++++++++++++++++++++++
// 110
// --OOP in React.js--

// +++++++++++++++++++++++++++++++++++++++++++++
// 111
// --4 Pillars of OOP--

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'atack with ' + this.weapon;
//     }
// };

// class Elf extends Character {
//     constructor(name, weapon, type) {
//         // console.log('what am i?', this); //this gives an error
//         super(name, weapon);
//         console.log('what am i?', this);
//         this.type = type;
//     }
// };

// class Ogre extends Character {
//     constructor(name, weapon, color) {
//         super(name, weapon);
//         this.color = color;
//     }
//     makeFort() { // this is like extending our prototype.
//         return 'strongest fort in the world made';
//     }
// };

// const houseElf = new Elf('Dolby', 'cloth', 'house')
// // houseElf.makeFort() // error
// const shrek = new Ogre('Shrek', 'club', 'green')
// shrek.makeFort()

// -------------------

// Programming paradigm:

// Clear + Understandable
// Easy to Extend
// Easy to Maintain
// Memory Efficient
// DRY

// +++++++++++++++++++++++++++++++++++++++++++++
// 112
// --Exercise: OOP and Polymorphism--

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'atack with ' + this.weapon
//     }
// }
// //Polymorphism--
// //Extend the Character class to have a Queen class. The output of the below code should be:
// const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

// victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

// -----------------

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'atack with ' + this.weapon;
//     }
// };

// class Queen extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon)
//         this.type = type;
//     }
//     attack() {
//         return super.attack() + " I am the Victoria of hearts, now bow down to me!"
//     }
// };

// const victoria = new Queen('Victoria', 'army', 'hearts');
// console.log(victoria);

// const victoria2 = new Queen('Victoria', 'army', ['hearts', 'clubs', 'spades', 'diamonds']);
// console.log(victoria2);

// console.log(victoria.attack());
// console.log(victoria2.attack());

// -----------------

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'atack with ' + this.weapon;
//     }
// };

// class Queen extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon);
//         this.type = type;
//     }
//     attack() {
//         return console.log(`I am ${this.name} of ${this.type}, now bow down to me!`);
//     }
// };

// const victoria = new Queen('Victoria', 'army', 'hearts');
// console.log(victoria);
// victoria.attack();

// -----------------

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'atack with ' + this.weapon;
//     }
// };

// class Queen extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon);
//         this.type = type;
//     }
//     attack() {
//         return 'I am the ' + this.name + ' of ' + this.type + ', now bow down to me! ';
//     }
// }

// const victoria = new Queen('Victoria', 'army', 'hearts');
// console.log(victoria.attack());

// -----------------
// -----------------

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'atack with ' + this.weapon;
//     }
// };

// class Queen extends Character {
//     constructor(name, weapon, kind) {
//         super(name, weapon)
//         this.kind = kind;
//     }
//     attack() {
//         console.log(super.attack());
//         return `I am the ${this.name} of ${this.kind}, now bow down to me! `;
//     }
// };

// const victoria = new Queen('Victoria', 'army', 'hearts');
// console.log(victoria.attack());

// -----------------
// -----------------

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'Attack with ' + this.weapon;
//     }
// };

// class Queen extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon);
//         this.type = type;
//     }
//     attack() {
//         console.log(super.attack());
//         console.log('I am the ' + this.name + ' of ' + this.type + ' , now BOW down to me.');
//     }
// };

// const victoria = new Queen('Victoria', 'Army', 'Hearts');
// victoria.attack();

// +++++++++++++++++++++++++++++++++++++++++++++
// 113
// --Reviewing OOP--

// +++++++++++++++++++++++++++++++++++++++++++++
// 114
// --Section Overview--

// +++++++++++++++++++++++++++++++++++++++++++++
// 115
// --Functional Programming Introduction--

// Pure Functions

// +++++++++++++++++++++++++++++++++++++++++++++
// 116
// --Exercise: Amazon--

// // Amazon shopping
// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }

// //Implement a cart feature:
// // 1. Add items to cart.
// // 2. Add 3% tax to item in cart
// // 3. Buy item: cart --> purchases
// // 4. Empty cart

// //Bonus:
// // accept refunds.
// // Track user history.

// +++++++++++++++++++++++++++++++++++++++++++++
// 117
// --Pure Functions--

// // no side effects
// // input ---> output
// const array = [1, 2, 3];

// function mutateArray(arr) {
//     arr.pop();
// };

// function mutateArray2(arr) {
//     arr.forEach(item => {
//         arr.push(1);
//     })
// };
// //The order of the function calls will matter.
// mutateArray(array);
// mutateArray2(array);
// console.log(array);

// +++++++++++++++++++++++++++++++++++++++++++++
// 118
// --Pure Functions 2--

// no side effects
// input ---> output

// const array = [1, 2, 3];

// function removeLastItem(arr) {
//     const newArray = [].concat(arr);
//     newArray.pop();
//     return newArray;
// };

// function multiplyBy2(arr) {
//     return arr.map(item => item*2);
// };

// console.log(removeLastItem(array));
// console.log(array);

// --------------

// const array = [1, 2, 3];

// function removeLastItem(arr) {
//     const newArray = [].concat(arr);
//     newArray.pop();
//     return newArray;
// };

// function multiplyBy2(arr) {
//     return arr.map(item => item * 2);
// };

// const array2 = removeLastItem(array);
// const array3 = multiplyBy2(array);
// console.log(array, array2, array3);

// --------------

// function a(num1, num2) {
//     return num1 + num2;
// };

// function b(num) {
//     return num * 2;
// };

// // Referential Transparency
// console.log(a(3, 4)); // always same
// console.log(b(a(3, 4))); // always same
// console.log(b(7)); // always same

// +++++++++++++++++++++++++++++++++++++++++++++
// 119
// --Can Everything Be Pure ?--

// The goal of functional programming is not to make everything pure functions.
// The goal is to minimize side effects.

// +++++++++++++++++++++++++++++++++++++++++++++
// 120
// --Idempotent--

// function notGood(num) {
//     return Math.random(num);
// }

// console.log(notGood(5));

// function good() {
//     return 5;
// };

// console.log(Math.abs(Math.abs(-50)));

// +++++++++++++++++++++++++++++++++++++++++++++
// 121
// --Imperative vs Declarative--

// // Imperative
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// };

// // Declarative
// [1, 2, 3].forEach(item => console.log(item));

// +++++++++++++++++++++++++++++++++++++++++++++
// 122
// --Immutability--

// const obj = { name: 'Andrei' }
// function clone(obj) {
//     return { ...obj }; // this is pure
// }
// // // mutating
// // obj.name = 'Nana';
// // console.log(obj.name);

// function updateName(obj) {
//     const obj2 = clone(obj);
//     obj2.name = 'Nana';
//     return obj2;
// };
// // updateName(obj);
// // console.log(obj)

// const updatedObj = updateName(obj);
// console.log(obj, updatedObj);

// structural sharing

// +++++++++++++++++++++++++++++++++++++++++++++
// 123
// --Higher Order Functions and Closures--

//HOF
// const hof = () => () => 5;
// console.log(hof());
// console.log(hof()());
// ----------
// const hof = (fn) => fn(5);
// hof(function a(x) {
//     return x;
// });
// console.log(hof);

//Closure
// const closure = function () {
//     let count = 0;
//     return function increment() {
//         count++;
//         return count;
//     }
// };
// console.log(closure());
// const incrementFn = closure();
// console.log(incrementFn());
// console.log(incrementFn());
// console.log(incrementFn());
// ----------
// const closure = function () {
//     let count = 55;
//     return function getCounter() {
//         return count;
//     }
// };
// const getCounter = closure();
// console.log(getCounter());
// console.log(getCounter());
// console.log(getCounter());

// +++++++++++++++++++++++++++++++++++++++++++++
// 124
// --Currying--

// const multiply = (a, b) => a * b;
// console.log(multiply(3, 4));

// const curriedMultiply = (a) => (b) => a * b;
// console.log(curriedMultiply(5)(3));

// const multiplyBy5 = curriedMultiply(5);
// console.log(multiplyBy5(4));

// +++++++++++++++++++++++++++++++++++++++++++++
// 125
// --Partial Application--

// const multiply = (a, b, c) => a * b * c;
// // curried version
// const curriedMultiply = (a) => (b) => (c) => a * b * c;
// console.log(curriedMultiply(3)(4)(10));
// --------------

// // partial vresion
// const multiply = (a, b, c) => a * b * c;
// const partialMultiplyBy5 = multiply.bind(null, 5);
// console.log(partialMultiplyBy5(4, 10));

// +++++++++++++++++++++++++++++++++++++++++++++
// 127
// --MCI: Memoization 1--

// function addTo80(n) {
//     console.log('loong time');
//     return n + 80;
// };
// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

// ---------------

// let cache = {

// };

// function memoizedAddTo80(n) {
//     if (n in cache) {
//         return cache[n];
//     } else {
//         console.log('loong time');
//         cache[n] = n + 80;
//         return cache[n];
//     }
// };

// console.log('1 -->', memoizedAddTo80(5));
// console.log('1 -->', memoizedAddTo80(5));
// console.log('2 -->', memoizedAddTo80(6));
// console.log('3 -->', memoizedAddTo80(7));

// Memoization is simply a way to remember a solution to solve a problem.

// +++++++++++++++++++++++++++++++++++++++++++++
// 128
// --MCI: Memoization 2--

// // closures
// function memoizedAddTo80() {
//     let cache = {};
//     return function (n) {
//         if (n in cache) {
//             return cache[n];
//         } else {
//             console.log('loong time');
//             cache[n] = n + 80;
//             return cache[n];
//         }
//     }
// };

// const memoized = memoizedAddTo80();

// console.log('1 -->', memoized(5));
// console.log('2 -->', memoized(5));
// console.log('2 -->', memoized(6));
// console.log('3 -->', memoized(7));

// +++++++++++++++++++++++++++++++++++++++++++++
// 129
// --Compose and Pipe--

// Compose
// data --> fn --> data --> fn -->
// -50 * 3 = absolute value

// const compose = (f, g) => (data) => f(g(data));
// const multiplyBy3 = (num) => num * 3;
// const makePositive = (num) => Math.abs(num);
// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

// console.log(multiplyBy3AndAbsolute(-50));

// Pipe

// const pipe = (f, g) => (data) => g(f(data));
// const multiplyBy3 = (num) => num * 3;
// const makePositive = (num) => Math.abs(num);
// const multiplyBy3AndAbsolute = pipe(multiplyBy3, makePositive);

// console.log(multiplyBy3AndAbsolute(-50));
// ------------------

// Example

// fn1(fn2(fn3(50)));

// compose(fn1, fn2, fn3)(50);
// pipe(fn3, fn2, fn1)(50);

// +++++++++++++++++++++++++++++++++++++++++++++
// 130
// --Arity--

// Arity simply means the number of arguments a function takes.

// Arity of two:
// const pipe = (f, g) => (data) => g(f(data));

// Arity of one:
// const multiplyBy3 = (num) => num * 3;

// +++++++++++++++++++++++++++++++++++++++++++++
// 132
// --Solution: Amazon--

// Impement a cart feature:
// 1. Add items to cart
// 2. Add 30% tax to item in cart
// 3. Buy item: cart --> prchases
// 4. Empty cart

// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }

// console.log(purchaseItem(user, { name: 'laptop', price: 344 }));


// function purchaseItem(user, item) {
//     return Object.assign({}, user, { purchases: item })
// };

// function itemToCart() { };

// function applyTaxToItems() { };

// function buyItem() { };

// function emptyCart() { };

// -----------------------

// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// };

// const compose = (f, g) => (...args) => f(g(...args));
// const pipe = (f, g) => (...args) => g(f(...args));

// purchaseItem(
//     emptyCart,
//     buyItem,
//     applyTaxToItems,
//     addItemToCart
// )(user, { name: 'laptop', price: 200 });


// function purchaseItem(...fns) {
//     // return fns.reduce(compose);
//     return fns.reduce(pipe);
// };

// function addItemToCart(user, item) {
//     const updateCart = user.cart.concat(item);
//     return Object.assign({}, user, { cart: updateCart });
// };

// function applyTaxToItems(user) {
//     const { cart } = user;
//     const taxRate = 1.3;
//     const updatedCart = cart.map(item => {
//         return {
//             name: item.name,
//             price: item.price * taxRate
//         }
//     });
//     return Object.assign({}, user, { cart: updatedCart });
// };

// function buyItem(user) {
//     return Object.assign({}, user, { purchases: user.cart });
// };

// function emptyCart(user) {
//     return Object.assign({}, user, { cart: [] });
// };

// console.log(purchaseItem(user, item));

// -----------------------
// Repl.it

// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }
// const history1 = [];
// const compose = (f, g) => (...args) => f(g(...args))
// const pipe = (f, g) => (...args) => g(f(...args))
// const purchaseItem = (...fns) => fns.reduce(compose);
// const purchaseItem2 = (...fns) => fns.reduce(pipe);
// purchaseItem2(
//     addItemToCart,
//     applyTaxToItems,
//     buyItem,
//     emptyUserCart,
// )(user, { name: 'laptop', price: 60 })
// // purchaseItem(
// //   emptyUserCart,
// //   buyItem,
// //   applyTaxToItems,
// //   addItemToCart
// // )(user, {name: 'laptop', price: 50})
// function addItemToCart(user, item) {
//     history1.push(user)
//     const updatedCart = user.cart.concat(item)
//     return Object.assign({}, user, { cart: updatedCart });
// }

// function applyTaxToItems(user) {
//     history1.push(user)
//     const { cart } = user;
//     const taxRate = 1.3;
//     const updatedCart = cart.map(item => {
//         return {
//             name: item.name,
//             price: item.price * taxRate
//         }
//     })
//     return Object.assign({}, user, { cart: updatedCart });
// }

// function buyItem(user) {
//     history1.push(user)
//     const itemsInCart = user.cart;
//     return Object.assign({}, user, { purchases: itemsInCart });
// }
// function emptyUserCart(user) {
//     history1.push(user)
//     return Object.assign({}, user, { cart: [] });
// }

// function refundItem() {

// }

// function getUserState() {

// }

// function goBack() {

// }

// function goForward() {

// }

// -----------------------

// // Amazon shopping
// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }
// // Implement a cart feature:
// // 1. Add items to cart.
// // 2. Add 3% tax to item in cart.
// // 3. Buy item: cart -> purchases
// // 4. Empty cart
// const item = {
//     name: 'IPhone 13',
//     price: 2800
// }

// const addItemToCart = function (user, item) {
//     const updatedCart = user.cart.concat(item);

//     return Object.assign({}, user, { cart: updatedCart });
// }

// const applyTax = (tax) => (user) => {
//     const { cart } = user;

//     const updatedCart = cart.map(item => {
//         return {
//             name: item.name,
//             price: item.price += tax * item.price / 100
//         }
//     })

//     return Object.assign({}, user, { cart: updatedCart });
// }

// const apply3PercentTax = applyTax(3);

// const addToPurchase = (user) => {
//     const cartItems = user.cart;
//     return Object.assign({}, user, { purchases: cartItems });
// }

// const resetCart = (user) => {
//     return Object.assign({}, user, { cart: [] })
// };

// const compose = (f, g) => (user, item) => f(g(user, item));

// const composeAddtoCart = compose(apply3PercentTax, addItemToCart);

// const pipe = (f, g) => (user) => g(f(user))

// const buyItem = pipe(addToPurchase, resetCart);

// const purchase = compose(buyItem, composeAddtoCart);

// console.log(purchase(user, item))

// +++++++++++++++++++++++++++++++++++++++++++++
// 134
// --Composition vs Inheritance--

// Inheritance:
// what it is
// Problems:
// -Tight Coupling
// -Fragile Base Class
// -Hierarchy

// Composition:
// what it has, or what it does to data

// +++++++++++++++++++++++++++++++++++++++++++++
// 135
// --OOP vs FP--

// Organizing the code into units would be called OOP
// Avioding side effects and writing pure functions would be called FP

// +++++++++++++++++++++++++++++++++++++++++++++
// 136
// --OOP vs FP 2--

// FP
// many operations on fixed data
// stateless - we don't modify state
// pure functions, no side effects, functions that we write don't make impact on the code that is running outside of that function
// declarative, what we want to be doing

// OOP
// few operations on common data
// stateful - we are modifying state
// side effects, methods manipulate internal state
// imperative, how we want it to be done

// +++++++++++++++++++++++++++++++++++++++++++++
// 137
// --Section Overview--

// Asynchronous functions are functions that we can execute later

// setTimeout(() => { console.log('1', 'is the loneliest number') }, 0)
// setTimeout(() => { console.log('2', 'can be as bad as one') }, 10)

// //2
// Promise.resolve('hi').then((data) => console.log('2', data))

// //3
// console.log('3', 'is a crowd')

// +++++++++++++++++++++++++++++++++++++++++++++
// 139
// --How JavaScript Works--

// // memory heap
// const a = 1;
// const b = 10;
// const c = 100;

// // call stack
// console.log('1');
// console.log('2');
// console.log('3');

// const one = () => {
//     const two = () => {
//         console.log('4');
//     }
//     two();
// };
// one();
// // console.log('4');
// // two();
// // one();

// // recursion
// function foo() {
//     foo();
// };
// // getting stack overflow (infinite recursion)

// // JS is a single threaded language thet can be non-blocking

// ----------------------

// console.log('1');
// setTimeout(() => {
//     console.log('2');
// }, 2000);
// console.log('3');

// // call stack

// // web api

// // callback queue

// // event loop

// +++++++++++++++++++++++++++++++++++++++++++++
// 140
// --Promises--

// A promise is an object that may produce a single value some time in the future, either a resolved value, or a reson that it's not resolved (rejected).
// fullfilled, rejected or pending

// // example                  // callback
// el.addEventListener('click', submitForm);

// // callback pyramid of doom
// movePlayer(100, 'Left', function () {
//     movePlayer(400, 'Left', function () {
//         movePlayer(10, 'Right', function () {
//             movePlayer(330, 'Left', function () {
//             });
//         });
//     });
// });
// -----------------
// grabTweets('twitter/andreineagoie'), (error, andreiTweets) => {
//     if (error) {
//         throw Error;
//     }
//     displayTweets(andreiTweets);
//     grabTweets('twitter/elonmusk'), (error, elonTweets) => {
//         if (error) {
//             throw Error;
//         }
//         displayTweets(elonTweets);
//         grabTweets('twitter/vitalikbuterin'), (error, vitalikTweets) => {
//             if (error) {
//                 throw Error;
//             }
//             displayTweets(vitalikTweets);
//         }
//     }
// }
// -----------------
// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(330, 'Left'))
// -----------------
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');
//     } else {
//         reject('Error, it broke');
//     }
// });
// promise.then(result => console.log(result));
// -----------------
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');
//     } else {
//         reject('Error, it broke');
//     }
// });
// chaining in promises
// ==============
// promise
//     .then(result => {
//         throw Error;
//         return result + '!'
//     })
//     .then(result2 => {
//         // throw Error;
//         console.log(result2);
//     })
//     .catch(() => console.log('errrror!'))
// -----------------
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');
//     } else {
//         reject('Error, it broke');
//     }
// });
// promise
//     .then(result => result + '!')
//     .then(result2 => result2 + '?')
//     .catch(() => console.log('errrror!'))
//     .then(result3 => {
//         console.log(result3 + '!')
//     })
// -----------------
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');
//     } else {
//         reject('Error, it broke');
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'HIIII');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'POOKIE');
// });

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'Is it me you are looking for?');
// });

// Promise.all([promise, promise2, promise3, promise4])
//     .then(values => {
//         console.log(values);
//     });

// promise
//     .then(result => result + '!')
//     .then(result2 => result2 + '?')
//     .catch(() => console.log('errrror!'))
//     .then(result3 => {
//         console.log(result3 + '!')
//     });
// -----------------

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json())
// })).then(results => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
// }).catch(() => console.log('error'))

// fetch returns a Promise

// again:
// A promise is an object that may produce a single value some time in the future, either a resolved value, or a reson that it's not resolved (rejected).

// fullfilled, rejected or pending

// +++++++++++++++++++++++++++++++++++++++++++++
// 141
// --ES8 - Async Await--

// async function is a function that returns a promise, but it makes code easier to read

// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(330, 'Left'))

// // with async / await:
// async function playerStart() {
//     const firstMove = await movePlayer(100, 'Left');
//     await movePlayer(400, 'Left');
//     await movePlayer(10, 'Right');
//     await movePlayer(330, 'Left');
// };
// // syntactic sugar
// -----------------

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json())
//     .then(console.log)

// async function fetchUsers() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await resp.json();
//     console.log(data);
// };
// ------------------------

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// const getData = async function () {
//     const [users, posts, albums] = await Promise.all(urls.map(url =>
//         fetch(url).then(resp => resp.json())
//     ));
//     console.log('users', users);
//     console.log('posts', posts);
//     console.log('albums', albums);
// };

// getData();

// ------------------------
// with error:

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// const getData = async function () {
//     try {
//         const [users, posts, albums] = await Promise.all(urls.map(url =>
//             fetch(url).then(resp => resp.json())
//         ));
//         console.log('users', users);
//         console.log('posts', posts);
//         console.log('albums', albums);
//     } catch (err) {
//         console.log('OOOPS!', err)
//     }
// };

// getData();

// +++++++++++++++++++++++++++++++++++++++++++++
// 142
// --ES9(ES2018)--

// New Features:
// *1. Object spread operator
// const animals = {
//     tiger: 23,
//     lion: 5,
//     monkey: 2
// };

// const { tiger, ...rest } = animals;
// console.log(tiger);
// console.log(rest);

// ES6
// const array = [1, 2, 3, 4, 5];
// function sum(a, b, c, d, e) {
//     return a + b + c + d + e;
// };
// console.log(sum(...array));
// ---------------
// ES9
// const animals = {
//     tiger: 23,
//     lion: 5,
//     monkey: 2,
//     bird: 40
// };
// function objectSpread(p1, p2, p3) {
//     console.log(p1);
//     console.log(p2);
//     console.log(p3);
// };
// const { tiger, lion, ...rest } = animals;

// objectSpread(tiger, lion, rest);

// +++++++++++++++++++++++++++++++++++++++++++++
// 143
// --ES9(ES2018) - Async--

// https://swapi.dev/

// const urls = [
//     'https://swapi.dev/api/people/1/',
//     'https://swapi.dev/api/people/2/',
//     'https://swapi.dev/api/people/3/',
//     'https://swapi.dev/api/people/4/'
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json())
// }))
//     .then(array => {
//         console.log('1', array[0]);
//         console.log('2', array[1]);
//         console.log('3', array[2]);
//         console.log('4', array[3]);
//     })
//     .catch(err => console.log('ughhhh fix it', err));

// *2. finally()

// const urls = [
//     'https://swapi.dev/api/people/1/',
//     'https://swapi.dev/api/people/2/',
//     'https://swapi.dev/api/people/3/',
//     'https://swapi.dev/api/people/4/'
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json())
// }))
//     .then(array => {
//         console.log('1', array[0]);
//         console.log('2', array[1]);
//         console.log('3', array[2]);
//         console.log('4', array[3]);
//     })
//     .catch(err => console.log('ughhhh fix it', err))
//     .finally(data => console.log('extra', data));
// ------------------
// const urls = [
//     'https://swapi.dev/api/people/1/',
//     'https://swapi.dev/api/people/2/',
//     'https://swapi.dev/api/people/3/',
//     'https://swapi.dev/api/people/4/'
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json())
// }))
//     .then(array => {
//         throw Error;
//         console.log('1', array[0]);
//         console.log('2', array[1]);
//         console.log('3', array[2]);
//         console.log('4', array[3]);
//     })
//     .catch(err => console.log('ughhhh fix it', err))
//     .finally(() => console.log('extra'));

// *3. for await( *** of ***) {};

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// const getData = async function () {
//     try {
//         const [users, posts, albums] = await Promise.all(urls.map(url =>
//             fetch(url).then(resp => resp.json())
//         ));
//         console.log('users', users);
//         console.log('posts', posts);
//         console.log('albums', albums);
//     } catch (err) {
//         console.log('OOOPS!', err)
//     }
// };
// getData();

// const loopThroughUrls = url => {
//     for (url of urls) {
//         console.log(url);
//     }
// };
// loopThroughUrls();
// -------------------
// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// const getData2 = async function () {
//     const arrayOfPromises = urls.map(url => fetch(url));
//     for await (let request of arrayOfPromises) {
//         const data = await request.json();
//         console.log(data);
//     }
// };
// getData2();

// +++++++++++++++++++++++++++++++++++++++++++++
// 144
// --Job Queue--

// // 1 Callback Queue - Task Queue => 3rd
// setTimeout(() => { console.log('1', 'is the loneliest number') }, 0);
// setTimeout(() => { console.log('2', 'can be as bad as one') }, 10);
// // setTimeOut => when it turns out is a facade function

// // 2 Job Queue - Microtask Queue => 2nd
// Promise.resolve('hi').then((data) => console.log('2', data));

// // 3 It's not asynchronous => 1st
// console.log('3', 'is a crowd');

// +++++++++++++++++++++++++++++++++++++++++++++
// 145
// --Parallel, Sequence and Race--

// const promisify = (item, delay) =>
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve(item), delay));

// const a = () => promisify('a', 1000);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
// // console.log(a, b, c);
// // console.log(a(), b(), c());

// async function parallel() {
//     const promises = [a(), b(), c()];
//     const [output1, output2, output3] = await Promise.all(promises);
//     return `parallel is done: ${output1} ${output2} ${output3}`;
// };
// // parallel().then(console.log);

// async function race() {
//     const promises = [a(), b(), c()];
//     const output1 = await Promise.race(promises);
//     return `race is done: ${output1}`;
// };
// // race().then(console.log);

// async function sequence() {
//     const output1 = await a();
//     const output2 = await b();
//     const output3 = await c();
//     return `sequence is done ${output1} ${output2} ${output3}`;
// };

// parallel().then(console.log);
// sequence().then(console.log);
// race().then(console.log);

// +++++++++++++++++++++++++++++++++++++++++++++
// 146
// --ES2020: allSettled()--

// const promiseOne = new Promise((resolve, reject) =>
//     setTimeout(resolve, 3000));

// const promiseTwo = new Promise((resolve, reject) =>
//     setTimeout(reject, 3000));

// Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
//     .catch(err => console.log('something failed', err));
// ----------------
// const promiseOne = new Promise((resolve, reject) =>
//     setTimeout(resolve, 3000));

// const promiseTwo = new Promise((resolve, reject) =>
//     setTimeout(reject, 3000));

// Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
//     .catch(err => console.log('something failed', err));

// +++++++++++++++++++++++++++++++++++++++++++++
// 147
// --ES2021: any()--

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
// });

// (async function () {
//     const result = await Promise.any([p1, p2, p3]);
//     console.log(result); // Prints "A", "B" or "C"
// })();

// +++++++++++++++++++++++++++++++++++++++++++++
// 148
// --Threads, Concurrency and Parallelism--

// +++++++++++++++++++++++++++++++++++++++++++++
// 150
// --What Is A Module?--

// Tight coupling

// Example:
// var harry = 'potter';
// var voldemort = 'He who must not be named';
// function fight(char1, char2) {
//     var attack1 = Math.floor(Math.random() * char1.length);
//     var attack2 = Math.floor(Math.random() * char2.length);
//     console.log(attack1);
//     console.log(attack2);
//     return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
// };

// console.log(fight(harry, voldemort));

// +++++++++++++++++++++++++++++++++++++++++++++
// 151
// --Module Pattern--

// Glabal Scope
//   Module Scope
//     Function Scope
//       Block Scope - let and const

// IIFE - Immediately Invoked Function Expression
// (function () {

//     var harry = 'potter';
//     var voldemort = 'He who must not be named';
//     function fight(char1, char2) {
//         var attack1 = Math.floor(Math.random() * char1.length);
//         var attack2 = Math.floor(Math.random() * char2.length);
//         console.log(attack1);
//         console.log(attack2);
//         return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
//     };
//     console.log(fight(harry, voldemort));

// })();
// --------------
// var fightModule = (function () {

//     var harry = 'potter';
//     var voldemort = 'He who must not be named';
//     function fight(char1, char2) {
//         var attack1 = Math.floor(Math.random() * char1.length);
//         var attack2 = Math.floor(Math.random() * char2.length);
//         console.log(attack1);
//         console.log(attack2);
//         return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
//     }
//     return {
//         fight: fight
//     }
//     // this pattern of returning is calling: revealing module pattern

// })();

// console.log(fightModule);
// console.log(fightModule.fight('Ron', 'Hagrid'));

// +++++++++++++++++++++++++++++++++++++++++++++
// 152
// --Module Pattern Pros and Cons--

// +++++++++++++++++++++++++++++++++++++++++++++
// 153
// --CommonJS, AMD, UMD--

// 1. CommonJS

// var module1 = require('module1'); // .fight;
// var module2 = require('module2'); // .importedFunc2;

// function fight() {

// };

// module.exports = {
//     fight: fight
// };
// // module bundler
// // https://browserify.org/

// 2. AMD - Asynchronous Module Definition

// define(['module1', 'module2'],
//     function (module1Import, module2Import) {
//         var module1 = module1Import // .fight;
//         var module2 = module2Import // .importedFunc2;

//         function dance() {

//         }

//         return {
//             dance: dance
//         }
//     });

// 3. UMD - Universal Module Definition

// These modules are capable of working everywhere, be it in the client, on the server or elsewhere.

// +++++++++++++++++++++++++++++++++++++++++++++
// 154
// --ES6 Modules--

// Example
// import module1 from 'module1';
// import module2 from 'module2';

// export function jump() {

// };

// --------------------

// const harry = 'potter';
// const voldemort = 'He who must not be named';

// export default function jump() { };

// export function fight(char1, char2) {
//     const attack1 = Math.floor(Math.random() * char1.length);
//     const attack2 = Math.floor(Math.random() * char2.length);
//     return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 157
// --Errors In JavaScript--

// console.log(Error); // constructor function
// console.log(new Error('oopsie'));

// The 'throw' statement throws an exception.

// throw 'Error2';   // String type
// throw 42;         // Number type
// throw true;       // Boolean type
// throw Error
// throw new Error // will create an instance of an Error in JavaScript and stop the execution of your script.

// const myError = new Error('OOOOPSIE');
// console.log(myError.name);
// console.log(myError.message);
// console.log(myError.stack); // stack trace

// function a() {
//     const b = new Error('what?')
//     return b
// }

// console.log(a().stack);

// let error = new Error(message);
// let error2 = new SyntaxError(message);
// let error3 = new ReferenceError(message);

// +++++++++++++++++++++++++++++++++++++++++++++
// 158
// --Try Catch--

// function fail() {
//     try {
//         console.log('this works');
//     } catch (error) {
//         console.log('we have made an oopsie', error);
//     }
// };
// fail();
// -------------------
// function fail() {
//     try {
//         // console.log('this works');
//         throw new Error('oopsie!!!')
//         console.log('this works');
//     } catch (error) {
//         // console.log(error);
//         // console.log(error.name);
//         // console.log(error.stack);
//         console.log(error.message);
//     }
// };
// fail();
// -------------------
// function fail() {
//     try {
//         throw new Error('oopsie!!!')
//         console.log('this works');
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         console.log('still good')
//         return console.log('returning fail');
//     }
//     console.log('!!!!!!!!!!!!!!!!! :)'); // never going to get run
// };
// fail();
// -------------------
// this try...catch block works with synchronous code
// try {
//     try {
//         something();
//     } catch (e) {
//         throw new Error(e);
//     }
// } catch (e) {
//     console.log('got it!!', e)
// };
// -------------------
// try {
//     setTimeout(function () {
//     }, 1000)
// } catch (e) {
//     console.log('got it!!', e)
// };
// +++++++++++++++++++++++++++++++++++++++++++++
// 159
// --Async Error Handling--

// silent fail
// Promise.resolve('asyncfail')
//     .then(response => {
//         throw new Error('#1 fail')
//         return response
//     })
//     .then(response => {
//         console.log(response)
//     })
// -------------------
// Promise.resolve('asyncfail')
//     .then(response => {
//         throw new Error('#1 fail')
//         return response
//     })
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         console.error(err)
//     })
// -------------------
// Promise.resolve('asyncfail')
//     .then(response => {
//         throw new Error('#1 fail');
//         return response;
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         return err
//     })
//     .then(response => {
//         console.log(response.message);
//     })
// -------------------
// Promise.resolve('asyncfail')
//     .then(response => {
//         throw new Error('#1 fail');
//         return response;
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         throw new Error('#2')
//     })
//     .then(response => {
//         console.log(response.message);
//     })
//     .catch(() => {
//         console.log('final error');
//     })
// -------------------
// Promise.resolve('asyncfail')
//     .then(response => {
//         Promise.resolve().then(() => {
//             throw new Error('#3 fail');
//         })
//         return 5;
//     })
//     .then(response => {
//         console.log(response);
//     })
//     // .catch(() => {
//     //     throw new Error('#2')
//     // })
//     .then(response => {
//         console.log(response.message);
//     })
//     .catch(() => {
//         console.log('final error');
//     })
// -------------------
// Promise.resolve('asyncfail')
//     .then(response => {
//         Promise.resolve().then(() => {
//             throw new Error('#3 fail');
//         }).catch(console.log)
//         return 5;
//     })
//     .then(response => {
//         console.log(response);
//     })
//     // .catch(() => {
//     //     throw new Error('#2')
//     // })
//     .then(response => {
//         console.log(response.message);
//     })
//     .catch(() => {
//         console.log('final error');
//     })
// -------------------
// fix:
// Promise.resolve('asyncfail')
//     .then(response => {
//         Promise.resolve().then(() => {
//             throw new Error('#3 fail');
//         }).catch(console.log)
//         return 5;
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log('final error', err);
//     })
// +++++++++++++++++++++++++++++++++++++++++++++
// 160
// --Async Error Handling 2--

// (async function () {
//     try {
//         await Promise.resolve('oopsie #1');
//         await Promise.reject('oopsie #2');
//     } catch (err) {
//         console.log(err)
//     }
//     console.log('is this still good');
// })();

// +++++++++++++++++++++++++++++++++++++++++++++
// 161
// --Exercise: Error Handling--

// (function () {
//     try {
//         throw new Error();
//     } catch (err) {
//         var err = 5;
//         var boo = 10;
//         console.log(err);
//     }
//     //Guess what the output is here:
//     console.log(err);
//     console.log(boo);
// })();

// +++++++++++++++++++++++++++++++++++++++++++++
// 162
// --Extending Errors--

// class AuthenticationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'AuthenticationError';
//         this.favouriteSnack = 'grapes';
//     }
// };

// class DataBaseError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'DataBaseError';
//         this.message = 'banana';
//     }
// };

// class PermissionError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'PermissionError';
//         this.favouriteSnack = 'orange';
//     }
// };

// // throw new AuthenticationError('OOPSIE');
// const a = new AuthenticationError('OOPSIE');
// console.log(a.favouriteSnack);
// const b = new DataBaseError('OOPSIE');
// console.log(b.message);
// console.log(b instanceof DataBaseError);

// +++++++++++++++++++++++++++++++++++++++++++++
// 172
// --What Is A Data Structure ?--

// A data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

// Readable  // Memory  // Speed

// 1. How to build one
// 2. How to use it

// +++++++++++++++++++++++++++++++++++++++++++++
// 173
// --How Computers Store Data--

// console.log(Math.pow(6, 2));
// console.log(Math.pow(6, 10));
// console.log(Math.pow(6, 100));
// console.log(Math.pow(6, 1000));

// A data structure is an arrangement of data.

// +++++++++++++++++++++++++++++++++++++++++++++
// 174
// --Data Structures In Different Languages--

// +++++++++++++++++++++++++++++++++++++++++++++
// 175
// --Operations On Data Structures--

// Insertion
// Deletion
// Traversal
// Searching
// Sorting
// Access

// +++++++++++++++++++++++++++++++++++++++++++++
// 176
// --Array Introduction--

// const strings = ['a', 'b', 'c', 'd'];
// // 32bit system: 4*4=16 bytes of storage
// console.log(strings[2]); //c
// // Variable array is somewhere in memory and the computer knows it.
// // When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// //push
// strings.push('e'); //0(1)
// console.log(strings);

// //pop
// strings.pop(); //0(1)
// console.log(strings);
// strings.pop(); //0(1)
// console.log(strings);

// //unshift
// strings.unshift('x') //0(n)
// console.log(strings);

// //splice
// strings.splice(2, 0, 'alien'); //0(n)
// console.log(strings);

// +++++++++++++++++++++++++++++++++++++++++++++
// 178
// --Implementing An Array--

// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data = {};
//     }

//     get(index) {
//         return this.data[index];
//     }

//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }

//     pop() {
//         const lastItem = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return lastItem;
//     }

//     delete(index) {
//         const item = this.data[index];
//         this.shiftItems(index);
//         return item;
//     }

//     shiftItems(index) {
//         for (let i = index; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length - 1];
//         this.length--;
//     }
// };

// const newArray = new MyArray;
// newArray.push('Hi');
// newArray.push('You');
// newArray.push('!');
// newArray.pop();
// newArray.pop();
// newArray.push('You');
// newArray.push('!');
// newArray.delete(0);
// newArray.push('Are');
// newArray.push('Nice');
// newArray.delete(1);


// console.log(newArray);
// // console.log(newArray.get(0));

// +++++++++++++++++++++++++++++++++++++++++++++
// 180
// --Exercise: Reverse A String--

// Create a function that reverses a string:
// 'Hi my Name is Andrei' should be:
// 'ierdnA si emaN ym iH'

// +++++++++++++++++++++++++++++++++++++++++++++
// 181
// --Solution Reverse A String--

// function reverse(str) {
//     //check input
//     if (!str || str.length < 2 || typeof str !== 'string') {
//         return 'hmmm that is not good';
//     }

//     const backwards = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--) {
//         backwards.push(str[i]);
//     }
//     console.log(backwards);

//     return backwards.join('');
// };

// reverse('Hi my Name is Andrei');
// -------------------------
// function reverse(str) {
//     //check input
//     if (!str || str.length < 2 || typeof str !== 'string') {
//         return 'hmmm that is not good';
//     }

//     const backwards = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--) {
//         backwards.push(str[i]);
//     }
//     console.log(backwards);

//     return backwards.join('');
// };

// function reverse2(str) {
//     return str.split('').reverse().join('');
// };

// const reverse3 = str => str.split('').reverse().join('');
// const reverse4 = str => [...str].reverse().join('');

// // reverse('Hi my Name is Andrei');
// console.log(reverse2('Hi my Name is Andrei'));
// console.log(reverse3('Hi my Name is Andrei'));
// console.log(reverse4('Hi my Name is Andrei'));

// +++++++++++++++++++++++++++++++++++++++++++++
// 182
// --Exercise: Merge Sorted Arrays--

// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31]

// +++++++++++++++++++++++++++++++++++++++++++++
// 183
// --Solution: Merge Sorted Arrays--

// function mergeSortedArrays(arr1, arr2) {
//     let ans = arr1.concat(arr2);
//     let sol = ans.sort((a, b) => a - b);
//     console.log(sol)
// };
// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// ------------------------
// const arr = [0, 3, 4, 31]
// const arr1 = [4, 6, 30]
// const arr2 = []
// const merged = arr.concat(arr1)

// for (let i = 0; i = merged.length; i++) {
//     min_value = Math.min.apply(Math, merged)
//     arr2.push(min_value)
//     index = merged.indexOf(min_value)
//     merged.splice(index, 1)
// }
// console.log(arr2)
// ------------------------
// ------------------------
// function mergeSortedArrays(array1, array2) {
//     const mergedArray = [];
//     let array1Item = array1[0];
//     let array2Item = array2[0];

//     let i = 1;
//     let j = 1;

//     // check input
//     if (array1.length === 0) {
//         return array2;
//     }
//     if (array2.length === 0) {
//         return array1;
//     }

//     while (array1Item || array2Item) {
//         if (array2Item === undefined || array1Item < array2Item) {
//             mergedArray.push(array1Item);
//             array1Item = array1[i];
//             i++;
//         }
//         else {
//             mergedArray.push(array2Item);
//             array2Item = array2[j];
//             j++;
//         }
//     }
//     return mergedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// +++++++++++++++++++++++++++++++++++++++++++++
// 184
// --Arrays Review--

// Pros:
// Fast lookups
// Fast push/pop
// Ordered

// Cons:
// Slow inserts
// Slow deletes
// Fixed size (if using static array)

// +++++++++++++++++++++++++++++++++++++++++++++
// 185
// --Hash Tables Introduction--

// basket.grapes = 10000


// index:| value
//--------------
// 501 :    1
// 502 :    3
// 503 :    55
// ... :    ..
//key:                    // ... :    ..
//"grapes" ===> Hash ==>  // 711 :  10000
//function    // ... :    ..
// ... :    ..
// 801 :    12

// +++++++++++++++++++++++++++++++++++++++++++++
// 186
// --Hash Function--

// Indempotent

// +++++++++++++++++++++++++++++++++++++++++++++
// 187
// --Hash Collisions--

// let user = {
//     age: 54,
//     name: 'Kylie',
//     magic: true,
//     scream: function () {
//         console.log('AAAAAAHH!');
//     }
// };

// console.log(user.age); // 0(1)
// user.spell = 'abra kadabra'; // 0(1)
// console.log(user);
// console.log(user.scream()); // 0(1)
// --------------

// Collision
// buckets
// link list

// 0(n/k) // k - is the size of hash table

// +++++++++++++++++++++++++++++++++++++++++++++
// 188
// --Hash Tables In Different Languages--

// let user = {
//     age: 54,
//     name: 'Kylie',
//     magic: true,
//     scream: function () {
//         console.log('AAAAAAHH!');
//     }
// };

// console.log(user.age); // 0(1)
// user.spell = 'abra kadabra'; // 0(1)
// console.log(user);
// console.log(user.scream()); // 0(1)

// const a = new Map();
// const b = new Set();

// +++++++++++++++++++++++++++++++++++++++++++++
// 189
// --Exercise: Implement A Hash Table--

// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length
//         }
//         return hash;
//     }
// };

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')

// +++++++++++++++++++++++++++++++++++++++++++++
// 190
// --Solution: Implement A Hash Table--

// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     // private property
//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) %
//                 this.data.length;
//             // console.log(hash);
//         }
//         return hash;
//     }

//     set(key, value) {
//         let address = this._hash(key);
//         if (!this.data[address]) {
//             this.data[address] = [];
//             this.data[address].push([key, value]);
//             console.log(this.data);
//         } else {
//             this.data[address].push([key, value]);
//         }
//     }
// };

// const myHashTable = new HashTable(50);
// // myHashTable._hash('grapes');
// console.log(myHashTable.set('grapes', 10000));
// ------------------------
// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     // private property
//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) %
//                 this.data.length;
//         }
//         return hash;
//     }

//     set(key, value) {
//         let address = this._hash(key);
//         if (!this.data[address]) {
//             this.data[address] = [];
//         }
//         this.data[address].push([key, value]);
//         return this.data;
//     }
// };

// const myHashTable = new HashTable(50);

// console.log(myHashTable.set('grapes', 10000));
// console.log(myHashTable.set('apples', 54));
// ------------------------
// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     // private property
//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) %
//                 this.data.length;
//         }
//         return hash;
//     } // 0(1)

//     set(key, value) {
//         let address = this._hash(key);
//         if (!this.data[address]) {
//             this.data[address] = [];
//         }
//         this.data[address].push([key, value]);
//         return this.data;
//     } // 0(1)

//     get(key) {
//         let address = this._hash(key);
//         const currentBucket = this.data[address];
//         // console.log(currentBucket);
//         if (currentBucket) {
//             for (let i = 0; i < currentBucket.length; i++) {
//                 if (currentBucket[i][0] === key) {
//                     return currentBucket[i][1];
//                 }
//             }
//         } // 0(1)
//         return undefined;
//     }
// };

// const myHashTable = new HashTable(50);

// myHashTable.set('grapes', 10000);
// // console.log(myHashTable.set('grapes', 10000));
// myHashTable.set('apples', 54);
// // console.log(myHashTable.set('apples', 54));
// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apples'));

// +++++++++++++++++++++++++++++++++++++++++++++
// 191
// --keys()--

// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     // private property
//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) %
//                 this.data.length;
//         }
//         return hash;
//     } // 0(1)

//     set(key, value) {
//         let address = this._hash(key);
//         if (!this.data[address]) {
//             this.data[address] = [];
//         }
//         this.data[address].push([key, value]);
//         return this.data;
//     } // 0(1)

//     get(key) {
//         let address = this._hash(key);
//         const currentBucket = this.data[address];
//         // console.log(currentBucket);
//         if (currentBucket) {
//             for (let i = 0; i < currentBucket.length; i++) {
//                 if (currentBucket[i][0] === key) {
//                     return currentBucket[i][1];
//                 }
//             }
//         } // 0(1)
//         return undefined;
//     }

//     keys() {
//         const keysArray = [];
//         for (let i = 0; i < this.data.length; i++) {
//             if (this.data[i]) {
//                 console.log(this.data[i][0][0]);
//                 keysArray.push(this.data[i][0][0]);
//             }
//         }
//         return keysArray;
//     }
// };

// const myHashTable = new HashTable(50);

// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 54);
// myHashTable.set('oranges', 2);

// console.log(myHashTable.keys());

// +++++++++++++++++++++++++++++++++++++++++++++
// 193
// --First Recurring Character--

// //Google Question
// //Given an array = [2,5,1,2,3,5,1,2,4]:
// //It should return 2

// //Given an array = [2,1,1,2,3,5,1,2,4]:
// //It should return 1

// //Given an array = [2,3,4,5]:
// //It should return undefined


// function firstRecurringCharacter(input) {
// }

// //Bonus... What if we had this:
// // [2,5,5,2,3,5,1,2,4]
// // return 5 because the pairs are before 2,2

// +++++++++++++++++++++++++++++++++++++++++++++
// 194
// --Solution: First Recurring Character--

// var firstRecurringCharacter = function (input) {
//     let obj = {}
//     for (let i = 0; i < input.length; i++) {
//         let num = input[i];
//         obj[num] = (obj[num] || 0) + 1;
//         if (obj[num] === 2) return num;
//     }
// }

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter([2, 3, 4, 5])); //undefined
// ------------------------------
// function firstRecurringCharacter(input) {
//     if (!Array.isArray(input)) throw Error('Input should be an array') // O (1)
//     const myNumbersSet = new Set(); // O (1)
//     for (let index = 0; index < input.length; index++) { // O (n)
//         const number = input[index]; // O (1)
//         if (myNumbersSet.has(number)) { // O (1)
//             return number;
//         }
//         myNumbersSet.add(number) // O (1)
//     }
//     return undefined;
// };

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter([2, 3, 4, 5])); //undefined
// ------------------------------
// const firstRecurringCharacter = (input) => {
//     let map = new Map();
//     for (let i of input) {
//         if (map.get(i)) return i;
//         map.set(i, 1);
//     }
//     return undefined;
// };

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter([2, 3, 4, 5])); //undefined
// ------------------------------
// function firstRecurringCharacter(input) {
//     const recurringChar = {}
//     for (let i = 0; i < input.length; i++) {
//         if (recurringChar[input[i]]) {
//             return input[i]
//         }
//         recurringChar[input[i]] = true
//     }
//     return
// }

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter([2, 3, 4, 5])); //undefined
// ------------------------------
// function firstRecurringCharacter(input) {
//     if (input.length < 2) {
//         return "Not Enought Length";
//     } else {
//         let hashTable = {}
//         for (let i = 0; i < input.length; i++) {
//             if (!hashTable[input[i]]) {
//                 hashTable[input[i]] = 1
//             } else {
//                 return input[i];
//             }
//         }
//         return "No Repeating Character Present in the Array";
//     }
// }

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter([2, 3, 4, 5])); //undefined
// ------------------------------
// const firstRecurringCharacter = (arr) => {
//     const hasValues = []
//     for (let i = 0; i < arr.length; i++) {
//         const currentNumber = arr[i]
//         const findNumber = hasValues.find(num => num === currentNumber)
//         if (findNumber) {
//             return findNumber
//         }
//         hasValues.push(currentNumber)
//     }
// };

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter([2, 3, 4, 5])); //undefined
// ------------------------------
// with Set():
// function firstRecurringCharacter(input) {
//     const charSet = new Set();
//     for (let i = 0; i < input.length; i++) {
//         if (charSet.has(input[i])) {
//             return input[i];
//         }
//         charSet.add(input[i]);
//     }
//     return undefined;
// } // O(n)

// function firstRecurringCharacter(array) {
//     let seenElements = new Set()
//     for (let i = 0; i < array.length; i++) {
//         if (seenElements.has(array[i])) {
//             return array[i]
//         } else {
//             seenElements.add(array[i])
//         }
//     }
//     return undefined;
// };

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter([2, 3, 4, 5])); //undefined
// ------------------------------
// ------------------------------
// ------------------------------

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// function firstRecurringCharacter(input) {
//     for (let i = 0; i < input.length; i++) {
//         for (let j = i + 1; j < input.length; j++) {
//             if (input[i] === input[j]) {
//                 return input[i];
//             }
//         }
//     }
//     return undefined;
// }; //0(n^2)

// function firstRecurringCharacter2(input) {
//     let map = {};
//     for (let i = 0; i < input.length; i++) {
//         // console.log(map[input[i]]);
//         if (map[input[i]]) {
//             return input[i];
//         } else {
//             map[input[i]] = true;
//         }
//     }
//     return undefined;
// }; //0(n)

// function firstRecurringCharacter3(input) {
//     let map = {};
//     for (let i = 0; i < input.length; i++) {
//         if (map[input[i]] !== undefined) {
//             return input[i];
//         } else {
//             map[input[i]] = i;
//         }
//         // console.log(map);
//         // console.log(input[i]);
//     }
//     return undefined;
// }; //0(n)

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter([2, 3, 4, 5])); //undefined
// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])); //2

// console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter2([2, 3, 4, 5])); //undefined

// console.log(firstRecurringCharacter3([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
// console.log(firstRecurringCharacter3([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
// console.log(firstRecurringCharacter3([2, 3, 4, 5])); //undefined

// +++++++++++++++++++++++++++++++++++++++++++++
// 198
// --Your First JavaScript--

// console.log('This isn\'t very nice'); // backslash - special meaning (ignore it)

// +++++++++++++++++++++++++++++++++++++++++++++
// 199
// --Variables--

// console.log(prompt('What is Your Username?'));

// var first = '5';
// var second = '10';
// var sum = Number(first) + Number(second);
// console.log(sum);
// -----------
// var first = prompt("Enter First Number");
// var second = prompt("Enter Second Number");
// var sum = Number(first) + Number(second);
// alert('The sum ' + first + ' + ' + second + ' is: ' + sum);

// +++++++++++++++++++++++++++++++++++++++++++++
// 200
// --Control Flow--

// var name = 'Billy';
// if (name === 'Billy') {
//     alert('Hi Billy');
// } else if (name === 'Susy') {
//     alert('Hi Susy');
// } else {
//     alert('Hmmm, I dont know you');
// };

// // Logical Operators: &&  ||  !

// +++++++++++++++++++++++++++++++++++++++++++++
// 202
// --Functions--

// function multiply(a, b) { }; //Parameters

// var total = multiply(4, 5); //Arguments

// +++++++++++++++++++++++++++++++++++++++++++++
// 205
// --Exercise: Build Facebook--

// var database = [
//     {
//         username: 'frenk',
//         password: '123'
//     }
// ];

// var newsFeed = [
//     {
//         username: 'Bobby',
//         timeLine: 'So tired from all that learning'
//     },
//     {
//         username: 'Sally',
//         timeLine: 'JavaScript is soo cooool!'
//     }
// ];

// var userNamePrompt = prompt('What is your username?');
// var passwordPrompt = prompt('What is your password?');

// function signIn(user, pass) {
//     if (user === database[0].username && pass === database[0].password) {
//         console.log(newsFeed);
//     } else {
//         alert('Sorry, something doesn\'t match :(');
//     }
// };

// signIn(userNamePrompt, passwordPrompt);

// +++++++++++++++++++++++++++++++++++++++++++++
// 206
// --JavaScript Terminology--

// function declaration
// function expression
// expression (something that produces a value)
// calling or invoking a function
// assign a variable
// functions vs. methods
// function thisIsAFunction() { };
// var obj = {
//     thisIsAMethod: function () { }
// };
// thisIsAFunction();
// obj.thisIsAMethod();

// +++++++++++++++++++++++++++++++++++++++++++++
// 207
// --Loops--

// // var todos = [
// //     'clean room',
// //     'brush teeth',
// //     'exercise',
// //     'study javascript',
// //     'eat healthy'
// // ];

// // var todosLength = todos.length;

// // for (var i = 0; i < todosLength; i++) {
// //     // todos[i] += '!';
// //     todos.pop();
// // };

// // console.log(todos);
// // --------------
// // var todos = [
// //     'clean room',
// //     'brush teeth',
// //     'exercise',
// //     'study javascript',
// //     'eat healthy'
// // ];

// // var todosLength = todos.length;
// // // var counterOne = 0;
// // var counterOne = 10;
// // // while (counterOne < 10) {
// // //     console.log(counterOne);
// // //     counterOne++;
// // // };
// // while (counterOne > 0) {
// //     console.log(counterOne);
// //     counterOne--;
// // };
// // --------------
// // var counterTwo = 10;
// // do {
// //     console.log(counterTwo);
// //     counterTwo--;
// // } while (counterTwo > 0);
// // --------------
// var todos = [
//     'clean room',
//     'brush teeth',
//     'exercise',
//     'study javascript',
//     'eat healthy'
// ];

// var todosLength = todos.length;
// // 1
// // for (var i = 0; i < todosLength; i++) {
// //     console.log(todos[i], i);
// // };
// // 2
// // todos.forEach(function (todo, i) {
// //     console.log(todo, i);
// // });
// // 3
// // todos.forEach((todo, i) => {
// //     console.log(todo, i);
// // });
// // 4
// function logTodos(todo, i) {
//     console.log(todo, i);
// };
// todos.forEach(logTodos);

// +++++++++++++++++++++++++++++++++++++++++++++
// 208
// --Exercise: Build Facebook 2--

// var database = [
//     {
//         username: 'frenk',
//         password: '123'
//     },
//     {
//         username: 'sally',
//         password: '123'
//     },
//     {
//         username: 'ingrid',
//         password: '123'
//     },
//     {
//         username: 'andrei',
//         password: '123'
//     }
// ];

// var newsFeed = [
//     {
//         username: 'Bobby',
//         timeLine: 'So tired from all that learning'
//     },
//     {
//         username: 'Sally',
//         timeLine: 'JavaScript is soo cooool!'
//     },
//     {
//         username: 'Mitch',
//         timeLine: 'JavaScript is aaaaawesome!'
//     }
// ];

// function isUserValid(user, pass) {
//     for (var i = 0; i < database.length; i++) {
//         if (database[i].username === user && database[i].password === pass) {
//             return true;
//         }
//     }
//     return false;
// };

// function signIn(user, pass) {
//     if (isUserValid(user, pass)) {
//         console.log(newsFeed);
//     } else {
//         alert('Sorry, something doesn\'t match :(');
//     }
// };

// var userNamePrompt = prompt('What is your username?');
// var passwordPrompt = prompt('What is your password?');

// signIn(userNamePrompt, passwordPrompt);

// +++++++++++++++++++++++++++++++++++++++++++++
// 212
// --Advanced Control Flow--

// ternary operator
// condition ? expr1 : expr2;

// function isUserValid(bool) {
//     return bool;
// };

// // var answer = isUserValid(true) ? "You may enter" : "Access Denied";
// var answer = isUserValid(true) ? "You may enter" : "Access Denied";

// var automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" :
//     "not available");

// function condition() {
//     if (isUserValid(true)) {
//         return "You may enter";
//     } else {
//         return "Access Denied";
//     }
// };

// var answer2 = condition();

// console.log(answer);
// console.log(automatedAnswer);
// console.log(answer2);
// ------------------
// switch() ... case ... break

// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             whatHappens = "You encounter a monster";
//             break;
//         case "backward":
//             whatHappens = "You arrived home";
//             break;
//         case "right":
//             whatHappens = "You found a river";
//             break;
//         case "left":
//             whatHappens = "You run into a troll";
//             break;
//         default:
//             whatHappens = "Please enter a valid direction";
//     }
//     return whatHappens;
// };

// console.log(moveCommand("forward"));
// console.log(moveCommand("backward"));
// console.log(moveCommand("right"));
// console.log(moveCommand("left"));
// console.log(moveCommand(12345));

// +++++++++++++++++++++++++++++++++++++++++++++
// 213
// --ES5 and ES6--

// let const

// const player = "Bobby";
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
//     console.log('inside', wizardLevel);
// };

// console.log('outside', wizardLevel);
// --------------
// var

// const player = "Bobby";
// let experience = 100;
// var wizardLevel = false;

// if (experience > 90) {
//     var wizardLevel = true;
//     console.log('inside', wizardLevel);
// };

// console.log('outside', wizardLevel);
// --------------
// experience = 80;
// console.log(experience);
// player = "John";
// console.log(player);
// --------------
// but:

// const obj = {
//     player: "Bobby",
//     experience: 100,
//     wizardLevel: false
// };

// obj.wizardLevel = true;
// console.log(obj.wizardLevel);
// --------------
// Destructuring

// const obj = {
//     player: "Bobby",
//     experience: 100,
//     wizardLevel: false
// };

// const { player, experience } = obj;
// let { wizardLevel } = obj;

// console.log(player);
// console.log(experience);
// console.log(wizardLevel);
// --------------
// Object properties

// const name = 'Jon Snow';

// const obj = {
//     [name]: 'hello',
//     ['Agent ' + 'Smith']: 'Mr. Anderson',
//     [1 + 2]: 'Hahaha'
// };

// console.log(obj);
// --------------
// const a = "Simon";
// const b = true;
// const c = {};
// // instead:
// // const obj = {
// //     a: a,
// //     b: b,
// //     c: c
// // }
// // ========>
// const obj = { a, b, c };

// console.log(obj);

// --------------
// Template strings

// // const hello = "greeting";
// const name = "Simon";
// const age = 34;
// const pet = "horse";
// // const greeting = "Hello" + name + "you seem to be doing" + hello + "!";

// const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have.`

// console.log(greetingBest);

// --------------
// Default arguments

// function greet(name = '', age = 30, pet = 'lizard') {
//     return `Hello ${name}. You seem to be ${age - 10}. What a lovely ${pet} you have.`
// };

// console.log(greet());
// console.log(greet('Walt', 60, 'lab'));

// --------------
// Symbol

// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');

// console.log(sym2 === sym3);

// --------------
// // arrow function //  \m/

// function add(a, b) {
//     return a + b;
// };
// // shorthand when single return:
// const addArrow = (a, b) => a + b;

// +++++++++++++++++++++++++++++++++++++++++++++
// 214
// --Advanced Functions--

// function first() {
//     var greet = 'Hi';
//     function second() {
//         alert(greet);
//     }
//     return second;
// };

// var newFunc = first();
// newFunc();
// -------------
// const first = () => {
//     const greet = 'Hi';
//     const second = () => {
//         const name = "Bobby";
//         alert(greet);
//     }
//     return second;
// };

// const newFunc = first();
// newFunc();

// *Closures - a function ran, than executed. It's never going to execute again. But, it's going remember that there are referances to those variables. So the child scope always has access to the parent scope.

// *Currying
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;

// console.log(multiply(3, 4));
// console.log(curriedMultiply(3)(4));

// const multiplyBy5 = curriedMultiply(5);

// console.log(multiplyBy5(3));

// *Compose

// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;

// console.log(compose(sum, sum)(5));

// Avioding Side Effects, functional purity

// Deterministic (determinism)

// +++++++++++++++++++++++++++++++++++++++++++++
// 215
// --Advanced Arrays--

// const array = [1, 2, 10, 16];

// const double = [];
// ----------------------------

// *forEach

// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// });

// console.log('forEach:', double);
// ----------------------------

// map, filter, reduce

// *map

// const mapArray = array.map((num) => {
//     return num * 2;
// });

// console.log('map:', mapArray);
// ----------------------------

// shorthand:

// const newArray = array.forEach(num => double.push(num * 2));

// console.log('forEach:', double);

// const mapArray = array.map(num => num * 2);

// console.log('map:', mapArray);
// // ----------------------------

// // *filter

// const filterArray = array.filter(num => num > 5);

// console.log('filter', filterArray);

// // *reduce

// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num;
// }, 2); //<==accumulator value

// console.log('reduce', reduceArray); // sum of array + acc value

// +++++++++++++++++++++++++++++++++++++++++++++
// 216
// --Advanced Objects--

// reference type

// console.log([] === []); //false
// console.log([1] === [1]); //false

// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };

// console.log(object1 === object2); //true
// console.log(object1 === object3); //false

// context vs scope

// function b() {
//     let a = 4;
// };
// // console.log(a);
// console.log(this);
// console.log(this === window);
// --------------
// function a() {
//     console.log(this);
// };
// a();

// const object4 = {
//     a: function () {
//         console.log(this);
//     }
// };
// object4.a();

// instantiation

// class Player {
//     constructor(name, type) {
//         console.log('Player Class', this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
//     }
// };

// class Warlock extends Player {
//     constructor(name, type) {
//         // console.log('Warlock Class', this); //before super() doesn't work
//         super(name, type);
//         console.log('Warlock Class', this);
//     }
//     play() {
//         console.log(`Weeee I'm a ${this.type}`);
//     }
// };

// const warlock1 = new Warlock('Jack', 'Master');
// const warlock2 = new Warlock('Kyle', 'Magician');

// console.log(warlock1.introduce());
// console.log(warlock1.play());
// console.log(warlock2.introduce());
// console.log(warlock2.play());

// +++++++++++++++++++++++++++++++++++++++++++++
// 217
// --ES7--

// includes()

// console.log('Hellooo'.includes('o'));

// const pets = ['cat', 'dog', 'bat']
// console.log(pets.includes('bat'));
// console.log(pets.includes('bird'));

// Exponentiation operator **

// const square = (x) => x ** 2;
// console.log(square(2));
// console.log(square(8));
// console.log(square(10));

// const cube = (y) => y ** 3;
// console.log(cube(2));
// console.log(cube(8));
// console.log(cube(10));

// +++++++++++++++++++++++++++++++++++++++++++++
// 218
// --ES8--

// string padding: .padStart(), .padEnd()

// console.log('Turtle'.padStart(10)); // 10 "total" spaces used including the string
// console.log('Turtle'.padEnd(10)); // 10 "total" spaces used including the string

// trailing commas in functions, parameter lists and calls

// const fun = (
//     a,
//     b,
//     c,
//     d,
// ) => console.log(a);
// fun(1, 2, 3, 4,);

// Object.values() and Object.enteries()
// oldone was: Object.keys

// let obj = {
//     username0: 'Santa',
//     username1: 'Rudolf',
//     username2: 'Mr.Grinch'
// };

// Object.keys(obj).forEach((key, index) => {
//     console.log(key, obj[key]);
// });

// Object.values(obj).forEach(value => {
//     console.log(value);
// });

// Object.entries(obj).forEach(value => {
//     console.log(value);
// });

// Object.entries(obj).map(value => {
//     console.log(value[1] + value[0].replace('username', ''));
// });

// +++++++++++++++++++++++++++++++++++++++++++++
// 220
// --ES10 (ES2019)--

// flat()

// const array = [1, 2, 3, 4, 5];
// console.log(array.flat());

// const array2 = [1, [2, 3], [4, 5]];
// console.log(array2.flat());

// const array3 = [1, 2, [3, 4, [5]]];
// console.log(array3.flat(2));

// const jurassicPark = [['a', 'b'], ['c'], ['d'], ['e', 'f'], [[[['Tyrex']]], ['h']], ['i', 'j']];

// console.log(jurassicPark.flat(50));

// const enteries = ['bob', 'sally', , , , , , , , , , , , , 'cindy'];
// console.log(enteries.flat());

// -----------------------------
// flatMap()

// const jurassicPark = [['a', 'b'], ['c'], ['d'], ['e', 'f'], [[[['T-Rex']]], ['h']], ['i', 'j']];

// const jurassicParkChaos = jurassicPark.flatMap(creature => creature + 'T-Rex')
// console.log(jurassicParkChaos);

// -----------------------------
// trimStart() , trimEnd()

// const userEmail1 = '           someone@somewhere.com';
// const userEmail2 = 'someone@omg                     ';

// console.log(userEmail1.trimStart());
// console.log(userEmail2.trimEnd());

// -----------------------------
// fromEntries()

// const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['Hansel', 18]];

// const obj = Object.fromEntries(userProfiles);
// console.log(obj);
// console.log(Object.entries(obj));
// console.log(userProfiles);

// -----------------------------
// try ... catch

// try {
//     true + 'hi';
// } catch {
//     console.log('You messed up');
// };

// try {
//     bob + 'hi';
// } catch (err) {
//     console.log('You messed up', err);
// };
// -----------------------------
// -----------------------------
// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line

// const array = [[1], [2], [3], [[[4]]], [[[5]]]]
// console.log(array.flat(2));

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]

// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// console.log(greeting.flatMap(x => x.join(' ')));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

// console.log(greeting.flatMap(x => x.join(' ')).join(' '));

//#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// console.log(trapped.flat(Infinity));
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';
// const userEmail1 = userEmail3.trimStart();
// console.log(userEmail1.trimEnd());
// console.log(userEmail3.trimEnd().trimStart());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// console.log(Object.entries(users));

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// const usersArray = Object.entries(users);
// const updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2]);
// console.log(updatedUsersArray);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// console.log(Object.fromEntries(updatedUsersArray));

// +++++++++++++++++++++++++++++++++++++++++++++
// 221
// --Advanced Loops--

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//     apples: 5,
//     oranges: 10,
//     grapes: 1000
// };

// 1. for
// for (let i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
// };

// 2. forEach
// basket.forEach(item => console.log(item));

// 3. for of
// Iterating - arrays, strings
// for (item of basket) {
//     console.log(item);
// };
// for (item of 'basket') {
//     console.log(item);
// };

// 4. for in - object properties
// Enumerating - objects
// for (item in detailedBasket) {
//     console.log(item);
// };

// +++++++++++++++++++++++++++++++++++++++++++++
// 222
// --ES2020 Part 1--

// 1. BigInt

// console.log(typeof 1n);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(9007199254740991 + 10);
// console.log(9007199254741000 - 1);
// console.log(9007199254741000n - 1n);

// 2. Nullish Coalescing Operator - ??

// 3. Optional Chaining Operator - ?

// let will_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.4,
//         weight: 6
//     }
// };

// let andrei_pokemon = {
//     raichu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30
//     }
// };

// let weight = will_pokemon.pikachu.weight;
// let weight2 = andrei_pokemon.pikachu.weight;
// console.log('weight:', weight);
// console.log('weight2:', weight2);

// +++++++++++++++++++++++++++++++++++++++++++++
// 223
// --ES2020 Part 2--

// 3. Optionl Chaining Operator - ?

// let will_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.4,
//         weight: 6
//     }
// };

// let andrei_pokemon = {
//     raichu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30
//     }
// };

// let andrei_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30
//     }
// };

// if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
//     let weight2 = andrei_pokemon.pikachu.weight;
//     console.log(weight2);
// } else {
//     let weight2 = undefined;
//     console.log(weight2);
// };

// let weight3 = andrei_pokemon?.pikachu?.weight;
// console.log(weight3);

// +++++++++++++++++++++++++++++++++++++++++++++
// 224
// --ES2020 Part 3--

// 2. Nullish Coalescing Operator - ??

// let andrei_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30,
//         power: ''
//     }
// };

// let power = andrei_pokemon?.pikachu?.power || 'no power';
// console.log(power);
// -------------------------
// let andrei_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30,
//         // power: ''
//         power: 0
//     }
// };

// let power = andrei_pokemon?.pikachu?.power ?? 'no power';
// console.log('power:', power);

// +++++++++++++++++++++++++++++++++++++++++++++
// 225
// --ES2020: globalThis--

// console.log(globalThis);
// console.log(globalThis === window);

// +++++++++++++++++++++++++++++++++++++++++++++
// 226
// --ES2021--

// const str = 'ZtM is the worst of the worst';
// console.log(str.replaceAll('worst', 'best'));
// console.log(str);
// const b = str.replaceAll('worst', 'best');
// console.log(b);
// const c = str.replace('worst', 'best');
// console.log(c);

// +++++++++++++++++++++++++++++++++++++++++++++
// 227
// --Debugging--

// const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
//     // console.log('array: ', array);
//     // console.log('accumulator: ', accumulator);
//     debugger;
//     return accumulator.concat(array)
// }, []);

// +++++++++++++++++++++++++++++++++++++++++++++
// 228
// --Modules--

// Code reusability
// Pollution of the Global Namespace
// Lack of Dependency Resolution
// Module Bundler - Common JS + Browserify
// ES6 + Webpack2 - export(default) import

// +++++++++++++++++++++++++++++++++++++++++++++
