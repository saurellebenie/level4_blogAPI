import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    status:{
        type: Boolean,
        require: false
    },
    post_id:{
        type: Number,
        require: true,
    },
    author: {
        UserId:{
            type: Number,
        },
        name: {
            type: String
        }
    }
});

const likeModel = mongoose.model("like",likeSchema);
export default likeModel;