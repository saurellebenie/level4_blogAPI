import express  from "express";
import postController from '../controllers/posts.controller.js';

const postRouter = express.Router();

// get all posts
postRouter.get("/get", postController.getAllpost)
// get posts by id
postRouter.get('/get/:id', postController.getPostById)
// add new post
postRouter.post("/add", postController.addPost)

// delete post
postRouter.delete("/:id",postController.deletePost)

// update post
postRouter.put("/:id", postController.updatePost)

export default postRouter;