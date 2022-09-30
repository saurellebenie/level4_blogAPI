import likeControler from "../controllers/like.controller.js";

import express from "express";

const likeRouter = express.Router();

likeRouter.post('/add',likeControler.addLike);

export default likeRouter;