"use strict";
/*44 Sandwiches: Write a function that accepts a array of items a person wants on a
 sandwich. The function should have one parameter that collects as many items as the
 function call provides, and it should print a summary of the sandwich that is being
 ordered. Call the function three times, using a different number of arguments each time.*/
function mysandwichs(...item) {
    return `I want a sandwich of ${item}`;
}
let collection1 = mysandwichs("ham", "cheese", "lettace");
let collection2 = mysandwichs("turkey", "mayo");
let collection3 = mysandwichs();
console.log(collection1);
console.log(collection2);
console.log(collection3);
