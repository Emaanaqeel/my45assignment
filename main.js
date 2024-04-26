"use strict";
/* 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in
 time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them know
  you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re
still invited.*/
let myGuest = ["asma", "emaan", "erum", "laiba", "shanaya", "fatima"];
console.log(`sorry table is not availble i can invite only two people\n`);
//remove all 4 last element
let guest1 = myGuest.pop();
console.log(`sorry ${guest1} you are not invited!`);
let guest2 = myGuest.pop();
console.log(`sorry ${guest2} you are not invited!`);
let guest3 = myGuest.pop();
console.log(`sorry ${guest3} you are not invited!`);
let guest4 = myGuest.pop();
console.log(`sorry ${guest4} you are not invited!`);
for (let i = 0; i < myGuest.length; i++) {
    console.log(`hi ${myGuest[i]} you are still invited`);
}
