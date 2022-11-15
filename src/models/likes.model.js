import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        require: false
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
});

const likeModel = mongoose.model("Like", likeSchema);
export default likeModel;