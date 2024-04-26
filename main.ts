/* 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print
 a message indicating the number of people you are inviting to dinner.*/

 let myGuest: string []=["asma","emaan","erum","laiba"]

 console.log(`I am inviting ${myGuest.length}friends to my dinner which are following\n`)

 for(let i = 0; i< myGuest.length; i++){
    console.log(`${i+1}. ${myGuest[i]}`)
 }
