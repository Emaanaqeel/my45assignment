"use strict";
/*35 Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name
  of each animal. • Modify your program to print a statement about each animal, such as A
  dog would make a great pet. • Add a line at the end of your program stating what these
  animals have in common. You could print a sentence such as Any of these animals would
   make a great pet!*/
let animalnames = ["goat", "cow", "sheep", "camel"];
for (let i of animalnames) {
    console.log([i]);
}
for (let k of animalnames) {
    console.log(`${k} is a domestic animal`);
}
console.log(`\nAll these animals  ${animalnames[0]},${animalnames[1]},${animalnames[2]},and ${animalnames[3]} meat is halal in islam \n`);
