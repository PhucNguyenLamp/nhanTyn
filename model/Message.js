const mongoose = require("mongoose");
const day = require("dayjs");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    username: String,
    message: String,
    date: {
        type: Date,
        default: Date.now,
    }
});

// Virtual for message's time
MessageSchema.virtual("time").get(function () {
    // add 7 utc to get vietnam time
    return day(this.date).add(7, "hour").format("HH:mm");
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);
