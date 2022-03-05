const mongoose = require(`mongoose`);

const { Schema } = mongoose;
const userSchema = new Schema({
    uid : {
        type: Number,
        required: true,
        unique: true,
    },
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    voted_candidate : {
        type: String,
    }
});

module.exports = mongoose.model('USERS', userSchema, `USERS`);