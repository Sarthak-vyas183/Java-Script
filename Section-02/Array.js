// let arr = [1,8,9,7,6,5];
// console.log(arr[1])

// let arr2 = ["shaktiman", "nagraj", "mogli"];
// console.log(arr2[0]);

let myArr = [1,0,4,3,9];
  myArr.push(7);      //add and element at last index
  //console.log(myArr)
  myArr.pop()         // pop and element from last index
  //console.log(myArr)  

 let ret =  myArr.shift()       //  The shift() method of Array instances removes the first element from an array and returns that removed element.
 //console.log(ret)
 //console.log(myArr)

 myArr.unshift(7)             // the unshift  method of array add an element at the start : 
//console.log(myArr)

//console.log(myArr.includes(9))   //The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

//console.log(myArr.indexOf(9))  // it gives index of an element 

//console.log(typeof myArr)          //--- its restult is object
  
const newArray = myArr.join() // .join() convert array into string 
// console.log(newArray)
// console.log(typeof newArray)   // its result is ---String

// console.log("A " , myArr)

// console.log(myArr.slice(1,4))    // slice peice of an array 

// console.log(myArr.splice(1,4))  // splice me range tak print hota hai or main array me change hota hai 
// console.log(myArr)              // myArr effected : 

//*********************************Array-Day-2**********************************************

const super_hero = ["Ironman" , "thor" , "skatiman" , "superman" , "spiderman"] ;

const real_hero = ["bhagtsing" , "sukhdev" , "rajguru" , "chandrashekhar" , "scboss"]

//super_hero.push(real_hero);   // if we use push operation  
//console.log(super_hero)
 
// const allhero = super_hero.concat(real_hero)      
// console.log(allhero);
 

// const all_new_heros = [...super_hero , ...real_hero]  //spread operator 
// console.log(all_new_heros)
const newarr = [1,2,3,4,5,[6,7,[45,74,78],8,9] , 88,89,63,1]
const rear_another_arr = newarr.flat(Infinity);            // open an arry flat(pass the depth of array )
//console.log(rear_another_arr)


const name = 'sarthak vyas';
//console.log(Array.isArray(name)) // asking this is an array or not 

//console.log(Array.from(name));   // Array.from(StringName)  use to convert string into array 

//console.log(Array.from({sname : "vedant vyas"}))   // intresting case --- if he can't covert it into an array it gives you an empty string 

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1 , score2 , score3))    // making of array 




