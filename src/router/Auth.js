import express from "express"
const authRouter = express.Router()
import UserController from "../controllers/client.controller.js";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

// register enpoint

authRouter.post('/register', async (req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);


        const savedPost = await new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })

        const resultPost = await savedPost.save();
        res.status(200).json(resultPost);
    }
    catch(error){
        res.status(500).json(error);
    }
})

// login endpoint
authRouter.post('/login', async(req,res) => {
    try {
        const user = await userModel.findOne({username : req.body.username});
        !user && res.status(400).json('wrong user');

    const validate = await bcrypt.compare(req.body.password,user.password);
        !validate && res.status(400).json('wrong password');

        const {password, ...others} = user._doc;

        res.status(200).json(others);


    } catch (error) {
       res.status(500).json(error); 
    }
})
// get All Users endpoint
authRouter.get("/get", UserController.getUsers);

export default authRouter;
