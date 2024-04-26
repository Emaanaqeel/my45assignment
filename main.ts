/*31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is
 printed.*/

 let userName:string []= ["emaan","admin","erum","asma","laiba","dua"]
 //remove all the name in the arry
 userName = []
//console.log(userName);

if(userName.length > 0){
for(let i =0; i < userName.length ; i++){
    if(userName[i]== "admin") {
        console.log(`\nhello ${userName[i]},  would you like to see status report?\n`);
    }
    else  {
        console.log(`hello ${userName[i]} thank you for logginig in again!`)
    }
}
}else {
    console.log(`we need to find some  users ! `)
}
