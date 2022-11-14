import express from "express";
import UserController from "../controllers/client.controller.js";


// invoke the express router function
const userRouter = express.Router();


// get All Users endpoint
userRouter.get("/", UserController.getUsers);
// get user b email
userRouter.get("/:email", UserController.getUserByEmail);
// add a new user
userRouter.post("/add", UserController.addUser);

//   update
userRouter.put("/user/:email", UserController.updateUser);

// });
//Delete User

userRouter.delete("/user/:email", UserController.deleUser);

export default userRouter;