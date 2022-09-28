import Posts from '../modules/posts.module.js'

const postController = {};

postController.getAllpost = (request, response) => {
    response.send(Posts)
}

postController.addPost = (req, res) => {
    const newPost = req.body;

    Posts.push(newPost);
    res.status(200).send({
        status: 200,
        message: "New post successful created",
        Post: newPost,
    });
}

postController.deletePost = (req, res) => {
    const found = Posts.filter(post => post.owner_id === (req.params.owner_id))
    if (found) {
        Posts = Posts.filter(Post => Post.owner_id !== (req.params.owner_id))
    }
}
export default postController;