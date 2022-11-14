import mongoose from 'mongoose';

const db = async () => {
    await mongoose.connect('mongodb://localhost:27017/blogdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Connected to the database!");
        })
        .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
        });

}

export default db;