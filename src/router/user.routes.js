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
// userRouter.put("/user/:email", 

// });
//Delete User

// userRouter.delete("/user/:email", (req, res) => {

//     const found = users.some(user => user.id === parseInt(req.params.id))

//     if (found) {

//         users = users.filter(user => user.id !== (req.params.id))

//         res.json({

//             msg: "User deleted",

//             users

//         });

//     } else {

//         res.sendStatus(200);

//     }

// });



export default userRouter;