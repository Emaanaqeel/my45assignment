"use strict";
/* 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a
 message that should be printed on the shirt. The function should print a sentence
 summarizing the size of the shirt and the message printed on it. Call the functon*/
function make_shirt(size, label) {
    //return size +label
    return `my shirt size is ${size} and ${label}`;
}
let myfun = make_shirt(36, " The sunny day");
console.log(myfun);
let myfun2 = (size, label) => {
    return size + label;
};
console.log(myfun2(36, "the cool day"));
