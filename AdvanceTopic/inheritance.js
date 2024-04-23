 class user {
     constructor(username , email , pass) {
        this.username = username
        this.email = email
        this.pass = pass
     }
     logme() {
        console.log(`username : ${this.username} : ture`)
     }

 }

 class Teacher extends user {
    constructor(username , email , pass) {
        super(username)
    }

    addcourse() {
        console.log(`course is added for this username : ${this.username}`)
    }
 }

 const chai = new Teacher("chai" , "chai@gmail.com" , "5885")
 
   chai.addcourse()

   //const masalachai = new user("sarthak")
  //  masalachai.addcourse()  //error : masalachai.addcourse is not a function

  const masalachai = new user('sarthak')
  masalachai.logme()
  chai.logme()  // Teacher can access all function of user class becasue teacher class inherit user class
  