const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        default: true
    },
    bounty: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        required: true,
        lowercase: true
    },
    imgUrl: {
        type: String,
        default: ""
    }
});

//model name, model schema
module.exports = mongoose.model("Bounty", bountySchema);