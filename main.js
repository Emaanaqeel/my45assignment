"use strict";
/* 32 Checking Usernames: Do the following to create a program that simulates how websites
 ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new
usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should
 not be accepted.*/
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Emaan", "alia", "erum", "laiba", "asma"];
let new_users = ["Aima", "Dua", "Laiba", "fatima", "Erum"];
//we will use foreach method
new_users.forEach(new_users => {
    let new_userlower = new_users.toLowerCase();
    //we will use some() method 
    let userNametaken = current_users.some(current_users => current_users.toLowerCase()
        === new_userlower);
    //we will apply conditions
    if (userNametaken) {
        console.log(`${new_users} needs to choose another name because it's already 
taken `);
    }
    else {
        console.log(`${new_users} is new member added`);
        current_users.push(new_users);
    }
});
console.log(current_users);
