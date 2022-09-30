import { users, Users } from "./src/modules/users.module.js";
import Posts from "./src/modules/posts.module.js";
import userRouter from "./src/router/user.routes.js";
import postRouter from "./src/router/posts.routes.js";
import commentRouter from "./src/router/comment.routes.js";
import likeRouter from "./src/router/likes.routes.js";
// import express
import express, { request, response } from "express";

const PORT = 3000;

// create an express app by invoking the espress function
const app = express();
// register the express JSON midleware 
app.use(express.json());

 

// this is our first official route listener
// middleware
// route user
app.use('/user',userRouter); 

// route post
app.use('/post', postRouter);

// route comment
app.use('/comment', commentRouter);

// route like
app.use('/like',likeRouter);


// Start listening for request using express server
app.listen(PORT, () => {

    console.log("backend running on port", PORT);
})

