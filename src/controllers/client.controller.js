import { Users } from "../modules/users.module.js";
import userModel from "../models/user.model.js";

const UserController = {};

UserController.getUsers = async (req, res) => {
    const dbUsers = await userModel.find();
    console.log(dbUsers);
    res.send(dbUsers);
}

UserController.getUserByEmail = async (req, res) => {
    const params = req.params.id;
    
    const newUser = await userModel.find({email:params});
    res.send(newUser);
}

UserController.addUser = async(req, res) => {
    const newUser = req.body;
    newUser.createdAt = new Date(Date.now());
    newUser.isLoggedIn = true;
    const newDbUser = await userModel.create(newUser)

    res.status(200).send({
        status: 200,
        message: "User account successfully created",
        user: newUser
    });
    console.log("The received info is ", newUser);
}

UserController.updateUser = async(req,res) =>{
    const email= req.params.email
    const options = { new: true };
    const updateUser = req.body;
    const newDbUser = await userModel.findOneAndUpdate(email,updateUser,options);
    console.log("voyon:",newDbUser);
    res.send(newDbUser)
}
UserController.deleUser = async(req,res) =>{
    const email= req.params.email;
    const deleUser = await userModel.findOneAndDelete(email)
    res.status(200).send({
        status: 200,
        message: "User account successfully deleted",
    });
}

export default UserController;