import express from "express"

import commentController from "../controllers/comment.controller.js"

const commentRouter = express.Router();

// get all the comment
commentRouter.get('/', commentController.getComment);
// get single comment
commentRouter.get('/id', commentController.getSingleComment);
// add a comment
commentRouter.post('/post/:id/comment', commentController.addComment);
// delete comment
commentRouter.delete('/remove/:id', commentController.deleteComment);

export default commentRouter;