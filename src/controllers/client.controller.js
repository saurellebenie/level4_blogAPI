import { Users } from "../modules/users.module.js";

const UserController = {};

UserController.getUsers = (req, res) => {
    res.send(Users);
}

UserController.getUserByEmail = (req, res) => {
    const params = req.params.email;
    console.log("param is", params);
    const User = Users.filter((User) => User.email == params);

    console.log(User[0]);
    res.send(User);
}

UserController.addUser = (req, res) => {
    const newUser = req.body;
    newUser.createdAt = new Date(Date.now());
    newUser.isLoggedIn = true;
    Users.push(newUser);

    res.status(200).send({
        status: 200,
        message: "User account successful created",
        user: newUser
    });
}

// UserController.editUser = (req, res) => {

//     const found = Users.filter(user => user.email == req.params.email);
//     console.log(found);

//     if (found) {

//         const updateUser = req.body;

//         Users.map(user => {

//             if (user.email == req.params.email) {

//                 user.name = updateUser.name ? updateUser.name : user.name;

//                 user.id = updateUser.id ? updateUser.id : user.id;

//                 user.adress = updateUser.adress ? updateUser.adress : user.adress;

//                 res.status(200).send({ message: "User updated", user });

//             }

//         });

//     } else {

//         res.status(200).send({
//             status: 200,
//             message: "User account not found",
//         });

//     }
// }

export default UserController;