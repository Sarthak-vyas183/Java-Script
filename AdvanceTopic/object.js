multiplyBy5 = function(num) {
    return num*5;
}

multiplyBy5.lalu = 2;

console.log(multiplyBy5(5))
console.log(multiplyBy5.lalu)
console.log(multiplyBy5.prototype)  

// java script me sabkuchh object hota hai .......ek function bhi hai to vo bhi apne app me 
// ek object hai : 

function createuser(username , score) {
    this.username = username
    this.score  = score
} 

    


