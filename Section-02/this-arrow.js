// this keyword jo hai vo current context ki bat karta hai 

const obj1 =  {
    name : "sarthak",
    age : 22,
    addr : "bhopal", 
    welcome : function() {
        console.log(`${this.name} , welcome to the website`);
        console.log(this)   // this gives full object
    }
    
}

//obj1.welcome();
//obj1.name = "vedant vyas"
//obj1.welcome();
//console.log(this)  // it gives an empty of object 


//                        Arrow Function   

const func1 = (num1 , num2) => {
    return num1 + num2            //explecite return
}  

//console.log(func1(4,9))  

const func2 = (no1 , no2) =>  (no1 + no2)       // In this type we don't need to write return
                                                // implecite return
const func3 = () => ({ username : "sarthak"})

//console.log(func3())
//let ans = func3()
//console.log(ans.username)
//console.log(func2(4,8))




