//  ***********************************
//  A guide to prototype-based class inheritance in JavaScript
// *************************************

//   The inherited object contains all properties from its parent object.
//  In addition, it will also specify its own set of unique properties.

// JavaScript objects use prototype-based inheritance.
// when methods or properties are attached to object’s prototype they become available for use on that object and its descendants.

//  When writing code, you will not even need to touch the prototype property directly.
// When you use class and extends keywords internally JavaScript will still use prototype-based inheritance.  It just simplifies the syntax.

// ******* Prototype-based Object Inheritance *******

// JavaScript supports object inheritance via something known as prototypes.
// There is an object property called prototype attached to each object.

//  ********** Object Constructor Functions **********

// Functions can be used as object constructors.
// The name of a constructor function usually starts with an uppercase letter to draw the distinction between regular functions.
// Object constructors are used to create an instance of an object.
// Some of the JavaScript built-in objects were already created following the same rules.
// For example Number, Array and String are inherited from Object.
// As we discussed earlier, this means that any property attached to Object becomes automatically available on all of its children.

//  ********* constructors ***********

function CraneA(a, b) {
  // some logics
}

// all object constructors are natively functions,
// the object Crane.constructor points to is an object of type Function, in other words the function constructor.

// Crane.prototype.constructor points to its own constructor.

// Same exact thing happens when you define a class using class keyword:
class CraneB {
  constructor() {}
}

// But, the Crane.constructor property points to Function constructor.
//  Now the Crane object itself can be the ”prototype” of another object.
// And that object can be the prototype of another object. And so on. The chain can go on forever.

// *****************************************************
// Prototype-Based Inheritance
// *****************************************************

// ES5 style syntax: *************

// Define class Bird
function Bird(type, color) {
  //Define properties
  this.type = type;
  this.color = color;
  this.eggs = 0;

  //Define methods
  this.fly = function() {
    console.log(`${this.color} ${this.type} is flying.`);
  };

  this.walk = function() {
    console.log(`${this.color} ${this.type} is walking.`);
  };

  this.lay_egg = function() {
    this.eggs++;
    console.log(`${this.color} ${this.type} laid an egg!`);
  };
}

// The whole point of object inheritance is to use one common class that defines all properties and methods that all children of that class will automatically inherit.
// This makes code shorter and saves memory.

// *********** Not All Birds Are Made Alike **************

// Let’s create several different types of birds.
// Even though all of them can still fly, walk and lay_eggs (because they are inherited from main Bird class,) each unique bird type will add its own methods unique to that class.
// For example, only parrots can talk. And only ravens can solve puzzles. Only a songbird can sing.

// Parrot and inherit it from Bird
function Parrot(type, color) {
  //We must call parent constructor and pass this to it
  Bird.call(this, type, color);

  //Define method talk()
  this.talk = function() {
    console.log(`${this.color} ${this.type} is talking!`);
  };
}

// Bird.call simply adds all of its properties and methods to Parrot.
// In addition to that, we are also adding our own method: talk.

// Now parrots can fly, walk, lay eggs and talk!
// But we never had to define fly walk and lay_eggs methods inside Parrot itself.

// Raven and inherit it from Bird;
function Raven(type, color) {
  Bird.call(this, type, color);

  this.solve_puzzle = function() {
    console.log(`${this.color} ${this.type} is solving a puzzle!`);
  };
}

// Ravens are unique in that they can solve puzzles.

// Songbird and inherit it from Bird;
function Songbird(type, color) {
  Bird.call(this, type, color);

  this.sing = function() {
    console.log(`${this.color} ${this.type} is singing.`);
  };
}

// Songbirds can sing.

// instantiate a sparrow using the oribinal Bird constructor
let sparrow = new Bird('sparrow', 'gray');
console.log(sparrow.fly()); // gray sparrow is flying.
console.log(sparrow.walk()); // gray sparrow is walking.
console.log(sparrow.lay_egg()); // gray sparrow laid an egg!
// console.log(sparrow.talk());
// Error in /script.js (96:21): sparrow.talk is not a function

// Sparrow can fly, walk and lay eggs, because it was inherited from Bird that defines all those methods.
// But a sparrow cannot talk. Because it is not a Parrot.

// Parrot class
let parakeet = new Parrot('parakeet', 'lime yellow');
parakeet.fly();
parakeet.talk();
// parakeet.sing(): // Error, only Songbird can sing
// Because Parrot is inherited from Bird, we get all of its methods.
// A parakeet has the unique ability to talk, but it cannot sing!

//Raven class
let raven = new Raven('raven', 'black');
raven.solve_puzzle(); // black raven is solving a puzzle!

// **************************************
// ES6 style syntax
// **************************************

// The ES5-style constructors can be a bit cumbersome.
// we now have class and extends keywords to accomplish exactly the same thing we just did in the previous section.

// class replaces function
class Chara {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  fly() {
    console.log(`${this.color} ${this.type} is flying.`);
  }
  walk() {
    console.log(`${this.color} ${this.type} is walking.`);
  }
  lay_egg() {
    this.eggs++;
    console.log(`${this.color} ${this.type} laid an egg!`);
  }
}

// `extends` and `super()` replace `Bird.call` from the privious examples.

class Suga extends Chara {
  constructor(type, color) {
    super(type, color);
    this.type = type;
    this.color = color;
  }
  talk() {
    console.log(`${this.color} ${this.type} is talking!`);
  }
}

// `super()` calls the constructor of the parent class;

// This syntax looks a lot more manageable!
// Now we can instantiate the object:
let meroSuga = new Suga('parakeet', 'orange');
console.log(meroSuga.talk()); // orange parakeet is talking!

//  1. Class inheritance helps establish a hierarchy of objects.
// 2. Classes are the fundamental building blocks of your application design and architecture. They make working with code a bit more human.
// Inheritance helps us write cleaner code and re-purpose the parent object to save memory on repeating object property and method definitions.
// Vehicle class can be a parent of Motorcycle, Car, or Tank.
// Fish can be used to inherit Shark, Goldfish, Pike and so on.
