/*37 Large Shirts: Modify the make_shirt() function so that shirts are large by default
 with a message that reads I love TypeScript. Make a large shirt and a medium shirt with
  the default message, and a shirt of any size with a different message.*/

/*  function make_shirt(size :string ,label :string){
    return size + label
  }
let  myfunction = make_shirt("large" ," I love typescript")

console.log(myfunction);*/

//making large as default


function make_shirt(label :string ,size :string = "large" ){
    return size + label
  }
let  myfunction = make_shirt(" I love typescript")

console.log(myfunction);

//making medium as default

function make_shirt2(label :string ,size :string = "medium" ){
    return size + label
  }
let  myfunction2 = make_shirt2(" I love typescript")

console.log(myfunction2);

//making any size

function make_shirt3(label :string ,size :string  ){
    return size + label
  }
let  myfunction3 = make_shirt3(" any size "," I love typescript")

console.log(myfunction3);