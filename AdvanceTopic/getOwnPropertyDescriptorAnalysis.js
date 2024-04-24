const ans = Math.PI

// console.log(Math.floor(ans))
// console.log(Math.ceil(ans))

 //console.log(Math.floor(Math.PI))

 //que : can you change Math.PI value : 
//  Math.PI = 4;
//  console.log(Math.PI)        // using this technique we can't do it


 
 let descriptor = Object.getOwnPropertyDescriptor(Math,'floor')
//console.log(descriptor)    // math.floor() me writable = true

let descriptors = Object.getOwnPropertyDescriptor(Math,'PI')
//console.log(descriptors)  

let chai = {
    name : 'masala Tea',
    istesty : true,
    price : 149
}
//console.log(Object.getOwnPropertyDescriptor(chai , 'name' ,{}));

Object.defineProperty(chai , 'name' , {
    writable : false,
    istesty : false
}) 
//console.log(Object.getOwnPropertyDescriptor(chai , 'name' ,{})); 

chai.name = "masala chai"
//console.log(chai.name)    // you are unable to chnege the name of object chai because you fix the value 

