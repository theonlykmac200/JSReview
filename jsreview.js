// Part One
// // A. Q + A
// How do we assign a value to a variable?
//      -using Let or Const and declaring the variable and adding the = operator and then giving it a value. var is possible to use but has challenges and is not the currently perferred 

// How do we change the value of a variable?
        // make sure you used let vs const so you can reassign it but it can be changed through a few differency ways.  You can change it be re-declaring it or changing it in the resulting actions of some other piece of code. 

// How do we assign an existing variable to a new variable?
        // declare the new variable and the assign the value of it as the existing variable. 
// Remind me, what are declare, assign, and define?
        // declare = let or const (var)
        //assign Taking idenifying variable using the assigment operator and a value
        // define = variables are defined identifiers by its entire statement.  ex: let name = "Queen Latifah"
// What is pseudocoding and why should you do it:
        //the idea of writing out the steps or instructions of what you are going to code before actually starting to code. It help because it allows you to think through the components of the code that you need and how the parts will fit together/
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    // I would think this is a pretty subjective question.  Personally I think it should be at leasta quarter to half of the time if you are doing it right.  Of course this also depends on the complexity of the built.  But understanding the scope will make the actual build much easier. 

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable = "Hello World"
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
firstVariable = 25;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "coding is fun"
// What is the value of firstVariable?
console.log(secondVariable)

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

const yourNameand = "Kelly McDonald"
console.log("Hello my name is " + yourNameand)


//C. Booleans

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
 let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow"){
    console.log("mooooo")
}else{
    console.log("Hey! You're not a cow.")
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit