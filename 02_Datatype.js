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
const id = Symbol("123");
 const anotherid = Symbol("123");
 console.log(id === anotherid);
