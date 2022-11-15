import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    images: [],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    posts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
},
    { timestamps: true, }
);
const userModel = mongoose.model("User", userSchema);
export default userModel;
