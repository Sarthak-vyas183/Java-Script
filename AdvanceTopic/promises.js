const promiseOne = new Promise(function(resolve , reject) {
    //DO any async task
    //DB call , cryptography , network
    setTimeout(()=>{
       
       // console.log("async task is completed")
        resolve()
    },1000)
})

promiseOne.then(()=>{
    //console.log('promise comsumed');
}) 


// second way to implement promises

new Promise(function(resolve , reject) {
    setTimeout(()=>{
       // console.log("async 2 has resolved : ")
        resolve()
    }, 1000)
   
}).then(()=>{
    //console.log("task 2 done")
})


const promiseThree = new Promise(function(resolve , reject) {
    setTimeout(function(){
        resolve({username : 'sarthak_vyas' , email : 'vyassarthak83@chai.com'})
    },1000)
})
promiseThree.then(function(detail){
         //console.log(detail) 
})




const promisFour = new Promise(function(resolve , reject) {
    setTimeout(function(){
        let Error = true;
    if(!Error)  {
        resolve({username : 'sarthak-vyas' , Password : 'IASv@9633'})
    } else {
        reject('Error something went wrong')
    }
    } , 1000)
})

promisFour
.then((user)=>{
      // console.log(user)
       return user.username;
})
.then((username)=>{
      //console.log(username)
})
.catch((err)=>{
     // console.log(err)
 }).finally(()=>{
   // console.log('the promise either resolve or rejected');
 })



 // promise five

 const promisfive = new Promise(function(resolve , reject) {
    setTimeout(function(){
        let Error = false
    if(!Error)  {
        resolve({username : 'java-Script' , Password : '1234'})
    } else {
        reject('Error something went wrong with js')
    }
    } , 1000)

})

  async function consumepromisfive() {
       try {
        const respones =  await promisfive
        //console.log(respones)
       } catch(err) {
           //console.log(err)
       }

  }

  consumepromisfive()


  async function getAlluser() {
         const  respones =  await fetch('https://api.github.com/users/Sarthak-vyas183');
        // console.log(respones)
        //just because ki data string format me hai is liye hum json me convert jarenge
       const data =  await respones.json(); // just because data bhi json me conver hone me time leta hai so respon.json() ke aage await lagana hoga : 
       //console.log(data)
       console.log(data.login)
  }

  getAlluser()



