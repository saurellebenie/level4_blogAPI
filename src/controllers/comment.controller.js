
import commentModel from "../models/comments.model.js";
import Comments from "../modules/comments.module.js";
import postsModel from "../models/posts.model.js";
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
commentController.deleteComment = (req, res) => {
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

// add comments
commentController.addComment = async (req, res) => {
    // find out which post you are commenting
    const id = req.params.id;
    // get the comment text and record post id
    const comment = new commentModel({
        text: req.body.comment,
        post: id
    })
    // save comment
    await comment.save();
    // get this particular post
    const postRelated = await postsModel.findById(post_id);
    // push the comment into the post.comments array
    postRelated.comments.push(comment);
    // save and redirect...
    await postRelated.save(function (err) {
        if (err) { console.log(err) }
        res.redirect('/')
    })

}

    export default commentController;

