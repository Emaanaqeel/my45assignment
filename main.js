"use strict";
/*41 Magicians: Make a array of magician’s names. Pass the array to a function called
 show_magicians(), which prints the name of each magician in the array.*/
let magiciannames = ["moosa", "pehlaj", "subhan", "aqeel"];
function show_magicians() {
    for (let magicianname of magiciannames) {
        console.log(magicianname);
    }
}
show_magicians();
