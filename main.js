/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

// String
let firstName = "Greta";
let lastName = "Nora";

let fullName = firstName + " " + lastName;

const color = "Blue";

// Number
const price = 20;
let age = 30;

// Boolean
let buttonClicked = false;
const isValid = true;

// Array
let hobbies = ["Reading", "Swimming", "Cooking"];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Displaying the values
console.log("String:", fullName, color);
console.log("Number:", age, price);
console.log("Boolean:", buttonClicked, isValid);
console.log("Array:", hobbies, daysOfWeek);

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

// Basic arithmetic operations
let a = 10;
let b = 5;

// Addition
let sum = a + b;
console.log("Sum:", sum); // Output: 15

// Subtraction
let difference = a - b;
console.log("Difference:", difference); // Output: 5

// Multiplication
let product = a * b;
console.log("Product:", product); // Output: 50

// Division
let division = a / b;
console.log("Result:", division); // Output: 2

// Shorthand operators
let num = 2;

// Increment (++)
num++;
console.log("Incremented:", num); 

// Decrement (--)
num--;
console.log("Decremented:", num); 

// Addition assignment (+=)
num += 4;
console.log("result:", num); 

// Subtraction assignment (-=)
num -= 3;
console.log("result:", num); 

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// IF/ELSE conditional statement
if (userName !== "" && userAge >= 18 && !userIsBlocked) {
  // All conditions are true
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`Welcome, ${userName}! You are now logged in.`);
} else {
  console.log("Error: Unable to log in");
}
console.log("User Is Logged In:", userIsLoggedIn);


/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = true;

//your code here
const userTitle = userMale ? "Mr" : "Mrs";

console.log(userTitle);
