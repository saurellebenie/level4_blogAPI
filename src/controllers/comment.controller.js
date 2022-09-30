
import Comments from "../modules/comments.module.js";

const commentController = {};

// get all the comments
commentController.getComment = (req, res) => {
    res.send(Comments);
}

// get single comment
commentController.getSingleComment = (req, res) => {
    const params = req.params.id;

    const comment = Comments.filter(Comment => Comment.id == params);
    res.send(comment[0]);
}

// add a comment
commentController.addComment = (req, res) => {
   const newComment = req.body;

    Comments.push(newComment);
    res.status(200).send({
        status: 200,
        message: "new comment has successful created",
        comment: newComment,
    });
}

// delete a comment
commentController.deleteComment = (req,res) => {
    const found = Comments.some(Comment => Comment.id === parseInt(req.params.id))

    if (found) {

    let newComments = Comments.filter(Comment => Comment.id !== (req.params.id))

        res.json({

            msg: "User deleted",

            newComments

        });

    } else {

        res.sendStatus(200);

    }

}

export default commentController;

