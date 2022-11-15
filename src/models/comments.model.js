import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    message: {
        type: String,
        require: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    
    author: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Like"
        }
    ],

})

const commentModel = mongoose.model("Comment", commentSchema);
export default commentModel;