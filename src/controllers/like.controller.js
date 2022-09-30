import Likes from "../modules/likes.module.js";

const likeControler = {};

// add a like
likeControler.addLike = (req,res) =>{
    const newLike = req.body;
    
    Likes.push(newLike);

    res.send(newLike);
}


export default likeControler;