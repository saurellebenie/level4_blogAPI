import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({

    title:{
        type: String,
        require: true,
    },
    desc:{
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: false,
    },
    nlikes:{
        type: Number,
    },
    // published: Boolean,
    comments: [{
        type: String,
      }],
    // author:{
    //     type: Number,
    //     // unique: true,
    //     require: false,
    // },
   author : {
    type: String
   }
   

},
{ timestamps: true, }
)
postSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const postsModel = mongoose.model("posts", postSchema);
export default postsModel;