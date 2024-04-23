class User{
     constructor(username) {
        this.username = username
     }

     loginMe() {
        console.log(this.username)
     }
    static createId() {
        return `123`
     }
}

const login = new User("sarthak")
//login.loginMe()

const sarthak = new User("vyas183");
//console.log(sarthak.createId())     // dekho ye jo method he na createId ye hai per app ke liye nahi hai  : this is not for everyone
