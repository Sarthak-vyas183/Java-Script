class user {
    constructor(username , email , password) {
       this.username = username,
       this.email = email,
       this.password = password   
    }

    encryptPassword() {
        this.password = `${this.password}abc`
    }

    changeUsername() {
        this.email = `${this.email}@gmail.com`
    }
}

const chai = new user("sarhtak" , "vyassarhtka183" , "123");
chai.encryptPassword()
console.log(chai.password)
//console.log(chai.username)
//console.log(chai.email)
chai.changeUsername()
console.log(chai.email)