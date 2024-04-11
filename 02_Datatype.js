//"use strict"; // treat all js code as newer js version 

//alert(3 + 3) ; // we are useing nodejs not browser  


// number 0 to 9
// bigint 
// String
// Boolean
// null
// undefined
// Symbol = unique


// let state = null;
// console.log(typeof state );

//*****************************Day 2 of data type*************************************************
// let score = "56";
// //to conver a string in number
// let newScore = Number(score);

// console.log(typeof newScore);
// console.log(newScore);

// let value = false;
// let newvalue = Number(value);
// console.log(newvalue);  
// its result should be = 1 or 0;

 

// let isloggedin = 1;
// let boolisloggedin = Boolean(isloggedin)

// console.log(boolisloggedin);
// 1 => true and 0=> false
// "" => false and "sarthak" => false



//****************************operations****************************************** */
// let value = 3;
// let newvalue = -value;
// console.log(newvalue);


//conparison operator : 
// let gamecounter = 100;
//  a = gamecounter++;
//  console.log(a);
//  console.log(gamecounter);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);    // its result is true because in this null is converted in zero(0)//

// === triple equal check the data strictly : 
// matlab === data value ke sath sath data type ko bhi check karta hai 


//**************************Heap/stack*****************************************************
// eg- of stack : 
// call by copy :
// let Username = "sarthakvyas@183";
// let name = Username;
//  name = "sarthak";
//  console.log(name);

// // eg - of Heap : 
// // call by referance 
// let userOne = {
//     email : "vyasartha183",
//     upi : "vdskjfjdhflj@dlkfjdlk"
// } 
// let usertwo = userOne;
// usertwo.email = "Nachiketavyas@gmail.com"; 
// console.log(userOne.email);
// root value change  hoti hai 


//String Interpolation : 
const name = "sarthak";
const repocount = 20;
const industry = "IT";
//console.log(`My name is ${name} and my repository count is ${repocount} and i from ${industry} industry : `);

const gameName = new String("bad-minton");
// console.log(gameName)
// console.log(gameName[2]);
// console.log(gameName.__proto__);  
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName);


//console.log(gameName[5])
//console.log(gameName.charAt(5))
// console.log(gameName.indexOf('t'))

// const substring = gameName.substring(0,5);
// console.log(substring) 

//console.log(gameName.slice (0,5))  //one of the best think with slice that is we can go with negative indxing : 
// console.log(gameName.slice())  unable to understand slice method : 4

// trim remove the spaces from start :  
const desc = "my name is sarthak vyas"
//console.log(desc.trim());

// console.log(desc.trim(desc.replace("sarthak vyas" , "nachiketa vyas")))

//includes method return boolean value true or false : includes method is exist in a string or an array or not 
//console.log(desc.includes("sarthak"));
console.log(desc.split(' '))


