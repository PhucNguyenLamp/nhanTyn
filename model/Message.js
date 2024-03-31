const mongoose = require("mongoose");
const day = require("dayjs");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    username: String,
    message: String,
    date: {
        type: Date,
        default: Date.now
    }
});


// Export model
module.exports = mongoose.model("Message", MessageSchema);
