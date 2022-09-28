/**
 * USER_CONTROLLER CLASS
 * @author Eng Nono saurelle benie
 * @contributors Level 4 (August 2022 Batch) 
 * @Date August 10th 2022
*/
let data = [
    {
        username: "Kambang",
        email: "kambang@mail.com",
        password: 'heroTester',
        isLoggedIn: true,
        createdAt: new Date(Date.now())
    },
    {
        username: "John Doe",
        email: "JohnDoe@email.com",
        password: 'heroTest',
        isLoggedIn: true,
        createdAt: new Date(Date.now())
    },
    {
        username: "Saurelle",
        email: "saurelle@email.com",
        password: 'atlhdj12',
        isLoggedIn: false,
        createdAt: new Date(Date.now())
    },
]

export class UserController {
    // DEPENDENCIES are pass to a class by using constructor
    userData = [{}]// userdata
    constructor(users = [{}]) {
        this.userData = users;
    }

    // add users => C
    addUser(user = {}) {
        // add this user info into our userData
        return this.userData.push(user);
    }
    // list/get all users => R
    getUser() {
        return JSON.stringify(this.userData);
    }
    // get single user
    getSingleUser(email = '') {
        return this.userData.find(user => user.email == email);
    }
    // update users => U
    updateUser(email, userInfo) {
        let foundUser = this.getSingleUser(email);
        if (foundUser) {
            this.userData = this.userData.map(user => {
                if (user.email == foundUser.email) {
                    return { ...foundUser, ...userInfo };
                }
                else
                    return user;
            })
        }
    }
    // delede users => D
    deleteUser(email = "") {
        //si cet email est dans la base de donnee efface le 
        return this.userData.filter(user => user.email !== email)
    }

    //  CRUD operations

}

// const IUser = {
//     username: "",
//     email: "",
//     password: "",
//     isLoggedIn: false,
//     createdAt: ""
// }

// create an instence of the useController
let controler = new UserController(data)
// before update
console.log("All the user before the ubdate =>", JSON.parse(controler.getUser()));
// Call the Add users end point

