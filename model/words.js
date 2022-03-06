const mongoose = require(`mongoose`);

const { Schema } = mongoose;
const wordsSchema = new Schema({
    cid : {
        type: Number,
        required: true,
        ref: `CANDIDATE`
    },
    word_id : {
        type: Number,
        required: true,
        unique: true
    },
    word : {
        type: String,
        required: true,
    },
    quiz_id : {
        type: Number,
        required: true,
        ref: `QUIZ`,
    }
});

module.exports = mongoose.model('WORDS', wordsSchema, `WORDS`);