const mongoose = require(`mongoose`);

const { Schema } = mongoose;
const wordsSchema = new Schema({
    
});

module.exports = mongoose.model('Words', wordsSchema);