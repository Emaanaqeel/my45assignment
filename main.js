"use strict";
/*16 More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
  program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guestto the end of your list.
• Print a new set of invitation messages, one for each person  in your list.*/
let myGuest = ["emaan ", "laiba", "erum", "asma"];
console.log(myGuest);
console.log(`we have 3 more guests to invite on dinner\n`);
//add three more guest
//at th begining
myGuest.unshift("shanaya");
console.log(myGuest);
//at the middle
myGuest.splice(2, 0, "fatima");
console.log(myGuest);
//at the last
myGuest.push("saba");
console.log(myGuest);
//print all frindes list 
for (let a = 0; a < myGuest.length; a++) {
    console.log(`hi ${myGuest[a]} you are inviteed on dinner`);
}
