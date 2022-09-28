import express  from "express";
import postController from '../controllers/posts.controller.js';

const postRouter = express.Router();

// get all posts
postRouter.get("/", postController.getAllpost)

// add new post
postRouter.post("/add", postController.addPost)

// delete post
postRouter.delete("/:owner_id",postController.deletePost)

export default postRouter;