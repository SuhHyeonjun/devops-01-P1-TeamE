const mongoose = require(`mongoose`);

const { Schema } = mongoose;
const quizSchema = new Schema({
    quiz_id : {
        type: Number,
        required: true,
        ref: 'WORDS'
    },
    question : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('QUIZ', quizSchema, `QUIZ`);