const mongoose = require(`mongoose`);

const { Schema } = mongoose;
const choiceSchema = new Schema({
    username : {
        type : String,
        required : true,
        ref : `Users`
    },
    word_id : {
        type : Number,
        required : true,
        ref: 'Words'
    }
});

module.exports = mongoose.model('Choice', choiceSchema);