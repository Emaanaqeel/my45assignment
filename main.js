"use strict";
/*24 More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one
 False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
//equility and inequility
let myName = "Ali";
console.log(myName == "Ali"); //true equal to
console.log(myName !== "ali"); // true not equal to
//numberic
let myNumber = 10;
console.log(myNumber == 10); //true 
console.log(myNumber !== 10); //false
console.log(myNumber > 5); //true    greater than
console.log(myNumber < 5); //false    less than
console.log(myNumber <= 5); //false    less than equal to
console.log(myNumber >= 5); //true    greater than equal to
//and && ====or|| (pipe)
let num1 = 10;
let num2 = 5;
console.log(num1 > 9 && num2 < 5); // false
console.log(num1 > 9 || num2 < 5); //true
let myArry = [2, 4, "ali"];
let mystring = "ali";
console.log(Array.isArray(myArry));
console.log(Array.isArray(mystring));
