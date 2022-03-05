const mongoose = require(`mongoose`);

const { Schema } = mongoose;
const choiceSchema = new Schema({
    username : {
        type : String,
        required : true,
        ref : `USERS`
    },
    word_id : {
        type : Number,
        required : true,
        ref: 'WORDS'
    }
});

module.exports = mongoose.model('CHOICE', choiceSchema, `CHOICE`);