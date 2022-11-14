import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    _id: {
        type: Number,
    },
    post_id:{
        type: Number,
        unique: true,
    },
    message:{
        type: String,
        require: true
    },
    noLikes:{
        type: Number,
    },
    author: {
        UserId :{
            type: Number,
        },
        name:{
            type: String
        }
    }
})

const commentModel = mongoose.model("comment",commentSchema);
export default commentModel;