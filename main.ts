/* 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you
 invite? Make a list that includes at least three people you’d like to invite to dinner.
  Then use your list to print a message to each person, inviting them to dinner*/

  let myGuest : string[] = ["emaan","erum","laiba","muzaina","asma"];

  //1st method loop

  for(let i = 0;i< myGuest.length; i++){
    console.log(`hi ${myGuest[i]} you are invited for dinner on monday at my place\n`);
  }
  // 2 method map
  //myGuest.map((ib)=>{
  //  console.log(`hi ${myGuest[ib]} you are invited for dinner on monday at my place\n`);
  
 // })
