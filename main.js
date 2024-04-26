"use strict";
/*43 Unchanged Magicians: Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names. Because the original array
 will be unchanged, return the new array and store it in a separate array. Call
 show_magicians() with each array to show that you have one array of the original names
  and one array with the Great added to each magician’s name.*/
let magiciannames2 = ["moosa", "pehlaj", "subhan", "aqeel"];
//making a copy of array
let magiciannamescopy = [...magiciannames2];
function show_magicians(greet) {
    let wihtgreetings = "";
    for (let item of magiciannames2) {
        wihtgreetings += `${greet} ${item}\n`;
    }
    return wihtgreetings;
}
let mygreetings = show_magicians("hello ");
let makearray = mygreetings.split('\n');
console.log(makearray);
console.log(magiciannames2);
