const mongoose = require(`mongoose`);

const { Schema } = mongoose;
const choiceSchema = new Schema({
    userid : {
        type : Number,
        required : true,
        ref : `USERS`
    },
    cid : {
        type : Number,
        required : true,
        ref: 'WORDS'
    }
});

module.exports = mongoose.model('CHOICE', choiceSchema, `CHOICE`);