const mongoose = require(`mongoose`);

const { Schema } = mongoose;
const candidateSchema = new Schema({
    cid : {
        type: Number,
        required: true,
        unique: true
    },
    name : {
        type: String,
        required: true
    },
    votes : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('CANDIDATE', candidateSchema, `CANDIDATE`);