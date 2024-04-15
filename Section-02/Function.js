// // creation of Normal function : 
// function AddTowNumber(n1 , n2) {
//     let res = n1 + n2;
//     return res;
// }
//    let sum = AddTowNumber(8,9);

//    console.log(`sum of Two NO is : ${sum}`);



// function login(username) {
//     if(username === undefined) {
//         console.log("please enter a username")
//     } else {
//     return `${username} is logged in`
// }
// }
// console.log(login("sarthak@183"));


// nested function 
//function one() {
//     console.log("i ma a fucnton one ");
//     let a =10;
//     function Two() {
//         console.log(`i have ${a} ice-cream`)
//         let b=20;
//     }
//    Two()
// }

// one()


//*******************************Intresting******************************** 

 console.log(addone(6))    /// no error
function addone(num) {
    return num +1
  }


  console.log(addtwo(6))   //it gives error
  const addtwo = function(num) {
    return num +2;
  }


  