import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: false,
    },
    nlikes: {
        type: Number,
    },
    // published: Boolean,
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment"
        }
      ],
    // author:{
    //     type: Number,
    //     // unique: true,
    //     require: false,
    // },
    author: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Like"
        }
    ]


},
    { timestamps: true, }
)
postSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const postsModel = mongoose.model("Post", postSchema);
export default postsModel;