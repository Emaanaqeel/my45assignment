"use strict";
/*40 Album: Write a function called make_album() that builds a Object describing a music
album. The function should take in an artist name and an album title, and it should return
 a Object containing these two pieces of information. Use the function to make three
 dictionaries representing different albums. Print each return value to show that Objects
  are storing the album information correctly. Add an optional parameter to make_album()
 that allows you to store the number of tracks on an album. If the calling line includes
 a value for the number of tracks, add that value to the album’s Object. Make at least one
  new function call that includes the number of tracks on an album.*/
function make_album(artistname, albumTitle) {
    return { artistname, albumTitle };
}
let album1 = make_album("ali", "rang-e-mohabat");
let album2 = make_album("Madad", "roshan andhera");
let album3 = make_album("ayaz", "mausam -e- dil");
console.log(album1);
console.log(album2);
console.log(album3);
//number of tracks
function make_album2(artistname, albumTitle, numberoftracks) {
    return { artistname, albumTitle, numberoftracks };
}
let album4 = make_album2("ali", "rang-e-mohabat", 30);
let album5 = make_album2("Madad", "roshan andhera", 55);
let album6 = make_album2("ayaz", "mausam -e- dil");
console.log(album4);
console.log(album5);
console.log(album6);
