/*15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so
 you need to send out a new set of invitations. You’ll have to think of someone else to
  invite.
  • Start with your program from Exercise 14. Add a print statement at the end of
   your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the
 name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in
 your list.*/

 let myGuest :string[]=["emaan ","laiba","erum","asma"];

 console.log(`due to some personal reason ${myGuest[1]} will not come on dinner` );
 myGuest[1]="shanaya";
console.log(`new list of myGuest who are coming to my dinner\n`);

 for(let e = 0; e < myGuest.length; e++){
    console.log(`${e+1}.${myGuest[e]}`);
 }
