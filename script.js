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

function Crane(a, b) {
  // some logics  
}

// all object constructors are natively functions, 
// the object Crane.constructor points to is an object of type Function, in other words the function constructor.

// Crane.prototype.constructor points to its own constructor.

// Same exact thing happens when you define a class using class keyword:
class Crane {
  constructor(){

  }
}

// But, the Crane.constructor property points to Function constructor.
//  Now the Crane object itself can be the ”prototype” of another object. 
// And that object can be the prototype of another object. And so on. The chain can go on forever.