import { users, Users } from "./src/modules/users.module.js";
import cors from 'cors';
import Posts from "./src/modules/posts.module.js";
import userRouter from "./src/router/user.routes.js";
import postRouter from "./src/router/posts.routes.js";
import commentRouter from "./src/router/comment.routes.js";
import likeRouter from "./src/router/likes.routes.js";
import authRouter from "./src/router/Auth.js";
// import express
import express, { request, response } from "express";
import db from "./src/config/database.js";

var corsOptions = {
    origin: "http://127.0.0.1:5173"
  };

// app.use(cors(corsOptions));
const PORT = 3000;

// create an express app by invoking the espress function
const app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
// register the express JSON midleware 
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});
// this is our first official route listener
// middleware
// route user
// app.use('/user', userRouter);
app.use('/user', authRouter);
// route post
app.use('/post', postRouter);

// route comment
app.use('/comment', commentRouter);

// route like
app.use('/like', likeRouter);


// Start listening for request using express server
app.listen(PORT, async () => {
    console.log("backend running on port", PORT);
    await db();
})

