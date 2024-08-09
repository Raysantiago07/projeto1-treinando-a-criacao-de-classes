class User {
    constructor(fullname,email,password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password) {
        if(this.email === email && this.password === password) {
            console.log(`${this.fullname}: Login sucess!`)
        } else {
            console.log(`${this.fullname}: Login failed!`)
        }
    }
}

const ray = new User('Ray', 'raysantiago10@gmail.com', 'ray123')

ray.login('raysantiago10@gmail.com', 'ray123')