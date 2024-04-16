// immediate invoke function : 
// iska use kisi bhi function ko immediate call karne ke liye kiya jata hai 

(function chai() {
    console.log("DB  connected")        // named function
}) () ;                              /// ()() => first paranthisis vo fuction wrap and second () execution 
// if you have two iffe function ek sath then don't miss semicolon (;) 

((name)=>{
    console.log("DB connected")
    console.log(name)                            // unamed fucntion
}) ("sarthak")

