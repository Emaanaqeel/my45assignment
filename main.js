"use strict";
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a
 car, and make a list that stores several examples. Use your list to print a series of
  statements about these items, such as “I would like to own a Honda motorcycle.”*/
let myTransportation = ["car", "bike", "bus", "train", "aeroplane"];
//1st method (loop)
//  for(let i =0; i< myTransportation.length; i++){
// console.log(`I would like to own a ${myTransportation[i]}`);
// }
//2nd method
myTransportation.map((a) => {
    console.log(`I would like to own a ${a}`);
});
