//object literal
let mysym = Symbol("key1");

const jsUser = {
    name : "sarthak",
    "full name" : "sarthak vyas",
    age  : 22,
    [mysym] : "mykeyone",                // this we how to declare the symbole
    location : "Bhopal",
    email : "vyasarthak@gmail.com",
    isLoggedIn : false,
    logdays : ["monday" , "wednesday" , "friday" , "sunday" ]
}
//console.log(jsUser.email)  // this not write approach to access an attribute 
//console.log(jsUser["email"])  // this is  a write approach 
//console.log(jsUser["full name"])
//console.log(jsUser[mysym])               /// how to access the symbol : 

jsUser.email = "sarthakvyas5885@gmail.com";    // this type we can over write email 
//Object.freeze(jsUser);          // to freeze the object 
//jsUser.email = "vyassarthak183@gmail.com";
////console.log(jsUser["email"])

jsUser.desc = function() {
 // //console.log("hello i am a function : shreemati radha rani ki jay : ")
}              // this is a way to add a function in an object

////console.log(jsUser)
////console.log(jsUser.desc())
////console.log(jsUser.desc)   // fucntion retrun nahi hua hai only function ka referance aaya hai 


jsUser.desctow = function() {
    ////console.log(`Hello js user ${this["full name"]} and you are from ${this.location} your login status is ${this.isLoggedIn}`)
}

////console.log(jsUser.desctow())
jsUser.hometown = "ujjain";    // this a way to create new attribute in object






//********************************ObjectSinglton*******************************************
    //                         day of object 

    const tinderUSer = {}
    tinderUSer.name  = "vedant vyas";
    tinderUSer.id = "abc123"
    tinderUSer.location = "bhopal"
    tinderUSer.isLoggedIn = true

    //console.log(tinderUSer)

    const reguralUser = {
         email : "vyassarthak183@gmail.com",
         id : "85885asf",
         username : {
               name : "sarthak@183",
               fullname : {
                firstname : "sarthak",
                lastname : "vyas"
               }
         }
    }

   // console.log(reguralUser.username)
   //console.log(reguralUser.username.fullname)
   //console.log(reguralUser.username.fullname.firstname)
  // console.log(reguralUser.username.name)


  const obj1 =  {
       1 : 'a',
       2 : 'b',
       3 : 'c',
       4  : 'd'   
  } 
  const obj2 = {
    5 : 'e',
    6: 'f',
    7 : 'g',
    8 : 'h',
  }

  // combine two objects 
  obj3 = Object.assign({} , obj1 , obj2)       // {} == target and obj1 and obj2 are source
  obj3 = Object.assign( obj1 , obj2)          // both result are same : 
  
  // console.log(obj3)
 //const obj4 = {...obj1 , ...obj2}
 //console.log(obj4)
 
// convert an object in array 
//  console.log(Object.values(tinderUSer))
//  console.log( Object.keys(tinderUSer))

   // to chekc in the object that it has this type of property : 
    //  console.log(tinderUSer.hasOwnProperty("password"))   // its result could be true or false 

//*******************************Day Three Object**************************************************

 const courseName = {
    name : "javascript",
    lang : "en",
    price : 999 , 
    location : "bhopal",
    courseInstructor : "sarthak"
 }

//const {courseInstructor} = courseName
const {courseInstructor : Instructor} = courseName   // destructuring of an object varialbel 
console.log(Instructor)


