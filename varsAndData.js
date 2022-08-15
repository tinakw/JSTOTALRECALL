// A. Q + A
// 1-How do we assign a value to a variable?
// To assign a value to a variable we use the = (assignment operator); let or const creates/declares the variable
// 
// 2-How do we change the value of a variable?
// To change the value of a variable we reassign values in let statements.
// 
// 3-How do we assign an existing variable to a new variable?
// Use the assignment operator to reassign existing variable a new variable.
// 
// 4-Remind me, what are declare, assign, and define?

// declare: initializes a variable ie. var (pre ES6), let, const;
// assign: gives value to a variable ie. '=';
// define: is the code that describes the value;

// 5-What is pseudocoding and why should you do it?
// Plain language description of the steps in algorithm or another system; it lays out the plan
// for writing the code.

// 6-What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 50% or more time should be spent thinking about solving the problem.

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// 1-Create a variable called firstVariable

// 2-Assign it the value of the string "Hello World"

// 3-Change the value of this variable to some number

// 4-Store the value of firstVariablein a new variable called secondVariable

// 5-Change the value of secondVariableto any string.

// 6-What is the value of firstVariable?

// let firstVariable = 'Hello World';
// firstVariable = 7;
// let secondVariable = firstVariable;
// secondVariable = 'Its a beautiful morning!';
//  console.log(firstVariable); //output = 7

// // 7-Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable your Nameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// let yourName = 'tina';
// console.log('Hello, my name is ' + yourName);

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

// const a = 4;
// const b = 53;
// const c = 57;
//    const d = 16;
//  const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//    console.log(true || false);
//   console.log(false && false && false && false && false || true);
//    console.log(false === false)
//  console.log(e === 'Kevin');
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48');

// D. The farm

// Declare a variable animal. Set it to be either "cow" or something else

// Write code that will print out "mooooo" if the it is equal to cow


// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

// Commit

// let animal = 'donkey';
// if (animal === 'cow'){
//     console.log('mooo');
// } else {
//     console.log("Hey! You're are not a cow.")
// }

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// let personAge = 15;
// if (personAge >= 16){
//     console.log('Here are the keys!');
// }else {
//     console.log("Sorry, you're too young.")
// }