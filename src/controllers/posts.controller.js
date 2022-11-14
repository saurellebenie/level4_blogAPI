// import Posts from '../modules/posts.module.js';
import postsModel from '../models/posts.model.js';

const postController = {};

// get all post
postController.getAllpost = async (request, response) => {
    try{
        const post = await postsModel.find()
    response.send(post);
    }
    catch(error){
        response.send(error);
    }
}
// get post by id
postController.getPostById = async (req, res) => {
    try {
      const blog = await postsModel.findById(req.params.id);
      res.json({ status: "success", blog});
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  }
// add post
postController.addPost = async (req, res) => {
    // const newPost = req.body;
    // const dbPost = await postsModel.create(newPost);
    
    // res.status(200).send({
    //     status: 200,
    //     message: "New post successful created",
    //     Post: dbPost,
    // });
    try{
        const savePost = await new postsModel(req.body);
        const savedPost = await savePost.save()
        res.status(200).json(savedPost);
    }
    catch(error){
        res.status(500).json(error);
    }
}

// delete post
postController.deletePost = async (req, res) => {
  try{
    const post =  await postsModel.findById(req.params.id);
    if(post.userId === req.body.userId){
        await postsModel.delete()
        res.status(200).json('the post is deleted');
    }
    else{
        res.status(403).json('you can only delete your');
    }
    // const deletePost = await postsModel.findOneAndDelete(params);
    
    // res.status(200).send({
    //     status: 200,
    //     message: "post account successfully deleted",
    // });
  }
  catch(error){
    res.status(500).json(error)
  }
}

// update post
postController.updatePost = async (req,res)=> {
    try {
       const post = await postsModel.findById(req.params.id);
       if(post.userId === req.body.userId) {
         await postsModel.updateOne({$set:req.body});
        res.status(200).json('it has been updated');
   
       } else {
           res.status(403).json('you can only update your post');
       }
    } catch (error) {
        res.status(500).json(error)
    }
   
   }
export default postController;